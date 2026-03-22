import type { Metadata } from 'next'
import SEOPageLayout from '../../../components/SEOPageLayout'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

export const metadata: Metadata = {
  title: 'Terms of Service | ProSaaS',
  description: 'Read the ProSaaS Terms of Service. These terms govern your use of the ProSaaS website and services.',
  alternates: {
    canonical: `${siteUrl}/en/terms`,
    languages: {
      'en': `${siteUrl}/en/terms`,
      'he': `${siteUrl}/terms`,
    },
  },
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: '1. General',
    content:
      'These Terms of Service govern your use of the ProSaaS website and services. By accessing or using the site or services you agree to these terms.',
  },
  {
    heading: '2. What the Service Includes',
    content:
      'ProSaaS provides a CRM platform that includes WhatsApp automation and a real-time voice bot, automations, data management and activity logging, according to the plan selected and the personal customisations agreed upon.',
  },
  {
    heading: '3. Personal Customisations',
    content:
      'All plans allow personal customisations to suit the customer and business type. The scope of customisations and timelines may vary according to need. Personal customisations and special development work may be subject to an additional fee according to the scope.',
  },
  {
    heading: '4. Payment and Outgoing Calls',
    content:
      'Payment is monthly according to the selected plan. Outgoing calls are not included in the base plan and are charged at an additional price* in accordance with volumes and needs.',
  },
  {
    heading: '5. Availability and Changes',
    content:
      'We strive to ensure high availability, but planned maintenance or upgrades may occur. We will notify you in advance where possible.',
  },
  {
    heading: '6. Permitted Use and Prohibitions',
    content:
      'You may not use the service for illegal purposes, spam, attacks, or harm to third parties. We reserve the right to restrict or suspend access in the event of a violation.',
  },
  {
    heading: '7. Contact',
    content:
      'For questions please contact us at support@prosaas.pro or via WhatsApp / phone +972549750505.',
  },
]

export default function TermsEnPage() {
  return (
    <SEOPageLayout lang="en" alternateUrl="/terms">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
