import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Moving Companies | ProSaaS – Automate Your Moving Business Calls',
  description: 'Helping moving companies handle more inquiries, book more jobs, and manage customer communications automatically with ProSaaS AI.',
  keywords: 'ai for moving companies, moving company automation, moving company crm, automated booking moving',
  alternates: { canonical: '/ai-for-moving-companies' },
  openGraph: {
    title: 'AI for Moving Companies | ProSaaS',
    description: 'Handle more moving inquiries, book more jobs, and manage customers automatically with AI.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does AI help moving companies get more bookings?',
    answer: 'AI answers every call and WhatsApp inquiry instantly — even late at night when customers are researching moves. By responding within seconds instead of hours, moving companies capture leads that would otherwise go to competitors.',
  },
  {
    question: 'Can the AI handle quote requests?',
    answer: 'Yes. The ProSaaS AI can collect all necessary information for a moving quote — move date, origin and destination, inventory size — and either provide a preliminary estimate or schedule a follow-up call with your team.',
  },
  {
    question: 'How does ProSaaS help manage multiple jobs at once?',
    answer: 'All bookings and customer communications are centralized in the ProSaaS CRM. Your team has one place to see all active jobs, upcoming moves, and pending inquiries — reducing coordination chaos.',
  },
  {
    question: 'Can I use ProSaaS for customer follow-up after the move?',
    answer: 'Absolutely. Set up automated WhatsApp messages to check in with customers after their move, request reviews, and offer referral incentives — all automatically.',
  },
]

export default function AIMovingCompaniesPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">Moving Companies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Moving Companies — Book More Jobs Automatically
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The moving industry is highly competitive. ProSaaS gives your company a 24/7 AI that answers every inquiry, collects job details, and books more moves — without adding staff.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Challenges Moving Companies Face</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Moving companies deal with high inquiry volume, price-sensitive customers, and time-sensitive bookings. A missed call or slow WhatsApp response often means the customer books with a competitor instead.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ProSaaS solves this by ensuring every inquiry is answered immediately, every lead is qualified, and every customer gets a fast, professional experience — even during your busiest periods.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Moving Companies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📞', title: '24/7 Call Answering', desc: 'Customers researching moves call at all hours. Your AI answers every call, collects details, and schedules follow-ups.' },
              { icon: '💬', title: 'WhatsApp Quote Requests', desc: 'Handle WhatsApp inquiries automatically. Collect move details, provide preliminary info, and qualify the lead.' },
              { icon: '📋', title: 'Organized Job Pipeline', desc: 'See all inquiries, confirmed jobs, and pending follow-ups in one dashboard. Never lose track of a booking.' },
              { icon: '⭐', title: 'Post-Move Follow-Up', desc: 'Automatically request reviews and referrals after each move. Build your reputation on autopilot.' },
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
          <h2 className="text-3xl font-bold mb-4">Win More Moving Jobs with AI</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let ProSaaS handle your inquiries so your team can focus on delivering great moves.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo
          </Link>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Solutions</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Call Center', href: '/ai-call-center' },
              { label: 'AI Lead Management', href: '/ai-lead-management' },
              { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
              { label: 'AI for Small Business', href: '/ai-for-small-business' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 hover:text-blue-800 underline text-sm">{link.label}</Link>
            ))}
          </div>
        </section>
      </div>
    </SEOPageLayout>
  )
}
