import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט וואטסאפ להובלות – יותר לקוחות, פחות טלפונים | ProSaaS',
  description: 'בוט וואטסאפ לחברות הובלה של פרוסאס עונה לפניות מחיר 24/7, אוסף פרטים מלאים ומתאם הובלות אוטומטית. אין יותר שיחות שנפספסות. קבל הדגמה.',
  keywords: 'בוט וואטסאפ להובלות, אוטומציה חברת הובלות, צ׳אטבוט הובלות, מענה אוטומטי להובלות, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/whatsapp-bot-for-moving-companies`,
    languages: {
      he: `${siteUrl}/he/whatsapp-bot-for-moving-companies`,
    },
  },
  openGraph: {
    title: 'בוט וואטסאפ להובלות – יותר לקוחות, פחות טלפונים | ProSaaS',
    description: 'בוט וואטסאפ לחברות הובלה — עונה לפניות מחיר, אוסף פרטים ומתאם הובלות 24/7.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/whatsapp-bot-for-moving-companies`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'בוט וואטסאפ להובלות | ProSaaS' }],
  },
}

export default function HeWhatsAppMovingPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-yellow-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט וואטסאפ לחברות הובלה</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט וואטסאפ להובלות – יותר לקוחות, פחות טלפונים
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              חברת הובלות מקבלת עשרות פניות ביום — ומרביתן מגיעות דרך וואטסאפ. הבוט של פרוסאס עונה לכל פנייה מיד, אוסף את כל הפרטים הנדרשים לציטוט ומתאם הובלות — בלי שתצטרכו להיות ליד הטלפון.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                קבל הדגמה חינם
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12" dir="rtl">

        {/* Problem */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הבעיה: פניות שאתם לא יכולים לענות בזמן</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            הצוות שלכם בשטח — עסוק בהובלה. לקוח חדש שולח הודעת וואטסאפ: &quot;כמה עולה הובלה מרחובות לירושלים?&quot; אין מי שיענה. שעה לאחר מכן — הוא כבר סגר עם המתחרה.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            גם כשעונים — לאסוף את כל הפרטים (גודל דירה, קומות, מעלית, תאריך) לוקח זמן. הבוט עושה את זה אוטומטית, מסודר ומהר.
          </p>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">כיצד הבוט עובד עבור חברת הובלות?</h2>
          <div className="space-y-4">
            {[
              { step: '1', text: 'לקוח שולח הודעה — "מחפש הובלה"', color: 'bg-blue-600' },
              { step: '2', text: 'הבוט עונה מיד ושואל: כמה חדרים? מאיפה לאן? באיזה תאריך? קומות ומעלית?', color: 'bg-blue-600' },
              { step: '3', text: 'הבוט מחשב הצעת מחיר ראשונית ושולח ללקוח', color: 'bg-blue-600' },
              { step: '4', text: 'אם הלקוח מעוניין — מתאם שיחה עם הצוות וקובע תאריך', color: 'bg-blue-600' },
              { step: '5', text: 'כל הפרטים נשמרים ב-CRM — מוכנים לאישור ולתאום מחדש', color: 'bg-green-600' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`w-10 h-10 ${s.color} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>{s.step}</div>
                <p className="text-lg text-gray-700 pt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">מה אתם מרוויחים?</h2>
          <ul className="space-y-3">
            {[
              'אפס פניות שנפספסות — הבוט עונה גם בשעה 23:00',
              'חסכון של שעות בשבוע על שאלות חוזרות ועל איסוף פרטים',
              'יותר הובלות מתוזמנות — הלקוח נשאר בשיחה ולא "חושב על זה"',
              'היסטוריה מלאה לכל לקוח — פרטי ההובלה, הציטוט, מה סוכם',
              'אפשר לנהל יותר הובלות בו זמנית ללא עלות נוספת',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">עוד פתרונות לעסקים</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לכל עסק</Link>
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לעסקים</Link>
            <Link href="/he/whatsapp-bot-for-clinics" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לקליניקות</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">קבלו יותר הובלות בלי להוסיף כוח אדם</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            הדגמה חינמית — נראה לכם כמה פניות אתם מפספסים עכשיו ואיך הבוט פותר את זה.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
