// lib/agent-bridge/status.ts
import type { Pack } from "./schema";
import { countMarkers, stripMarkers } from "./markers";

export type Delivery =
  | { kind: "idle" }
  | { kind: "copying"; copied: number } // threads: posts copied so far
  | { kind: "copied" }
  | { kind: "sent"; at: string };

export type Row = { pack: Pack; delivery: Delivery; markersRemoved: boolean };

export type Action =
  | { type: "APPROVE" }
  | { type: "REMOVE_MARKERS" }
  | { type: "COPIED_POST"; force?: boolean } // dispatch only after the clipboard write succeeds
  | { type: "MARK_SENT"; at: string }
  | { type: "UNDO" };

export const newRow = (pack: Pack): Row => ({ pack, delivery: { kind: "idle" }, markersRemoved: false });

/** The posts that are actually shown and copied. */
export function postsFor(row: Row): string[] {
  return row.markersRemoved
    ? row.pack.posts.map(stripMarkers).filter((p) => p.length > 0)
    : row.pack.posts;
}

export function reduceRow(row: Row, action: Action): Row {
  const { pack, delivery } = row;
  switch (action.type) {
    case "APPROVE":
      if (pack.skip || pack.status === "approved" || pack.needs_media) return row;
      return { ...row, pack: { ...pack, status: "approved" } };

    case "REMOVE_MARKERS":
      if (pack.status !== "approved" || delivery.kind !== "idle") return row;
      return { ...row, markersRemoved: true };

    case "COPIED_POST": {
      if (pack.status !== "approved") return row;
      const posts = postsFor(row);
      if (countMarkers(posts) > 0 && !action.force) return row;
      const done = (delivery.kind === "copying" ? delivery.copied : 0) + 1;
      return {
        ...row,
        delivery: done >= posts.length ? { kind: "copied" } : { kind: "copying", copied: done },
      };
    }

    case "MARK_SENT":
      return delivery.kind === "copied" ? { ...row, delivery: { kind: "sent", at: action.at } } : row;

    case "UNDO":
      return delivery.kind === "sent" ? { ...row, delivery: { kind: "copied" } } : row;
  }
}

/** The text the next Copy should write. Hashtags go on the last post. */
export function nextCopy(row: Row): string | null {
  if (row.pack.status !== "approved") return null;
  const posts = postsFor(row);
  const i = row.delivery.kind === "idle" ? 0 : row.delivery.kind === "copying" ? row.delivery.copied : -1;
  if (i < 0 || i >= posts.length) return null;
  const last = i === posts.length - 1 && row.pack.hashtags.length > 0;
  return last ? `${posts[i]}\n\n${row.pack.hashtags.join(" ")}` : posts[i];
}

/** Restores saved delivery onto fresh pack content. Clamps a thread position that no longer fits. */
export function restoreRow(pack: Pack, saved: { delivery: Delivery; markersRemoved: boolean }): Row {
  const row: Row = { pack, delivery: saved.delivery, markersRemoved: saved.markersRemoved };
  const n = postsFor(row).length;
  if (row.delivery.kind === "copying" && row.delivery.copied >= n) row.delivery = { kind: "copied" };
  return row;
}
