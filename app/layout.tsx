import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Uigeek — AI-First UX Design Studio",
  description:
    "Helping founders and startups ship beautiful, high-converting digital products. Ex-ShopHero & ByteDance designers. No contracts, cancel anytime.",
  keywords: [
    "UX Design",
    "Product Design",
    "AI Products",
    "Startup Design",
    "UI/UX",
    "Webflow",
    "Framer",
    "Figma",
  ],

  // Favicon & Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Uigeek — AI-First UX Design Studio",
    description:
      "Helping founders and startups ship beautiful, high-converting digital products. Ex-ShopHero & ByteDance designers.",
    images: [
      {
        url: "/og-image.jpg", // ← Replace with your OG image later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    siteName: "Uigeek",
  },

  twitter: {
    card: "summary_large_image",
    title: "Uigeek — AI-First UX Design Studio",
    description: "Helping founders ship beautiful products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}