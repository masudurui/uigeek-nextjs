// app/agent-bridge/page.tsx
"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { z } from "zod";
import { customerListFixture } from "@/lib/agent-bridge/fixtures/customer-list";
import type { PackSet } from "@/lib/agent-bridge/schema";
import { countMarkers } from "@/lib/agent-bridge/markers";
import { boardColumns, cityFor, formatSlot, inWindow } from "@/lib/agent-bridge/time";
import { newRow, nextCopy, postsFor, reduceRow, restoreRow, type Action, type Row } from "@/lib/agent-bridge/status";

// ---------- state ----------

type Rows = Record<string, Row>;
type State = { set: PackSet; rows: Rows };

type GlobalAction =
  | { type: "HYDRATE"; state: State }
  | { type: "ROW"; id: string; action: Action };

const initState = (set: PackSet): State => ({
  set,
  rows: Object.fromEntries(set.packs.map((p) => [p.id, newRow(p)])),
});

function reducer(state: State, a: GlobalAction): State {
  switch (a.type) {
    case "HYDRATE":
      return a.state;
    case "ROW": {
      const row = state.rows[a.id];
      return row ? { ...state, rows: { ...state.rows, [a.id]: reduceRow(row, a.action) } } : state;
    }
  }
}

// ---------- persistence ----------
// Only { delivery, markersRemoved } per pack.id. Pack text always comes from the fixture.

const STORAGE_KEY = "agent-bridge:v1";

const SavedRow = z.object({
  delivery: z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("idle") }),
    z.object({ kind: z.literal("copying"), copied: z.number().int().min(1) }),
    z.object({ kind: z.literal("copied") }),
    z.object({ kind: z.literal("sent"), at: z.string() }),
  ]),
  markersRemoved: z.boolean().default(false),
});

function load(set: PackSet): State | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved: Record<string, unknown> = JSON.parse(raw);
    const rows: Rows = Object.fromEntries(
      set.packs.map((p) => {
        const s = SavedRow.safeParse(saved[p.id]);
        return [p.id, s.success ? restoreRow(p, s.data) : newRow(p)];
      })
    );
    return { set, rows };
  } catch {
    return null; // unreadable storage: start fresh
  }
}

function save(rows: Rows) {
  try {
    const out = Object.fromEntries(
      Object.entries(rows).map(([id, r]) => [id, { delivery: r.delivery, markersRemoved: r.markersRemoved }])
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
  } catch {
    // private mode or quota: the board still works, it just won't survive a reload
  }
}

// ---------- helpers ----------

const UNDO_MS = 5000;
const NETWORK_LABEL: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube_shorts: "Shorts",
  x: "X",
  threads: "Threads",
};
const TYPE_LABEL: Record<string, string> = {
  article: "Article",
  case_study: "Case study",
  launch_video: "Launch video",
  meme: "Meme",
};

function statusLabel(row: Row): string {
  const n = postsFor(row).length;
  switch (row.delivery.kind) {
    case "sent":
      return "Sent";
    case "copied":
      return "Approved · copied";
    case "copying":
      return `Approved · ${row.delivery.copied}/${n}`;
    default:
      return row.pack.status[0].toUpperCase() + row.pack.status.slice(1);
  }
}

// ---------- page ----------

const btn =
  "px-2.5 py-1 text-xs rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400";

export default function AgentBridgePage() {
  const [state, dispatch] = useReducer(reducer, customerListFixture, initState);
  const [hydrated, setHydrated] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [copyError, setCopyError] = useState<string | null>(null);

  const [text, setText] = useState("");

  const { set, rows: rowMap } = state;
  const rows = useMemo(() => Object.values(rowMap), [rowMap]);
  const homeTz = set.home_timezone;
  const cols = boardColumns(homeTz);
  const grid = { gridTemplateColumns: `6.5rem 6.5rem repeat(${cols.length}, 4.5rem) minmax(9rem, 1fr) minmax(12rem, 1.3fr)` };

  // Hydrate once, client only. Persist only after hydration (StrictMode mounts effects twice).
  useEffect(() => {
    const loaded = load(customerListFixture);
    if (loaded) dispatch({ type: "HYDRATE", state: loaded });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) save(state.rows);
  }, [state.rows, hydrated]);

  // Tick only while an Undo is visible.
  const undoPending = rows.some((r) => r.delivery.kind === "sent" && now - Date.parse(r.delivery.at) < UNDO_MS);
  useEffect(() => {
    if (!undoPending) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [undoPending]);

  const act = (id: string, action: Action) => {
    setCopyError(null);
    dispatch({ type: "ROW", id, action });
  };

  const copy = async (row: Row, force: boolean) => {
    if (countMarkers(postsFor(row)) > 0 && !force) return;
    const t = nextCopy(row);
    if (!t) return;
    try {
      await navigator.clipboard.writeText(t);
      act(row.pack.id, { type: "COPIED_POST", force });
    } catch {
      setCopyError(row.pack.id);
    }
  };

  const markSent = (id: string) => {
    const at = new Date().toISOString();
    setNow(Date.parse(at));
    act(id, { type: "MARK_SENT", at });
  };

  const sentCount = rows.filter((r) => r.delivery.kind === "sent").length;
  const live = rows.filter((r) => !r.pack.skip).length;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-8 sm:px-10 font-mono text-sm">
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-lg font-medium tracking-tight">
          Agent Bridge
          <span className="ml-3 text-neutral-500 font-normal">
            {set.type ? TYPE_LABEL[set.type] : "Unclassified"} · {cityFor(homeTz)}
          </span>
        </h1>
        <span className="text-neutral-500 text-xs">
          {sentCount}/{live} sent
        </span>
      </header>

      {/* Board */}
      <section aria-label="Packs" className="mb-10 overflow-x-auto rounded-lg border border-neutral-800">
        <div className="min-w-[46rem]">
          <div
            className="grid gap-2 px-4 py-2.5 text-xs text-neutral-500 border-b border-neutral-800 bg-neutral-900/50"
            style={grid}
          >
            <div>Network</div>
            <div>Send</div>
            {cols.map((c) => (
              <div key={c.iana}>{c.city}</div>
            ))}
            <div>Status</div>
            <div>Next</div>
          </div>

          {rows.map((row) => {
            const { pack, delivery } = row;
            const posts = postsFor(row);
            const markers = countMarkers(posts);
            const skipped = pack.skip;
            const sent = delivery.kind === "sent";
            const showUndo = sent && now - Date.parse(delivery.at) < UNDO_MS;
            const approved = pack.status === "approved";
            const copyable = approved && (delivery.kind === "idle" || delivery.kind === "copying");

            return (
              <div
                key={pack.id}
                className={`grid gap-2 px-4 py-3.5 items-center border-b border-neutral-900 last:border-0 ${
                  skipped ? "opacity-40" : ""
                }`}
                style={grid}
              >
                <div className="font-medium">{NETWORK_LABEL[pack.network]}</div>

                <div className="text-neutral-400 tabular-nums">
                  {skipped
                    ? "—"
                    : sent
                      ? formatSlot(delivery.at, homeTz)
                      : pack.recommended_at
                        ? formatSlot(pack.recommended_at, homeTz)
                        : "—"}
                </div>

                {cols.map((c) => {
                  const hit = inWindow(pack.recommended_at, pack.windows[c.city], c.iana);
                  return (
                    <div key={c.iana} title={hit ? `In the ${c.city} window` : `Outside the ${c.city} window`}>
                      {skipped || sent || !pack.recommended_at ? "—" : hit ? "✓" : "–"}
                    </div>
                  );
                })}

                <div>
                  <span className="inline-flex flex-wrap items-center gap-x-1.5 px-2 py-0.5 rounded bg-neutral-800 text-xs">
                    {skipped ? "Skipped" : statusLabel(row)}
                    {!skipped && markers > 0 && (
                      <span className="text-amber-400">
                        · {markers} marker{markers > 1 ? "s" : ""}
                      </span>
                    )}
                    {!skipped && pack.needs_media && <span className="text-neutral-500">· needs media</span>}
                    {skipped && pack.skip_reason && <span className="text-neutral-500">· {pack.skip_reason}</span>}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {skipped ? (
                    <span className="text-neutral-600 text-xs">—</span>
                  ) : (
                    <>
                      {approved && markers > 0 && delivery.kind === "idle" && (
                        <button
                          onClick={() => act(pack.id, { type: "REMOVE_MARKERS" })}
                          className={`${btn} border border-amber-700/50 text-amber-400 hover:bg-amber-950/30`}
                        >
                          Remove markers
                        </button>
                      )}

                      {copyable && markers === 0 && (
                        <button onClick={() => copy(row, false)} className={`${btn} bg-white text-black hover:bg-neutral-200`}>
                          {posts.length > 1
                            ? `Copy ${(delivery.kind === "copying" ? delivery.copied : 0) + 1}/${posts.length}`
                            : "Copy"}
                        </button>
                      )}

                      {copyable && markers > 0 && (
                        <button
                          onClick={() => copy(row, true)}
                          className={`${btn} border border-neutral-600 text-neutral-400 hover:bg-neutral-800`}
                        >
                          Copy anyway
                        </button>
                      )}

                      {delivery.kind === "copied" && (
                        <button onClick={() => markSent(pack.id)} className={`${btn} bg-emerald-600 text-white hover:bg-emerald-500`}>
                          Mark sent
                        </button>
                      )}

                      {showUndo && (
                        <button
                          onClick={() => act(pack.id, { type: "UNDO" })}
                          className={`${btn} border border-neutral-700 text-neutral-400 hover:bg-neutral-800`}
                        >
                          Undo
                        </button>
                      )}
                      {sent && !showUndo && <span className="text-neutral-600 text-xs">—</span>}

                      {(pack.status === "packed" || pack.status === "edited") && !pack.needs_media && (
                        <button
                          onClick={() => act(pack.id, { type: "APPROVE" })}
                          className={`${btn} border border-neutral-600 hover:bg-neutral-800`}
                        >
                          Approve
                        </button>
                      )}

                      {pack.needs_media && (
                        <button
                          disabled
                          title="Attaching media isn't built yet"
                          className={`${btn} border border-neutral-800 text-neutral-600 cursor-not-allowed`}
                        >
                          Attach media
                        </button>
                      )}

                      {copyError === pack.id && (
                        <span role="alert" className="text-red-400 text-xs">
                          Copy failed. Click the page, then try again.
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Composer (generation not wired yet) */}
      <section aria-label="Composer" className="border-t border-neutral-800 pt-6">
        <label htmlFor="atom" className="sr-only">
          Material
        </label>
        <textarea
          id="atom"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the next atom"
          className="w-full h-28 bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-sm resize-none focus:outline-none focus:border-neutral-500 placeholder:text-neutral-600"
        />
        <div className="mt-3 flex items-center justify-end gap-3">
          <span className="text-xs text-neutral-600">Generation isn't connected yet.</span>
          <button disabled className={`${btn} px-4 py-1.5 bg-neutral-800 text-neutral-500 cursor-not-allowed`}>
            Generate pack
          </button>
        </div>
      </section>
    </main>
  );
}
