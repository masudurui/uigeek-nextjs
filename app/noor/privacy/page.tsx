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
        <p className="mt-3 text-sm text-zinc-500">Last updated: September 26, 2026</p>

        <p className="mt-8 leading-relaxed">
          This Privacy Policy applies to the <strong className="text-white font-medium">Noor iOS app</strong>{" "}
          (&ldquo;Noor&rdquo;, &ldquo;the App&rdquo;). It does not apply to the Uigeek studio website.
        </p>

        {/* Policy body */}
        <div className="mt-10 space-y-6 leading-relaxed [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          <h2>The short version</h2>
          <p>
            Noor is an offline app. Your data stays on your device. We do not collect your name or email, we do not
            run servers that store your data, and there is no advertising, analytics, or tracking in the app.
          </p>

          <h2>Data storage</h2>
          <p>
            All data you create or store in Noor stays only on your iPhone. It is not uploaded to us or to any cloud
            service we control. We cannot access or read your data.
          </p>

          <h2>What Noor does not collect</h2>
          <ul>
            <li>No name or email address</li>
            <li>No account sign-in information sent to us</li>
            <li>No location, contacts, camera, photo library, or microphone access</li>
            <li>No analytics or usage tracking</li>
            <li>No advertising or advertising identifiers</li>
            <li>No third-party SDKs that collect personal data</li>
            <li>No selling or sharing of your data with anyone</li>
          </ul>

          <h2>Crash reports</h2>
          <p>
            If you have turned on &ldquo;Share with App Developers&rdquo; in your iPhone&rsquo;s Analytics &amp;
            Improvements settings, Apple may send us anonymous crash reports. These do not identify you and are used
            only to fix bugs. You can turn this off at any time in iOS Settings.
          </p>

          <h2>Deleting your data</h2>
          <p>
            You can remove your Noor data by deleting it inside the app or by deleting the app from your device.
            Because we do not store your data on our servers, once it is removed from your phone it is gone from our
            side as well.
          </p>

          <h2>Children</h2>
          <p>
            Noor does not knowingly collect personal information from children. Because data stays only on the device,
            we do not hold personal information about users.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we will update this page and the &ldquo;Last updated&rdquo; date. Significant
            changes will also be noted in the app&rsquo;s release notes.
          </p>
        </div>

        <section className="mt-12 border-t border-white/5 pt-8">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy:{" "}
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
