import type { Metadata } from 'next'
import SEOPageLayout from '../../../components/SEOPageLayout'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

export const metadata: Metadata = {
  title: 'Privacy Policy | ProSaaS',
  description: 'Read the ProSaaS Privacy Policy. Learn what data we collect and how we use it.',
  alternates: {
    canonical: `${siteUrl}/en/privacy`,
    languages: {
      'en': `${siteUrl}/en/privacy`,
      'he': `${siteUrl}/privacy`,
    },
  },
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: '1. Introduction',
    content:
      'We respect your privacy. This policy explains what data is collected and how it is used.',
  },
  {
    heading: '2. Data Collected',
    content:
      'When you submit a form on the site: name, phone number, business name, and message. When using the platform: usage data, call and message recordings, and data the business enters into the system.',
  },
  {
    heading: '3. Third-Party Providers',
    content:
      'We use third-party service providers to operate the platform (e.g. Twilio for calls, WhatsApp, OpenAI for AI components). Use of these providers is solely for the purpose of delivering the service.',
  },
  {
    heading: '4. Recordings and Transcripts',
    content:
      'Recordings are retained for 7 days. Transcripts can be downloaded and stored by you without limitation.',
  },
  {
    heading: '5. Data Security',
    content:
      'The system is secured with advanced measures including CSRF protection, authorisation, TLS encryption in transit, key management and client/server best practices.',
  },
  {
    heading: '6. Contact',
    content:
      'To request information about your personal data please contact support@prosaas.pro.',
  },
]

export default function PrivacyEnPage() {
  return (
    <SEOPageLayout lang="en" alternateUrl="/privacy">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: 01/12/2026</p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Have questions?{' '}
              <a href="mailto:support@prosaas.pro" className="text-blue-600 hover:text-blue-700 font-semibold">
                support@prosaas.pro
              </a>
            </p>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  )
}
