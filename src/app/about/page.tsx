import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'

export const metadata: Metadata = {
  title: 'About ProSaaS | AI-Powered Business Communication Platform',
  description: 'Learn about ProSaaS – the Israeli-built AI platform that combines CRM, WhatsApp automation, and voice bots to help businesses manage every customer interaction automatically.',
  alternates: { canonical: '/about', languages: { 'en': '/about', 'he': '/he/about' } },
  openGraph: {
    title: 'About ProSaaS',
    description: 'The Israeli-built AI platform for business communication automation.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <SEOPageLayout lang="en" alternateUrl="/he/about">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">About ProSaaS</h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ProSaaS exists to give every business — from a solo contractor to a growing company — the same communication superpowers that only large enterprises could afford before. We believe that AI should work for every business, not just the ones with IT departments and big budgets.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is simple: help businesses never miss a lead, never let a customer feel ignored, and never waste time on manual communication tasks that AI can handle better.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">What We Build</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ProSaaS is an all-in-one AI-powered business communication platform that combines three core capabilities:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: '📞', title: 'AI Voice Bot', desc: 'Answers inbound calls 24/7 with natural Hebrew speech, qualifies callers, and logs everything to your CRM.' },
              { icon: '💬', title: 'WhatsApp Automation', desc: 'Responds to WhatsApp messages instantly, qualifies leads, and routes conversations intelligently.' },
              { icon: '📊', title: 'Smart CRM', desc: 'A centralized hub for all your leads, customers, and communications — organized and actionable.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Why ProSaaS Exists</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We started ProSaaS after observing a frustrating pattern: businesses were losing customers not because of bad service, but because of slow response times and communication chaos. A plumber missing a call during a job. A real estate agent unable to respond to WhatsApp messages while showing a property. A lawyer returning a call two days late.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The solutions available were either too expensive, too complex, or not built for the Israeli market. We built ProSaaS to fill that gap — a product that speaks Hebrew natively, is priced for small businesses, and requires zero technical expertise to operate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Our Technology</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ProSaaS is built on cutting-edge AI models optimized for Hebrew language understanding and generation. Our voice bot uses natural language processing to understand caller intent in real time, even with background noise, accents, and informal speech.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We integrate with the WhatsApp Business API, major Israeli phone carriers, and popular business tools. Our platform is built for reliability — 99.9% uptime with enterprise-grade infrastructure so your business communication never stops.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We&apos;d love to learn about your business and show you how ProSaaS can help. Book a free demo and our team will walk you through exactly how the platform works for your specific use case.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
              Book a Free Demo
            </Link>
            <a href="mailto:support@prosaas.pro" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
              Email Us
            </a>
          </div>
        </section>
      </div>
    </SEOPageLayout>
  )
}
