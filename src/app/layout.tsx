import type { Metadata } from "next";
import "./globals.css";
import content from "../../content/site.he.json";
import AccessibilityWidget from "../components/AccessibilityWidget";

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  keywords: content.site.keywords,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
