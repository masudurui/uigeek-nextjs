import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uigeek UX Design Studio",
  description: "Product design agency designing & building AI-first products for startups & enterprises.",
  keywords: ["UX Design", "Product Design", "AI Products", "Startup Design", "UI/UX"],
  openGraph: {
    title: "Uigeek UX Design Studio",
    description: "We design & build AI-first products for startups & enterprises.",
    type: "website",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
