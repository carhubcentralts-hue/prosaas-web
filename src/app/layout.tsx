import type { Metadata } from "next";
import "./globals.css";
import content from "../../content/site.he.json";

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  keywords: content.site.keywords,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
