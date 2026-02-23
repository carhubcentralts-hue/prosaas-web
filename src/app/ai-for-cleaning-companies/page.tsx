import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Cleaning Companies | ProSaaS – Automate Bookings & Customer Follow-ups',
  description: 'Cleaning companies use ProSaaS to handle booking inquiries, quote requests, and appointment reminders automatically — 24/7.',
  keywords: 'ai for cleaning companies, cleaning company automation, cleaning service booking bot, cleaning company crm',
  alternates: { canonical: '/ai-for-cleaning-companies' },
  openGraph: {
    title: 'AI for Cleaning Companies | ProSaaS',
    description: 'Automate booking inquiries, quote requests, and appointment reminders for cleaning companies.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does AI help cleaning companies get more bookings?',
    answer: 'AI responds instantly to booking inquiries via phone or WhatsApp — even at night or on weekends when most cleaning companies are unavailable. Fast response means more bookings before customers contact competitors.',
  },
  {
    question: 'Can the AI provide cleaning quotes?',
    answer: 'Yes. Configure the AI with your pricing model. It can collect property size, cleaning type, and frequency, then provide a quote range or schedule a site visit — all automatically.',
  },
  {
    question: 'How does ProSaaS help manage recurring clients?',
    answer: 'For recurring clients, ProSaaS sends automated appointment reminders, collects feedback after each service, and flags when it\'s time to re-book. Recurring revenue becomes more predictable.',
  },
  {
    question: 'Can the AI handle customer complaints or issues?',
    answer: 'The AI can collect complaint details and escalate to a human manager immediately via notification. This ensures issues are addressed promptly without requiring 24/7 human monitoring.',
  },
]

export default function AICleaningCompaniesPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">Cleaning Companies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Cleaning Companies — Fill Your Schedule Automatically
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Handle booking inquiries, send reminders, and follow up with clients automatically. ProSaaS keeps your cleaning business calendar full without extra admin work.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Cleaning Companies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📞', title: 'Instant Booking Responses', desc: 'Answer every call and WhatsApp booking request within seconds. Capture the customer before they contact a competitor.' },
              { icon: '💰', title: 'Automated Quote Collection', desc: 'Collect property details and service requirements automatically. Generate quotes or schedule site visits without manual work.' },
              { icon: '🔔', title: 'Appointment Reminders', desc: 'Send automatic reminders before each cleaning appointment. Reduce no-shows and last-minute cancellations.' },
              { icon: '⭐', title: 'Post-Service Follow-Up', desc: 'Automatically request reviews and feedback after each job. Build your online reputation on autopilot.' },
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
          <h2 className="text-3xl font-bold mb-4">Grow Your Cleaning Business with AI</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            More bookings, fewer cancellations, happier customers. See ProSaaS in action for your cleaning business.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
