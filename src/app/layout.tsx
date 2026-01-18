import type { Metadata } from "next";
import "./globals.css";
import content from "../../content/site.he.json";
import AccessibilityWidget from "../components/AccessibilityWidget";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.co.il'),
  title: content.site.title,
  description: content.site.description,
  keywords: content.site.keywords,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    type: "website",
    locale: "he_IL",
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: content.site.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.site.title,
    description: content.site.description,
    images: ['/opengraph-image.png'],
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
        <meta name="theme-color" content="#3B82F6" />
        <link rel="manifest" href="/site.webmanifest" />
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
