import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'דף לא נמצא | ProSaaS',
  description: 'הדף שחיפשת לא קיים. חזרו לדף הבית של ProSaaS.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4" dir="rtl" lang="he">
      <div className="max-w-lg w-full text-center">
        <p className="text-8xl font-bold text-blue-500 mb-4">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">הדף לא נמצא</h1>
        <p className="text-gray-500 text-lg mb-8">
          הדף שחיפשת אינו קיים או הועבר למיקום אחר.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            חזרה לדף הבית
          </Link>
          <Link
            href="/#contact"
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg transition"
          >
            צרו קשר
          </Link>
        </div>

        <nav aria-label="קישורים מועילים">
          <p className="text-sm text-gray-400 mb-3 font-medium">קישורים מועילים</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <li><Link href="/he/ai-system" className="text-blue-500 hover:underline">מוקד שיחות AI</Link></li>
            <li><Link href="/he/whatsapp-bot" className="text-blue-500 hover:underline">בוט וואטסאפ</Link></li>
            <li><Link href="/he/smart-crm" className="text-blue-500 hover:underline">CRM חכם</Link></li>
            <li><Link href="/he/blog" className="text-blue-500 hover:underline">בלוג</Link></li>
            <li><Link href="/he/about" className="text-blue-500 hover:underline">אודות</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
