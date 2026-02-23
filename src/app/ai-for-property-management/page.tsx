import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Property Management | ProSaaS – Automate Tenant Communication & Maintenance Requests',
  description: 'Property managers use ProSaaS to handle tenant inquiries, maintenance requests, and rent reminders automatically, saving hours every week.',
  keywords: 'ai for property management, property management automation, tenant communication ai, property management crm',
  alternates: { canonical: '/ai-for-property-management' },
  openGraph: {
    title: 'AI for Property Management | ProSaaS',
    description: 'Automate tenant inquiries, maintenance requests, and rent reminders with AI.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does AI help property managers save time?',
    answer: 'Property managers spend significant time on repetitive communications — answering tenant questions, logging maintenance requests, sending reminders. ProSaaS automates all of these, freeing hours every week for higher-value work.',
  },
  {
    question: 'Can the AI handle tenant maintenance requests?',
    answer: 'Yes. Tenants can submit maintenance requests via WhatsApp or phone. The AI logs the request, categorizes it by urgency, and notifies the right maintenance team — with the tenant receiving automatic updates on status.',
  },
  {
    question: 'How does ProSaaS help with rent collection?',
    answer: 'ProSaaS sends automated WhatsApp rent reminders before due dates. Tenants can confirm receipt or flag issues directly in the chat. Late payment alerts are automatically sent to managers.',
  },
  {
    question: 'Can ProSaaS manage communications across multiple properties?',
    answer: 'Yes. ProSaaS is designed for multi-property management. Each property can have its own communication flows, while all data is centralized in one CRM dashboard for the property manager.',
  },
]

export default function AIPropertyManagementPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">Property Management</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Property Management — Automate Tenant Communication
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Handle tenant inquiries, maintenance requests, and rent reminders automatically. ProSaaS saves property managers hours every week while improving tenant satisfaction.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Property Managers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔧', title: 'Maintenance Request Handling', desc: 'Tenants submit requests via WhatsApp or phone. AI logs, categorizes, and routes to the right maintenance team automatically.' },
              { icon: '💸', title: 'Rent Reminders', desc: 'Automated WhatsApp reminders sent before due dates. Reduce late payments without chasing tenants manually.' },
              { icon: '💬', title: 'Tenant FAQ Responses', desc: 'Answer common tenant questions automatically — lease terms, amenities, parking, and building rules — 24/7.' },
              { icon: '📊', title: 'Multi-Property Dashboard', desc: 'Manage communications across all your properties from one centralized dashboard. Never lose track of a tenant issue.' },
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
          <h2 className="text-3xl font-bold mb-4">Manage More Properties with Less Effort</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let AI handle tenant communications while you focus on growing your property portfolio.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Book a Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
