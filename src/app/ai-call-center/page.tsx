import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI Call Center Software | ProSaaS – Intelligent Voice Bot for Business',
  description: 'ProSaaS provides AI-powered call center software with a natural-sounding voice bot that handles inbound calls 24/7, transcribes conversations, and syncs everything to your CRM automatically.',
  keywords: 'ai call center system, AI call center software, automated call center, voice bot, AI answering service, business phone automation',
  alternates: {
    canonical: '/ai-call-center',
  },
  openGraph: {
    title: 'AI Call Center Software | ProSaaS',
    description: 'AI-powered call center software with a natural voice bot that handles inbound calls 24/7 and syncs to your CRM.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is AI call center software?',
    answer: 'AI call center software uses artificial intelligence to handle inbound and outbound calls automatically. Instead of human agents, an AI voice bot answers calls, understands customer intent, collects information, and takes action — all in real time.',
  },
  {
    question: 'Can the AI voice bot speak in Hebrew?',
    answer: 'Yes. ProSaaS AI voice bot is specifically trained for natural Hebrew conversations, including Israeli dialects and business terminology. It sounds natural, not robotic.',
  },
  {
    question: 'How does the AI sync calls to my CRM?',
    answer: 'Every call handled by the ProSaaS AI is automatically transcribed, summarized, and logged in your CRM. Lead information, call outcome, and any follow-up actions are recorded without manual data entry.',
  },
  {
    question: 'What happens if the AI cannot handle a call?',
    answer: 'ProSaaS can be configured to transfer complex calls to a human agent, send a WhatsApp message, or schedule a callback — ensuring no customer is left without a response.',
  },
  {
    question: 'How much does AI call center software cost?',
    answer: 'ProSaaS plans start from ₪600/month. Unlike traditional call centers that charge per agent or per minute, ProSaaS offers flat-rate pricing so your costs stay predictable.',
  },
]

export default function AICallCenterPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">AI Call Center Software</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Call Center Software for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Handle every inbound call automatically with a natural-sounding AI voice bot. ProSaaS answers calls 24/7, qualifies leads, and logs everything to your CRM — without a single human agent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/ai-answering-service" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See Answering Service
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is AI Call Center */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">What is an AI Call Center?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            An AI call center replaces or supplements traditional human agents with artificial intelligence. When a customer calls, an AI voice bot greets them, understands their request using natural language processing, and handles the interaction automatically.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike traditional call centers that require expensive staffing, training, and management, an AI call center is available 24/7, handles unlimited concurrent calls, and never has a bad day. Every interaction is logged, transcribed, and ready for review.
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS AI Call Center Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🕐',
                title: 'Always-On 24/7 Coverage',
                desc: 'Your AI never sleeps. Calls at 2am, on weekends, and during holidays are answered instantly — no voicemail, no missed opportunities.',
              },
              {
                icon: '🗣️',
                title: 'Natural Hebrew Conversations',
                desc: 'ProSaaS AI speaks Hebrew fluently, handles slang, and adapts to your industry\'s terminology. Customers won\'t know they\'re talking to a bot.',
              },
              {
                icon: '🔄',
                title: 'Automatic CRM Sync',
                desc: 'Every call is automatically logged in your CRM with lead details, call summary, and next-action recommendations. Zero manual data entry.',
              },
              {
                icon: '📋',
                title: 'Call Transcription & Summaries',
                desc: 'Every conversation is transcribed and summarized in seconds. Review what was discussed, search call history, and never miss an important detail.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Benefits of AI Call Center Software</h2>
          <ul className="space-y-3">
            {[
              'Eliminate missed calls — every call is answered, even during peak hours',
              'Reduce operational costs by up to 70% compared to human agents',
              'Scale instantly — handle 10 or 1,000 concurrent calls without adding staff',
              'Consistent quality — the AI delivers the same professional experience every time',
              'Faster lead response — leads are captured and followed up in seconds, not hours',
              'Data-driven insights — detailed call analytics to improve your business',
              'Seamless handoff to human agents when needed',
              'Automatic scheduling and appointment booking integration',
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Industries */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-700 mb-6">ProSaaS AI call center software is tailored for businesses across industries:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Moving Companies', href: '/ai-for-moving-companies' },
              { label: 'Dental Clinics', href: '/ai-for-dental-clinics' },
              { label: 'Real Estate Agents', href: '/ai-for-real-estate' },
              { label: 'Law Firms', href: '/ai-for-law-firms' },
              { label: 'Cleaning Companies', href: '/ai-for-cleaning-companies' },
              { label: 'Property Management', href: '/ai-for-property-management' },
            ].map((industry, i) => (
              <Link key={i} href={industry.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-sm transition text-center font-medium text-gray-800">
                {industry.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">ProSaaS vs Traditional Call Centers</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">ProSaaS AI</th>
                  <th className="p-4 text-center font-semibold">Traditional Call Center</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Availability', '24/7/365', 'Business hours only'],
                  ['Cost', 'From ₪600/month', '₪5,000+ per agent/month'],
                  ['Setup time', 'Days', 'Weeks to months'],
                  ['Scalability', 'Instant, unlimited', 'Slow, expensive'],
                  ['CRM Integration', 'Automatic', 'Manual or costly'],
                  ['Call Transcription', 'Included', 'Extra cost'],
                  ['Consistent Quality', 'Always', 'Varies by agent'],
                ].map(([feature, ai, trad], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-900">{feature}</td>
                    <td className="p-4 text-center text-green-700 font-semibold">{ai}</td>
                    <td className="p-4 text-center text-gray-500">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 p-6 group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-blue-600 text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Call Handling?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join businesses already using ProSaaS to handle calls 24/7, capture every lead, and grow without adding staff.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo Today
          </Link>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Answering Service', href: '/ai-answering-service' },
              { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
              { label: 'AI CRM System', href: '/ai-crm' },
              { label: 'AI Lead Management', href: '/ai-lead-management' },
              { label: 'AI for Small Business', href: '/ai-for-small-business' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 hover:text-blue-800 underline text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SEOPageLayout>
  )
}
