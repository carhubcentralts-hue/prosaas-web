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
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ProSaaS. {isHebrew ? 'כל הזכויות שמורות.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  )
}
