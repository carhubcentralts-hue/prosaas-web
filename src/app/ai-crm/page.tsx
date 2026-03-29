import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI CRM System | ProSaaS – Smart CRM with Built-In AI Automation',
  description: 'ProSaaS AI CRM combines contact management, conversation history, automated follow-ups, and AI-powered insights in one platform designed for small and medium businesses.',
  keywords: 'crm with ai, ai crm system, smart crm, ai customer management, automated crm, lead management ai, ProSaaS, PROSAAS, פרוסאס, פרו סאס',
  alternates: {
    canonical: '/ai-crm',
    languages: { 'en': '/ai-crm', 'he': '/he/smart-crm' },
  },
  openGraph: {
    title: 'AI CRM System | ProSaaS',
    description: 'Smart CRM with built-in AI automation for contact management, automated follow-ups, and AI-powered insights.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What makes ProSaaS different from regular CRM software?',
    answer: 'Regular CRMs are passive databases — you add data manually and track tasks yourself. ProSaaS AI CRM actively captures leads from calls and WhatsApp, updates records automatically, suggests next actions, and follows up without you lifting a finger.',
  },
  {
    question: 'Do I need technical skills to use an AI CRM?',
    answer: 'Not at all. ProSaaS is designed for business owners, not IT professionals. The interface is intuitive, setup takes days not months, and our onboarding team guides you through the process.',
  },
  {
    question: 'Can the AI CRM integrate with my existing tools?',
    answer: 'ProSaaS integrates with WhatsApp Business API, phone systems, email, and popular business tools. Our team helps configure integrations during onboarding.',
  },
  {
    question: 'How does AI improve lead management in a CRM?',
    answer: 'AI analyzes each lead\'s behavior, communication history, and engagement level to predict their likelihood to convert. It then prioritizes your pipeline, suggests the best time to follow up, and even drafts personalized messages.',
  },
  {
    question: 'Is my customer data secure in ProSaaS?',
    answer: 'Yes. ProSaaS stores all data on secure servers with encryption at rest and in transit. We comply with Israeli privacy regulations and GDPR principles.',
  },
]

export default function AICRMPage() {
  return (
    <SEOPageLayout alternateUrl="/he/smart-crm">
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">AI CRM System</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI CRM System for Smarter Business Management
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ProSaaS AI CRM doesn&apos;t just store contacts — it actively manages your pipeline, automates follow-ups, and gives you AI-powered insights to close more deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/ai-lead-management" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See Lead Management
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">What is an AI CRM?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            An AI CRM (Customer Relationship Management) system combines traditional CRM capabilities with artificial intelligence to automate data entry, predict outcomes, and take proactive actions. Instead of being a passive database, an AI CRM is an active business partner.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ProSaaS AI CRM captures leads from every channel — phone calls, WhatsApp, web forms — and automatically creates contact records, logs interactions, and suggests next steps. Your team spends time selling, not administering.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Key Features of ProSaaS AI CRM</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🤖', title: 'AI-Powered Data Capture', desc: 'Leads from calls, WhatsApp, and web forms are automatically captured, categorized, and added to your CRM — no manual entry required.' },
              { icon: '📊', title: 'Smart Pipeline Management', desc: 'Visualize your entire sales pipeline. AI flags stale leads, suggests follow-up timing, and predicts deal closure probability.' },
              { icon: '💬', title: 'Unified Communication History', desc: 'Every call, WhatsApp message, and email is logged in one place. Know exactly what was said, when, and what was promised.' },
              { icon: '⚙️', title: 'Automated Follow-Ups', desc: 'Set sequences that automatically send WhatsApp messages or schedule calls based on lead status. Never let a lead go cold.' },
              { icon: '📈', title: 'Performance Analytics', desc: 'Track lead sources, conversion rates, response times, and team performance. Make decisions based on data, not gut feeling.' },
              { icon: '🔔', title: 'Smart Notifications', desc: 'Get alerted when a high-value lead goes cold, when it\'s the best time to call, or when a deal needs attention.' },
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
          <h2 className="text-3xl font-bold mb-4">See ProSaaS AI CRM in Action</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free demo and see how ProSaaS AI CRM can transform your lead management and customer communication.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Book Your Free Demo
          </Link>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Lead Management', href: '/ai-lead-management' },
              { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
              { label: 'AI Call Center', href: '/ai-call-center' },
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
