// lib/agent-bridge/markers.ts
const MARKER = /\[(?:proof needed|gap)\b[^\]]*\]/i; // non-global: .test() stays stateless
const MARKER_G = new RegExp(MARKER.source, "gi");

export const findMarkers = (text = ""): string[] => text.match(MARKER_G) ?? [];

export const countMarkers = (posts: string[]): number =>
  posts.reduce((n, t) => n + findMarkers(t).length, 0);

/** Drops any sentence containing a marker; drops the line if nothing is left. Idempotent. */
export function stripMarkers(text: string): string {
  return text
    .split("\n")
    .flatMap((line) => {
      if (!MARKER.test(line)) return [line];
      const kept = line
        .split(/(?<=[.!?])\s+/)
        .filter((s) => !MARKER.test(s))
        .join(" ")
        .trim();
      return kept ? [kept] : [];
    })
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
