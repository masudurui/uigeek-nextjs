// lib/agent-bridge/time.ts
export type BoardColumn = { city: string; iana: string };

const IANA_TO_CITY: Record<string, string> = {
  "Europe/London": "London",
  "America/New_York": "New York",
  "Europe/Berlin": "Berlin",
  "Asia/Dubai": "Dubai",
};

export function cityFor(iana: string): string {
  return IANA_TO_CITY[iana] ?? iana.split("/").pop()?.replace(/_/g, " ") ?? iana;
}

/** Home first, then New York, then London. Deduplicated by zone. */
export function boardColumns(homeTimezone: string): BoardColumn[] {
  const zones = [homeTimezone, "America/New_York", "Europe/London"];
  return [...new Set(zones)].map((iana) => ({ city: cityFor(iana), iana }));
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const toMin = (hm: string) => {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
};

function localParts(iso: string, iana: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: iana,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  return { day: DAYS.indexOf(get("weekday")), minutes: toMin(`${get("hour")}:${get("minute")}`) };
}

/**
 * Is `iso` inside `windowStr`, read in that zone's local time?
 * Formats: "Tue–Thu 08:00–10:30", "Wed–Thu 09:00–13:00, 18:00–20:00", "Sat 10:00–12:00".
 * Start-inclusive, end-exclusive. Day ranges may wrap (Fri–Mon).
 */
export function inWindow(iso: string | undefined, windowStr: string | undefined, iana: string): boolean {
  if (!iso || !windowStr || Number.isNaN(Date.parse(iso))) return false;
  const m = windowStr.trim().match(/^(\w{3})(?:\s*[–-]\s*(\w{3}))?\s+(.+)$/);
  if (!m) return false;
  const [, from, to = from, times] = m;
  const d0 = DAYS.indexOf(from);
  const d1 = DAYS.indexOf(to);
  if (d0 < 0 || d1 < 0) return false;

  const { day, minutes } = localParts(iso, iana);
  const dayOk = d0 <= d1 ? day >= d0 && day <= d1 : day >= d0 || day <= d1;
  if (!dayOk) return false;

  return times.split(/,|\band\b/).some((r) => {
    const t = r.trim().match(/^(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})$/);
    return !!t && minutes >= toMin(t[1]) && minutes < toMin(t[2]);
  });
}

/** "Tue 09:30" in the given zone. */
export function formatSlot(iso: string, timeZone: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
}
