// app/noor/privacy/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Noor",
  description: "Privacy policy for the Noor iOS app.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function NoorPrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
