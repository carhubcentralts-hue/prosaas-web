import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Dental Clinics | ProSaaS – Smart Appointment Booking & Patient Communications',
  description: 'ProSaaS helps dental clinics automate appointment booking, patient reminders, and inquiry handling with an AI voice bot and WhatsApp automation.',
  keywords: 'ai for dental clinics, dental clinic automation, dental appointment bot, dental crm, patient communication automation',
  alternates: { canonical: '/ai-for-dental-clinics' },
  openGraph: {
    title: 'AI for Dental Clinics | ProSaaS',
    description: 'Automate dental clinic appointment booking, patient reminders, and communications with AI.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How can AI help a dental clinic manage appointments?',
    answer: 'AI can answer patient calls to book, reschedule, or cancel appointments without involving your receptionist. It integrates with your scheduling system to check availability and confirm bookings instantly.',
  },
  {
    question: 'Can the AI send appointment reminders to patients?',
    answer: 'Yes. ProSaaS automatically sends WhatsApp reminders 24-48 hours before appointments, reducing no-show rates significantly. Patients can confirm or reschedule directly in WhatsApp.',
  },
  {
    question: 'Is patient data handled securely?',
    answer: 'Yes. ProSaaS follows strict data security practices with encryption at rest and in transit. Patient contact information and conversation logs are protected and accessible only to authorized clinic staff.',
  },
  {
    question: 'Can ProSaaS handle after-hours patient inquiries?',
    answer: 'Absolutely. When patients call after hours, the AI answers, collects their information, and lets them know the clinic will follow up during business hours — or books an appointment directly if the schedule allows.',
  },
]

export default function AIDentalClinicsPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-teal-600 font-semibold mb-3 text-sm uppercase tracking-wide">Dental Clinics</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI for Dental Clinics — Smarter Patient Communication
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Free your receptionist from routine calls and reminders. ProSaaS AI handles appointment booking, patient reminders, and inquiries automatically — so your team can focus on patient care.
            </p>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg inline-block">
              Get a Free Demo
            </Link>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS Helps Dental Clinics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📅', title: 'Automated Appointment Booking', desc: 'Patients call or message to book. The AI checks availability and confirms appointments without involving your staff.' },
              { icon: '🔔', title: 'Appointment Reminders', desc: 'Automatic WhatsApp reminders reduce no-shows by up to 40%. Patients confirm or reschedule with a single reply.' },
              { icon: '💬', title: '24/7 Patient Inquiries', desc: 'Answer common questions about treatments, pricing, and clinic hours automatically — day or night.' },
              { icon: '📊', title: 'Patient CRM', desc: 'Track every patient interaction, appointment history, and communication in one organized dashboard.' },
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
          <h2 className="text-3xl font-bold mb-4">Transform Your Clinic&apos;s Patient Experience</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Less time on admin, more time with patients. See how ProSaaS can help your dental clinic today.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Book a Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
