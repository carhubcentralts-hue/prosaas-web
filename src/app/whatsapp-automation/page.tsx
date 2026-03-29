import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'WhatsApp Automation for Business | ProSaaS – AI-Powered WhatsApp Bot',
  description: 'Automate your WhatsApp business communications with ProSaaS. Our AI bot handles inquiries, qualifies leads, and routes conversations 24/7 – so you never miss a customer message.',
  keywords: 'whatsapp automation for business, whatsapp bot, whatsapp AI, automated whatsapp messages, whatsapp CRM integration, ProSaaS, PROSAAS, פרוסאס, פרו סאס',
  alternates: {
    canonical: '/whatsapp-automation',
    languages: { 'en': '/whatsapp-automation', 'he': '/he/whatsapp-bot' },
  },
  openGraph: {
    title: 'WhatsApp Automation for Business | ProSaaS',
    description: 'Automate WhatsApp business communications with AI. Handle inquiries, qualify leads, and route conversations 24/7.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does WhatsApp automation work for businesses?',
    answer: 'WhatsApp automation uses AI to respond to incoming messages automatically. When a customer messages your business WhatsApp number, the AI bot reads the message, understands the intent, and sends an appropriate response — collecting information, answering questions, or routing to a human agent.',
  },
  {
    question: 'Is WhatsApp automation compliant with WhatsApp Business policies?',
    answer: 'Yes. ProSaaS operates through the official WhatsApp Business API, which is fully compliant with Meta\'s policies. All automations follow opt-in requirements and message templates approved by WhatsApp.',
  },
  {
    question: 'Can the WhatsApp bot qualify leads automatically?',
    answer: 'Absolutely. The ProSaaS WhatsApp bot can ask qualification questions, score leads based on their responses, and automatically route hot leads to your sales team while adding all data to your CRM.',
  },
  {
    question: 'Can I send bulk WhatsApp messages to customers?',
    answer: 'ProSaaS supports WhatsApp broadcast campaigns to opted-in contacts. Send promotions, reminders, and updates to segmented customer lists — all tracked and measured in your dashboard.',
  },
  {
    question: 'How quickly does the WhatsApp bot respond?',
    answer: 'Responses are instant — typically under 2 seconds. This dramatically improves lead conversion since studies show responding within 5 minutes increases conversion rates by 9x compared to waiting an hour.',
  },
]

export default function WhatsAppAutomationPage() {
  return (
    <SEOPageLayout alternateUrl="/he/whatsapp-bot">
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">WhatsApp Automation</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              WhatsApp Automation for Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Never miss a WhatsApp message again. ProSaaS AI bot responds instantly, qualifies leads, and routes conversations — 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/ai-crm" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See AI CRM
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Why WhatsApp Automation Matters</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            WhatsApp is the #1 messaging app in Israel with over 5 million active users. When customers reach out via WhatsApp, they expect fast responses — and slow replies mean lost business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ProSaaS WhatsApp automation ensures every message is acknowledged instantly, every lead is captured, and your team is only involved when truly needed. The result: more conversions, less manual work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">What ProSaaS WhatsApp Automation Does</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'Instant Auto-Reply', desc: 'Respond to every incoming message in under 2 seconds, 24/7. Set custom greetings, FAQs, and flow-based conversations.' },
              { icon: '🎯', title: 'Lead Qualification', desc: 'The AI asks the right questions, scores leads, and categorizes them. Hot leads get immediate human attention; others are nurtured automatically.' },
              { icon: '📊', title: 'CRM Integration', desc: 'Every WhatsApp conversation is automatically added to your CRM — contact details, conversation history, and lead status all synced.' },
              { icon: '📢', title: 'Broadcast Campaigns', desc: 'Send targeted messages to segmented customer lists. Promotions, appointment reminders, and follow-ups reach the right people at the right time.' },
              { icon: '🔀', title: 'Smart Routing', desc: 'Complex queries are automatically routed to the right team member with full conversation context. No copy-pasting or lost messages.' },
              { icon: '📈', title: 'Analytics & Insights', desc: 'Track open rates, response rates, and conversion metrics. Understand which messages work and optimize your WhatsApp strategy.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Benefits of WhatsApp Automation</h2>
          <ul className="space-y-3">
            {[
              'Respond to 100% of messages, even outside business hours',
              'Increase lead conversion with instant engagement',
              'Reduce manual work for your team by 60-80%',
              'Maintain conversation context across all channels',
              'Send proactive messages to re-engage cold leads',
              'Comply with WhatsApp Business API policies',
              'Scale customer communication without adding headcount',
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
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
          <h2 className="text-3xl font-bold mb-4">Start Automating Your WhatsApp Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses using ProSaaS to turn WhatsApp into their #1 lead generation and customer service channel.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo
          </Link>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI CRM System', href: '/ai-crm' },
              { label: 'AI Call Center', href: '/ai-call-center' },
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
