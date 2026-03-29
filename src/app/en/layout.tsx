import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    locale: 'en_US',
    alternateLocale: 'he_IL',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  // Override direction and language for the English sub-tree.
  // The root layout sets <html lang="he" dir="rtl">; this wrapper
  // overrides those attributes for all /en pages so that browsers,
  // screen-readers and search engines treat this sub-tree as English LTR.
  return (
    <div dir="ltr" lang="en">
      {children}
    </div>
  )
}
