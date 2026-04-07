import type { Metadata } from 'next'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'
import ContactFormEn from '../../components/ContactFormEn'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'ProSaaS – All Your Business Communication in One Smart Place | CRM + WhatsApp + AI Calls',
  description:
    'ProSaaS connects leads, customers, WhatsApp and phone calls into one AI system that manages, records and converts inquiries automatically. No missed leads. No chaos.',
  keywords:
    'ProSaaS, PROSAAS, PRO SAAS, פרוסאס, פרו סאס, AI CRM, WhatsApp bot, AI call center, lead management, business automation, voice bot, answering service, prosaas.website',
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      'he': siteUrl,
      'en': `${siteUrl}/en`,
    },
  },
  openGraph: {
    title: 'ProSaaS – All Your Business Communication in One Smart Place',
    description:
      'AI-powered CRM, WhatsApp automation and voice bot that handles every customer inquiry automatically 24/7.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'he_IL',
    siteName: 'ProSaaS',
    url: `${siteUrl}/en`,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'ProSaaS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProSaaS – AI CRM + WhatsApp + Voice Bot',
    description: 'All your business communication automated in one place.',
    images: ['/opengraph-image.png'],
    site: '@ProSaaS',
  },
}

const features = [
  {
    icon: '🤖',
    title: 'Smart CRM for Leads & Customers',
    desc: 'All your customers in one place: full details, call and message history, tags, notes, statuses, and end-to-end process tracking.',
  },
  {
    icon: '📊',
    title: 'Sales Pipeline & Statuses',
    desc: 'Full control over inquiries: new leads, in progress, meeting scheduled, closed. Fully customisable per business type.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Bot – Automatic Replies 24/7',
    desc: 'Answers every inquiry instantly, filters questions, collects details, transfers to an agent when needed. Never miss a customer, even at night.',
  },
  {
    icon: '📞',
    title: 'AI Voice Bot in Real Time',
    desc: 'Natural telephone answering in Hebrew, automatic transcription and summary, meeting scheduling, full logging to CRM. Sounds and acts like a real agent.',
  },
  {
    icon: '✅',
    title: 'Tasks, Documentation & Reminders',
    desc: 'Team tasks, automatic reminders, internal documentation for each customer. Organised work without keeping anything in your head.',
  },
  {
    icon: '📅',
    title: 'Calendar & Meeting Scheduling',
    desc: 'Automatic appointment booking, customer reminders, calendar sync. Turn an inquiry into a real schedule.',
  },
  {
    icon: '📈',
    title: 'Dashboards & Statistics',
    desc: 'A clear picture of your business: how many inquiries came in, answered, closed, response loads and times. Data that drives decisions.',
  },
  {
    icon: '🔗',
    title: 'Integrations & Automations',
    desc: 'Webhooks, API, n8n, connection to any existing system. The platform adapts to you — not the other way round.',
  },
]

const faqItems = [
  {
    question: 'Can the system be customised for my business?',
    answer: 'Yes. Every business receives customisations according to its own workflow.',
  },
  {
    question: 'Do the bots work 24/7?',
    answer: 'Yes — both WhatsApp and voice calls, around the clock.',
  },
  {
    question: 'Can I connect it to an existing system?',
    answer: 'Yes. Via Webhooks, API, or n8n.',
  },
  {
    question: 'How quickly can it be set up?',
    answer: 'Most businesses are fully live within 3–5 business days with guidance from our team.',
  },
  {
    question: 'Does the AI voice bot speak Hebrew?',
    answer: 'Yes. ProSaaS AI is specifically trained for natural Hebrew including slang and business terminology.',
  },
]

export default function EnglishHomePage() {
  return (
    <SEOPageLayout lang="en" alternateUrl="/">
      <StructuredData type="organization" />
      <StructuredData type="software" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16 px-4">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          <div className="absolute top-40 left-40 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            All Your Business Communication —<br className="hidden md:block" /> In One Smart Place
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            Advanced CRM with WhatsApp &amp; AI Calls in Real Time
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            ProSaaS connects leads, customers, WhatsApp and phone calls into one system that manages,
            records and converts inquiries automatically. No missed leads. No chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Go to the contact form"
            >
              Get a Personal Demo
            </a>
            <a
              href="#features"
              className="border-2 border-blue-500 text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="See ProSaaS features"
            >
              See Features
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto">
            {[
              { value: '🤖 Natural AI', label: 'in Hebrew & English' },
              { value: '📞 Phone Answering', label: 'Smart 24/7' },
              { value: '💬 WhatsApp', label: 'Auto-routing' },
              { value: '📋 Summaries', label: 'Automatic' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is ProSaaS */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is ProSaaS?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ProSaaS is an intelligent AI layer on top of your business communication.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The system unifies: a full CRM, a WhatsApp bot, and a real-time voice bot into one platform
            that manages inquiries, records every interaction, runs automations and lets your business
            operate smoothly — even when no agent is available.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Customer calls or writes → system answers → records → summarises → schedules next step.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Does the System Actually Do?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 text-3xl group-hover:from-blue-500 group-hover:to-blue-600 transition">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrations</h2>
            <p className="text-lg text-gray-600">Works with the tools you already use</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {[
              { name: 'Twilio', desc: 'Calls & telephony' },
              { name: 'WhatsApp', desc: 'Messaging & replies' },
              { name: 'n8n', desc: 'Advanced automations' },
              { name: 'Webhooks', desc: 'Custom connections' },
              { name: 'Email', desc: 'Notifications & reminders' },
            ].map((int, i) => (
              <div key={i} className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition text-center">
                <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{int.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">{int.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  {item.question}
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              Businesses lose customers due to slow response. At ProSaaS we do things differently.
              More control. Zero missed leads. Maximum customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactFormEn />
            <div className="flex flex-col justify-center space-y-6">
              <a
                href="https://wa.me/972557270844?text=Hi%2C%20I%27d%20love%20to%20learn%20more%20about%20ProSaaS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 text-white p-6 rounded-2xl hover:bg-green-600 transition"
                aria-label="Chat with ProSaaS on WhatsApp"
              >
                <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-lg font-semibold">Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:support@prosaas.pro"
                className="flex items-center gap-4 bg-gray-800 text-white p-6 rounded-2xl hover:bg-gray-900 transition"
                aria-label="Send email to ProSaaS"
              >
                <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="text-lg font-semibold block">Email Us</span>
                  <span className="text-gray-300 text-sm">support@prosaas.pro</span>
                </div>
              </a>
              <a
                href="tel:0557270844"
                className="flex items-center gap-4 bg-blue-600 text-white p-6 rounded-2xl hover:bg-blue-700 transition"
                aria-label="Call ProSaaS"
              >
                <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="text-lg font-semibold block">Call Us</span>
                  <span className="text-blue-100 text-sm">055-7270844</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SEOPageLayout>
  )
}
