import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import content from "../../content/site.he.json";
import AccessibilityWidget from "../components/AccessibilityWidget";
import StructuredData from "../components/StructuredData";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.site.title,
    template: `%s | פרו סאס - ProSaaS`,
  },
  description: content.site.description,
  keywords: "ProSaaS, PROSAAS, PRO SAAS, Pro SaaS, פרוסאס, פרו סאס, פרו-סאס, prosaas.website, מערכת פרוסאס, פרוסאס CRM, פרוסאס AI, פרו סאס בינה מלאכותית, ai call center system, whatsapp automation for business, crm with ai, ai answering service, מערכת מענה אוטומטי לעסקים, מערכת AI לשיחות, CRM חכם לעסקים, בוט וואטסאפ, ניהול לידים, AI לעסקים קטנים, פרוסאס מוקד שיחות, פרו סאס וואטסאפ, פרוסאס ניהול לידים",
  alternates: {
    canonical: siteUrl,
    languages: {
      'he': siteUrl,
      'en': `${siteUrl}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    alternateLocale: "en_US",
    siteName: "פרו סאס | ProSaaS",
    url: siteUrl,
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
    site: '@ProSaaS',
  },
  other: {
    'fb:pages': '61574820643163',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
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
        <StructuredData type="website" />
        <StructuredData type="organization" />
        <StructuredData type="software" />
        <StructuredData type="localbusiness" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <AccessibilityWidget />
        <Analytics />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
