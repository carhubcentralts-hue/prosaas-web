import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Real Estate Agents | ProSaaS – Automate Lead Management & Property Inquiries',
  description: 'Real estate agents using ProSaaS never miss a property inquiry. Our AI handles calls, WhatsApp messages, and books viewings automatically.',
  keywords: 'ai for real estate agents, real estate automation, property inquiry bot, real estate crm ai, lead management real estate',
  alternates: { canonical: '/ai-for-real-estate' },
  openGraph: {
    title: 'AI for Real Estate Agents | ProSaaS',
    description: 'Never miss a property inquiry. AI handles calls, WhatsApp, and books viewings automatically.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does ProSaaS help real estate agents capture more leads?',
    answer: 'Real estate leads are time-sensitive — buyers and renters contact multiple agents simultaneously. ProSaaS responds to every inquiry within seconds, giving you the best chance of being first to engage and win the deal.',
  },
  {
    question: 'Can the AI qualify property inquiries?',
    answer: 'Yes. The AI can ask qualifying questions — budget, desired area, property type, timeline — and prioritize hot leads for your immediate attention while nurturing earlier-stage leads automatically.',
  },
  {
    question: 'Can ProSaaS help with property listing inquiries?',
    answer: 'Absolutely. For each listing, configure the AI with property details. When buyers inquire, the AI provides information, answers questions, and books viewings directly in your calendar.',
  },
  {
    question: 'How does ProSaaS handle the high volume of inquiries from portals like Yad2?',
    answer: 'ProSaaS can receive leads from property portals via WhatsApp or phone integration, respond instantly, and add them to your CRM pipeline — ensuring every lead gets immediate follow-up.',
  },
]

export default function AIRealEstatePage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">Real Estate</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Real Estate — Be First to Every Inquiry
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              In real estate, speed wins. ProSaaS ensures you respond to every call and WhatsApp inquiry within seconds — automatically qualifying leads and booking viewings while you focus on selling.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Real Estate Agents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'Instant Lead Response', desc: 'Respond to every property inquiry in under 2 seconds — on call or WhatsApp — before a competitor even sees the message.' },
              { icon: '🏠', title: 'Property Information Bot', desc: 'Automatically provide property details, photos, and answers to common questions. Buyers get what they need instantly.' },
              { icon: '📅', title: 'Automated Viewing Bookings', desc: 'The AI checks your availability and books viewings directly. Fewer back-and-forth messages, more confirmed appointments.' },
              { icon: '📊', title: 'Lead Pipeline Management', desc: 'Track every prospect, their property preferences, and viewing history in one organized CRM view.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-blue-600 text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Close More Real Estate Deals with AI</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop losing leads to faster competitors. See how ProSaaS helps real estate agents respond first and close more.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Book a Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
