import Link from 'next/link'

interface LanguageSwitcherProps {
  lang: 'he' | 'en'
  heUrl?: string
  enUrl?: string
}

export default function LanguageSwitcher({ lang, heUrl = '/', enUrl = '/en' }: LanguageSwitcherProps) {
  return (
    <div
      className="flex items-center rounded-full border border-gray-200 overflow-hidden"
      role="navigation"
      aria-label="שינוי שפה / Language switcher"
    >
      <Link
        href={heUrl}
        className={`px-3 py-1 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          lang === 'he' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="עברית"
        aria-current={lang === 'he' ? 'page' : undefined}
        hrefLang="he"
      >
        עב
      </Link>
      <Link
        href={enUrl}
        className={`px-3 py-1 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
        aria-label="English"
        aria-current={lang === 'en' ? 'page' : undefined}
        hrefLang="en"
      >
        EN
      </Link>
    </div>
  )
}
