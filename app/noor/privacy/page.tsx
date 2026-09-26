// app/noor/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Noor Privacy Policy",
  description: "Privacy policy for the Noor iOS app.",
};

const CONTACT_EMAIL = "heyuigeek@gmail.com";

export default function NoorPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-zinc-300">
      <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Link href="/noor" className="text-sm text-zinc-500 hover:text-white transition-colors">
          ← Noor
        </Link>

        <h1 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Privacy Policy — Noor
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated: September 25, 2026</p>

        <p className="mt-8 leading-relaxed">
          This is the privacy policy for the <strong className="text-white font-medium">Noor iOS app</strong>. It
          does not cover the Uigeek studio website.
        </p>

        {/* Policy body — replace the placeholder below with the provided text. */}
        <div className="mt-10 space-y-6 leading-relaxed [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white">
          <p className="text-zinc-500 italic">Policy text coming soon.</p>
        </div>

        <section className="mt-12 border-t border-white/5 pt-8">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <p className="mt-12">
          <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
            ← Back to Uigeek
          </Link>
        </p>
      </article>
    </main>
  );
}
