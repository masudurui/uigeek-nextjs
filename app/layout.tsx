import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uigeek — AI-First UX Design Studio",
  description: "Helping founders and startups ship beautiful, high-converting digital products. Ex-ShopHero & ByteDance designers. No contracts, cancel anytime.",
  keywords: ["UX Design", "Product Design", "AI Products", "Startup Design", "UI/UX", "Webflow", "Framer", "Figma"],
  
  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",           // ← Put your favicon.ico in the public folder
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // ← Optional: add this too
  },

  openGraph: {
    title: "Uigeek — AI-First UX Design Studio",
    description: "Helping founders and startups ship beautiful, high-converting digital products. Ex-ShopHero & ByteDance designers.",
    images: [
      {
        url: "/og-image.jpg",       // ← Replace with your OG image link later
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}