import { z } from "zod";

export const Network = z.enum(["linkedin", "instagram", "youtube_shorts", "x", "threads"]);
export const ContentType = z.enum(["article", "case_study", "launch_video", "meme"]);

/** What the model may set. Copied / Sent live in lib/status.ts, never here. */
export const PackStatus = z.enum(["classified", "packed", "edited", "approved"]);

const validTimeZone = (tz: string) => {
  try {
    new Intl.DateTimeFormat("en", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
};

export const Pack = z.object({
  id: z.string().min(1),
  network: Network,
  status: PackStatus, // required: a missing status must fail, not demote
  skip: z.boolean().default(false),
  skip_reason: z.string().optional(),
  posts: z.array(z.string()).default([]), // LinkedIn = 1 item, X / Threads = thread
  hashtags: z.array(z.string()).default([]),
  needs_media: z.boolean().default(false),
  recommended_at: z.iso.datetime({ offset: true }).optional(),
  windows: z.record(z.string(), z.string()).default({}), // city → "Tue–Thu 08:00–10:30"
  title: z.string().optional(),
  carousel_cards: z.array(z.string()).optional(),
  shot_list: z.array(z.string()).optional(),
  short_script: z.string().optional(),
  on_screen_text: z.array(z.string()).optional(),
  alt_text: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const PackSet = z
  .object({
    type: ContentType.optional(), // absent when asking the one question
    message: z.string().optional(), // the one question, or a short note
    home_timezone: z.string().refine(validTimeZone, "unknown IANA zone").default("Europe/London"),
    target_audience: z.string().default("London"),
    input_summary: z.string().optional(),
    gaps: z.array(z.string()).default([]),
    packs: z.array(Pack).default([]),
  })
  .refine((s) => s.packs.length > 0 || !!s.message, "empty response: no packs and no question")
  .refine((s) => new Set(s.packs.map((p) => p.id)).size === s.packs.length, "duplicate pack ids");

export type Network = z.infer<typeof Network>;
export type ContentType = z.infer<typeof ContentType>;
export type PackStatus = z.infer<typeof PackStatus>;
export type Pack = z.infer<typeof Pack>;
export type PackSet = z.infer<typeof PackSet>;

/** Tool input_schema for the model. Input mode: defaulted fields stay optional. */
export const packSetJsonSchema = (() => {
  const { $schema: _drop, ...rest } = z.toJSONSchema(PackSet, { io: "input" }) as Record<string, unknown>;
  return rest;
})();
