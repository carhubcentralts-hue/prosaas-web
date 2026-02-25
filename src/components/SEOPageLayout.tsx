import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import NavHeader from './NavHeader'

interface SEOPageLayoutProps {
  children: React.ReactNode
  lang?: 'he' | 'en'
  /** URL of the same page in the alternate language */
  alternateUrl?: string
}

export default function SEOPageLayout({ children, lang = 'en', alternateUrl }: SEOPageLayoutProps) {
  const isHebrew = lang === 'he'
  const homeUrl = isHebrew ? '/' : '/en'
  const contactUrl = isHebrew ? '/#contact' : '/en#contact'
  const featuresUrl = isHebrew ? '/#features' : '/en#features'
  const voiceDemoUrl = isHebrew ? '/#voice-demo' : '/en#voice-demo'
  const faqUrl = isHebrew ? '/#faq' : '/en#faq'
  const blogUrl = isHebrew ? '/he/blog' : '/blog'
  const aboutUrl = isHebrew ? '/he/about' : '/about'
  const termsUrl = isHebrew ? '/terms' : '/en/terms'
  const privacyUrl = isHebrew ? '/privacy' : '/en/privacy'

  return (
    <div className="min-h-screen bg-white" dir={isHebrew ? 'rtl' : 'ltr'} lang={isHebrew ? 'he' : 'en'}>
      {/* Top Navigation */}
      <NavHeader
        lang={lang}
        homeUrl={homeUrl}
        featuresUrl={featuresUrl}
        voiceDemoUrl={voiceDemoUrl}
        faqUrl={faqUrl}
        blogUrl={blogUrl}
        aboutUrl={aboutUrl}
        contactUrl={contactUrl}
        heUrl={isHebrew ? undefined : (alternateUrl || '/')}
        enUrl={isHebrew ? (alternateUrl || '/en') : undefined}
      />

      {/* Main Content */}
      <main id="main-content">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16" aria-label={isHebrew ? 'פוטר' : 'Footer'}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} className="mb-4" />
              <p className="text-gray-400 text-sm max-w-xs">
                {isHebrew
                  ? 'פלטפורמת CRM, WhatsApp ובוט שיחות מבוססת AI לעסקים.'
                  : 'AI-powered CRM, WhatsApp automation, and voice bot platform for businesses.'}
              </p>
              <div className="mt-4">
                <LanguageSwitcher
                  lang={lang}
                  heUrl={isHebrew ? undefined : (alternateUrl || '/')}
                  enUrl={isHebrew ? (alternateUrl || '/en') : undefined}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">{isHebrew ? 'מוצרים' : 'Products'}</h3>
                <ul className="space-y-2">
                  {isHebrew ? (
                    <>
                      <li><Link href="/he/ai-system" className="text-gray-400 hover:text-white transition text-sm">מוקד שיחות AI</Link></li>
                      <li><Link href="/he/whatsapp-bot" className="text-gray-400 hover:text-white transition text-sm">בוט וואטסאפ</Link></li>
                      <li><Link href="/he/smart-crm" className="text-gray-400 hover:text-white transition text-sm">CRM חכם</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link href="/ai-call-center" className="text-gray-400 hover:text-white transition text-sm">AI Call Center</Link></li>
                      <li><Link href="/whatsapp-automation" className="text-gray-400 hover:text-white transition text-sm">WhatsApp Automation</Link></li>
                      <li><Link href="/ai-crm" className="text-gray-400 hover:text-white transition text-sm">AI CRM</Link></li>
                      <li><Link href="/ai-answering-service" className="text-gray-400 hover:text-white transition text-sm">Answering Service</Link></li>
                    </>
                  )}
                </ul>
              </div>
              {!isHebrew && (
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm">Industries</h3>
                  <ul className="space-y-2">
                    <li><Link href="/ai-for-moving-companies" className="text-gray-400 hover:text-white transition text-sm">Moving Companies</Link></li>
                    <li><Link href="/ai-for-dental-clinics" className="text-gray-400 hover:text-white transition text-sm">Dental Clinics</Link></li>
                    <li><Link href="/ai-for-real-estate" className="text-gray-400 hover:text-white transition text-sm">Real Estate</Link></li>
                    <li><Link href="/ai-for-law-firms" className="text-gray-400 hover:text-white transition text-sm">Law Firms</Link></li>
                  </ul>
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">{isHebrew ? 'חברה' : 'Company'}</h3>
                <ul className="space-y-2">
                  <li><Link href={aboutUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'אודות' : 'About'}</Link></li>
                  <li><Link href={blogUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'בלוג' : 'Blog'}</Link></li>
                  <li><Link href={privacyUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'פרטיות' : 'Privacy'}</Link></li>
                  <li><Link href={termsUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'תנאי שימוש' : 'Terms'}</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} ProSaaS. {isHebrew ? 'כל הזכויות שמורות.' : 'All rights reserved.'}</span>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61574820643163" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/prosaas.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/prosaas-%D7%A4%D7%A8%D7%95%D7%A1%D7%90%D7%A1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/ProSaaS" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
