// lib/agent-bridge/fixtures/customer-list.ts
import { PackSet } from "../schema";

const LONDON = "Europe/London";

export const customerListFixture = PackSet.parse({
  type: "case_study",
  home_timezone: LONDON,
  target_audience: "London",
  input_summary:
    "Customer list app for a small service business that tracked customers across notebooks, chats and spreadsheets.",
  gaps: ["Outcome proof (marker kept by request)"],
  packs: [
    {
      id: "cl-linkedin",
      network: "linkedin",
      status: "approved",
      recommended_at: "2026-09-22T09:30:00+01:00",
      windows: { London: "Tue–Thu 08:00–10:30", "New York": "Tue–Thu 08:00–10:30" },
      posts: [
        `A small service business was running its customers out of notebooks, chat threads, and three spreadsheets.

Contacts got lost. Follow-ups got missed. Nobody could say who bought what.

We built them one customer list.
→ profiles with notes, files, key dates
→ leads, prospects, clients labelled
→ every interaction in one timeline
→ appointments, payments, reminders

What changed: [proof needed]
What I'd tell the next team: put every customer in one list before you add campaigns or payments.

If your customer list lives in WhatsApp, DM me.`,
      ],
      hashtags: ["#UXDesign", "#SaaS", "#SmallBusiness"],
    },
    {
      id: "cl-x",
      network: "x",
      status: "approved",
      recommended_at: "2026-09-22T10:15:00+01:00",
      windows: { London: "Tue–Wed 09:00–12:00", "New York": "Tue–Wed 09:00–12:00" },
      posts: [
        "A small service business ran its customers out of notebooks, chats and scattered spreadsheets. Lost contacts, missed follow-ups, no idea who bought what. We built them one customer list.",
        "Profiles with notes, files and key dates. Lead / prospect / client labels. One interaction timeline. Appointments, payments, reminders.",
        "Lesson: put every customer in one list before you add campaigns or payments. Result: [proof needed]. If your customer list lives in your DMs, mine are open.",
      ],
    },
    {
      id: "cl-threads",
      network: "threads",
      status: "edited",
      recommended_at: "2026-09-23T12:30:00+01:00",
      windows: {
        London: "Wed–Thu 09:00–13:00, 18:00–20:00",
        "New York": "Wed–Thu 09:00–13:00, 18:00–20:00",
      },
      posts: [
        "Small service business, growing fast. Customer list = notebooks + chats + three spreadsheets. Nobody knew who bought what.",
        "We put it in one place. Profiles, notes, lead/client labels, reminders. Honest question: where does your customer list actually live?",
      ],
    },
    {
      id: "cl-instagram",
      network: "instagram",
      status: "packed",
      needs_media: true,
      recommended_at: "2026-09-23T12:00:00+01:00",
      windows: { London: "Tue–Thu 11:00–14:00", "New York": "Tue–Thu 11:00–14:00" },
      posts: [
        `Their customer list lived in four places. Now it lives in one.

Profiles, notes, files, key dates, lead → client labels, and a timeline of every interaction. Built for a small service business that was outgrowing its notebooks.

Result: [proof needed]

DM if your customers are scattered too.`,
      ],
      carousel_cards: [
        "Their customer list lived in 4 places.",
        "Notebooks. Chats. Spreadsheets. Memory.",
        "Lost contacts. Missed follow-ups. No purchase history.",
        "One list. Every customer. [screen 1: customer list]",
        "Notes, files, dates, one timeline. [screen 2: profile + notes timeline]",
        "Leads → prospects → clients. [screen 3: leads / clients filter]",
        "Result: [proof needed]. DM to build yours.",
      ],
      hashtags: ["#uxdesign", "#uidesign", "#productdesign", "#saas", "#crm", "#smallbusiness", "#dashboarddesign", "#figma"],
      alt_text:
        "Carousel showing a customer list app: a list of customers, a single customer profile with notes and a timeline, and a filter separating leads, prospects and clients.",
    },
    {
      id: "cl-shorts",
      network: "youtube_shorts",
      status: "packed",
      needs_media: true,
      recommended_at: "2026-09-24T18:30:00+01:00",
      windows: { London: "Thu–Sat 18:00–21:00", "New York": "Thu–Sat 18:00–21:00" },
      title: "Their customers lived in WhatsApp",
      short_script:
        "This business ran every customer out of WhatsApp, notebooks, and three spreadsheets. So we built one list. Every customer, every note, every date, in one timeline. Leads and clients, separated. [proof needed]. If that's you, DM me.",
      on_screen_text: [
        "Notebooks + chats + 3 spreadsheets",
        "One list",
        "Every note, one timeline",
        "Leads → clients",
        "[proof needed]",
      ],
      shot_list: [
        "0–4s: text on black, 'Notebooks + chats + 3 spreadsheets'",
        "4–12s: screen 1, scroll the customer list",
        "12–20s: screen 2, open a profile, scroll the notes timeline",
        "20–26s: screen 3, toggle leads → clients",
        "26–28s: end card, DM line",
      ],
      tags: ["ux design", "crm", "small business", "product design", "saas"],
    },
  ],
});

if (customerListFixture.packs.length === 0) {
  throw new Error("customerListFixture has no packs");
}
