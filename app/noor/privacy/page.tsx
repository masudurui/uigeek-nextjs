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

        {/* Policy body */}
        <div className="mt-10 space-y-6 leading-relaxed [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          <h2>The short version</h2>
          <p>
            Noor keeps your data on your device and in your own iCloud account. We don&apos;t run servers that store
            your data, we don&apos;t sell or share it, and there is no advertising, analytics, or tracking in the app.
          </p>

          <h2>Sign in with Apple</h2>
          <p>
            Noor uses Sign in with Apple to create your account. When you sign in, Apple gives the app a unique user
            identifier and, if you choose to share them, your name and email address. You can use Apple&apos;s Hide My
            Email option, in which case the app only receives a private relay address.
          </p>
          <p>
            This account information is stored on your device and in your iCloud account. It is not sent to us or to
            any server we operate.
          </p>

          <h2>Your data and iCloud</h2>
          <p>
            Content you create in Noor is saved on your device and synced through your own iCloud account using
            Apple&apos;s CloudKit. That data is protected by your Apple ID and is governed by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white"
            >
              Apple&apos;s Privacy Policy
            </a>
            . We cannot access or read it.
          </p>

          <h2>What Noor does not collect</h2>
          <ul>
            <li>No location, contacts, camera, photo library, or microphone access.</li>
            <li>No analytics or usage tracking.</li>
            <li>No advertising, and no advertising identifiers.</li>
            <li>No third-party SDKs that collect personal data.</li>
            <li>No selling or sharing of your data with anyone.</li>
          </ul>

          <h2>Crash reports</h2>
          <p>
            If you have turned on &ldquo;Share with App Developers&rdquo; in your iPhone&apos;s Analytics &amp;
            Improvements settings, Apple may send us anonymous crash reports and diagnostics. These do not identify you
            and are used only to fix bugs. You can turn this off at any time in iOS Settings.
          </p>

          <h2>Deleting your account and data</h2>
          <p>
            You can delete your account and all of your Noor data from inside the app, in Settings. This removes your
            data from your device and from your iCloud account. You can also stop using Sign in with Apple for Noor at
            any time in your Apple ID settings.
          </p>

          <h2>Children</h2>
          <p>
            Noor does not knowingly collect personal information from children. Because your data stays on your device
            and in your iCloud account, we do not hold any personal information about anyone who uses the app.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we will update this page and the &ldquo;Last updated&rdquo; date above. Significant
            changes will also be noted in the app&apos;s release notes.
          </p>
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
