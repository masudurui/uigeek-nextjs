// app/noor/privacy/page.tsx
import Link from "next/link";

const CONTACT_EMAIL = "masudurui@gmail.com";
const LAST_UPDATED = "29 September 2026";

const linkClass = "text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white";

export default function NoorPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-zinc-300">
      <article className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
        <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
          ← Uigeek
        </Link>

        <h1 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Privacy Policy — Noor
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

        <p className="mt-8 leading-relaxed">
          This Privacy Policy applies to the <strong className="text-white font-medium">Noor iOS app</strong>{" "}
          (&ldquo;Noor&rdquo;, &ldquo;the App&rdquo;), a utility for prayer times, the Quran, dhikr, qibla direction,
          and finding nearby mosques. It does not apply to the Uigeek studio website.
        </p>

        {/* Policy body */}
        <div className="mt-10 space-y-6 leading-relaxed [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-white [&_strong]:font-medium">
          <h2>1. The short version</h2>
          <ul>
            <li>Noor has no user accounts, no ads, and no analytics SDK.</li>
            <li>We do not run a backend that stores your data. We never receive your location or your in-app data.</li>
            <li>
              Noor can use your location, if you allow it, to calculate prayer times on your device and to find
              mosques near you through Apple Maps.
            </li>
            <li>You can deny location access and choose your city manually instead.</li>
            <li>Your bookmarks, settings, dhikr counts, and downloaded audio stay on your device.</li>
          </ul>

          <h2>2. Location</h2>
          <p>
            Noor asks for permission to use your device&rsquo;s location. Location is used for the following
            purposes only:
          </p>
          <ul>
            <li>
              <strong>Prayer times and qibla.</strong> Your coordinates are used on your device to calculate prayer
              times and the qibla direction. This calculation happens entirely on your iPhone. Your location is not
              sent to us or stored on any server we operate.
            </li>
            <li>
              <strong>Mosque search.</strong> When you search for nearby mosques, Noor uses Apple&rsquo;s MapKit
              (MKLocalSearch). To return results, Apple receives the search request, including the area around your
              location. Apple handles this request under the{" "}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Apple Privacy Policy
              </a>
              . We do not receive or store these searches.
            </li>
            <li>
              <strong>Manual city instead.</strong> Location access is optional. If you deny it, or turn it off later
              in iOS Settings, you can pick a city manually and Noor will calculate prayer times for that city.
            </li>
          </ul>
          <p>
            You can change location access at any time in <strong>Settings → Privacy &amp; Security → Location
            Services → Noor</strong>.
          </p>

          <h2>3. What stays on your device</h2>
          <p>The following is stored only on your iPhone and is never sent to us:</p>
          <ul>
            <li>Quran bookmarks</li>
            <li>Your selected city and location settings</li>
            <li>Prayer time calculation method and other preferences</li>
            <li>Dhikr counts</li>
            <li>Downloaded Quran audio</li>
          </ul>

          <h2>4. What we do not collect</h2>
          <ul>
            <li>No name, email address, or phone number</li>
            <li>No user accounts or sign-in</li>
            <li>No analytics or usage tracking</li>
            <li>No advertising or advertising identifiers</li>
            <li>No tracking across other apps or websites</li>
            <li>No selling or sharing of your data with anyone</li>
          </ul>

          <h2>5. Third parties</h2>
          <p>The only third party involved in how Noor works is Apple:</p>
          <ul>
            <li>
              <strong>App Store:</strong> Apple handles downloads, purchases, and app distribution.
            </li>
            <li>
              <strong>MapKit:</strong> Apple processes mosque searches as described in the Location section above.
            </li>
          </ul>
          <p>
            Apple&rsquo;s handling of this data is covered by the{" "}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Apple Privacy Policy
            </a>
            .
          </p>

          <h2>6. Retention and deletion</h2>
          <p>
            Because your data lives only on your device, you are in control of it. You can delete it at any time by
            clearing it inside the app (for example, removing bookmarks or resetting dhikr counts) or by deleting Noor
            from your iPhone. We do not keep a copy on any server, so once it is removed from your device it is gone.
          </p>

          <h2>7. Children</h2>
          <p>
            Noor is not directed at children under 13. We do not knowingly collect personal information from
            children, and because Noor does not send user data to us, we do not hold personal information about any
            user.
          </p>

          <h2>8. Quran sources and licenses</h2>
          <ul>
            <li>
              <strong>Quran text:</strong>{" "}
              <a href="https://tanzil.net" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Tanzil Project
              </a>
              , licensed under{" "}
              <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                CC BY 3.0
              </a>
              .
            </li>
            <li>
              <strong>English translation:</strong>{" "}
              <a href="https://clearquran.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
                ClearQuran
              </a>{" "}
              by Talal Itani, licensed under{" "}
              <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                CC BY-ND 4.0
              </a>
              .
            </li>
          </ul>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we will update this page and the &ldquo;Last updated&rdquo; date above.
          </p>
        </div>

        <section className="mt-12 border-t border-white/5 pt-8">
          <h2 className="text-lg font-semibold text-white">9. Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy or your privacy in Noor:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
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
