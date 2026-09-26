// app/noor/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noor Support",
  description: "Support and contact for the Noor iOS app.",
};

const SUPPORT_EMAIL = "heyuigeek@gmail.com";

export default function NoorSupportPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-zinc-300">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
          ← Uigeek
        </Link>

        <h1 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight text-white">Noor</h1>
        <p className="mt-4 leading-relaxed">
          This page is for the Noor iOS app. If you have a question, found a bug, or need help, get in touch.
        </p>

        <section className="mt-12 border-t border-white/5 pt-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">Support</h2>
          <p className="mt-3 leading-relaxed">
            Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="mt-10 border-t border-white/5 pt-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">Privacy</h2>
          <p className="mt-3 leading-relaxed">
            <Link href="/noor/privacy" className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white">
              Read the Noor privacy policy
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
