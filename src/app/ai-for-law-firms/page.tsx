import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Law Firms | ProSaaS – Automated Client Intake & Communication',
  description: 'Law firms use ProSaaS to automate new client intake, answer common questions, and schedule consultations — without adding admin staff.',
  keywords: 'ai for law firms, law firm automation, legal client intake ai, law firm crm, automated legal receptionist',
  alternates: { canonical: '/ai-for-law-firms' },
  openGraph: {
    title: 'AI for Law Firms | ProSaaS',
    description: 'Automate client intake, answer common questions, and schedule consultations with AI.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How can AI help with law firm client intake?',
    answer: 'The AI answers new client calls, collects basic case information (type of legal matter, urgency, contact details), and either schedules a consultation or routes to the appropriate attorney — all automatically.',
  },
  {
    question: 'Is client information kept confidential with ProSaaS?',
    answer: 'Yes. All client data is encrypted and stored securely. Access is restricted to authorized firm staff. ProSaaS does not use client data for any purpose other than your firm\'s operations.',
  },
  {
    question: 'Can the AI answer legal questions on behalf of the firm?',
    answer: 'The AI is configured with your firm\'s FAQs and practice areas. It can answer common questions about the firm\'s services, fees, and processes. It does not provide legal advice — it routes legal questions to your attorneys.',
  },
  {
    question: 'How does ProSaaS help during after-hours?',
    answer: 'Prospective clients often need legal help urgently after hours. ProSaaS ensures someone (the AI) is always available to collect their information and schedule a consultation — turning after-hours inquiries into booked appointments.',
  },
]

export default function AILawFirmsPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">Law Firms</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Law Firms — Streamline Client Intake & Communication
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turn more inquiries into consultations. ProSaaS AI handles your client intake process, answers common questions, and books consultations automatically — so your attorneys focus on legal work.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Law Firms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📋', title: 'Automated Client Intake', desc: 'Collect case information from new clients via call or WhatsApp. All data is organized in your CRM, ready for attorney review.' },
              { icon: '📅', title: 'Consultation Scheduling', desc: 'Book initial consultations automatically based on attorney availability. Reduce the back-and-forth that delays new client engagement.' },
              { icon: '💬', title: 'FAQ Response', desc: 'Answer common questions about your practice areas, fees, and process — available to prospective clients 24/7.' },
              { icon: '🔔', title: 'Urgent Matter Alerts', desc: 'Configure the AI to identify urgent legal matters and alert the on-call attorney immediately.' },
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
          <h2 className="text-3xl font-bold mb-4">Modernize Your Law Firm&apos;s Client Intake</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let AI handle the admin so your attorneys can focus on practicing law.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Book a Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
