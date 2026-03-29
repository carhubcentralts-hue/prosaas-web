import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט ווצאפ חכם לעסקים | פרוסאס – נציג לוואטסאפ אוטומטי 24/7',
  description: 'פרוסאס מספקת בוט ווצאפ חכם ונציג לוואטסאפ לעסקים — מענה אוטומטי מיידי לכל הודעה, סינון לידים ותיאום פגישות, 24 שעות ביממה. הפסיקו לפספס לקוחות.',
  keywords: 'בוט ווצאפ חכם, נציג לוואטסאפ, בוט וואטסאפ לעסקים, אוטומציה וואטסאפ, מענה אוטומטי וואטסאפ, נציג ווצאפ אוטומטי, פרוסאס, פרו סאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/whatsapp-bot`,
    languages: {
      he: `${siteUrl}/he/whatsapp-bot`,
      en: `${siteUrl}/whatsapp-automation`,
    },
  },
  openGraph: {
    title: 'בוט ווצאפ חכם לעסקים | פרוסאס',
    description: 'נציג לוואטסאפ אוטומטי — מענה מיידי 24/7, לכידת לידים וסינון אוטומטי.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function HeWhatsAppBotPage() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/whatsapp-automation">
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט ווצאפ חכם לעסקים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט ווצאפ חכם — נציג לוואטסאפ אוטומטי 24/7
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              אל תפספסו יותר לקוחות בגלל שלא ענינם להודעת וואטסאפ. פרוסאס עונה אוטומטית לכל הודעה, מסנן לידים ומנתב שיחות — גם בלילה, גם בשבת.
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
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">למה בוט ווצאפ חכם לעסק שלכם?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            וואטסאפ הוא ערוץ התקשורת העיקרי עם לקוחות בישראל. כשלקוח שולח הודעה ולא מקבל מענה מהיר — הוא פונה למתחרה. בוט וואטסאפ של פרוסאס עונה תוך שניות, כל שעה.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה הבוט עושה?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'מענה מיידי', desc: 'כל הודעה נכנסת מקבלת מענה תוך שניות — כולל בשעות הלילה ובסופי שבוע.' },
              { icon: '🎯', title: 'סינון לידים', desc: 'הבוט שואל שאלות כשירות ומסווג לידים לפי עדיפות. הצוות שלכם מקבל רק לידים איכותיים.' },
              { icon: '📊', title: 'סנכרון ל-CRM', desc: 'כל שיחת וואטסאפ מועברת אוטומטית ל-CRM עם פרטי הליד והסטטוס שלו.' },
              { icon: '📢', title: 'שליחת הודעות המוניות', desc: 'שלחו הודעות קמפיין ללקוחות קיימים — מבצעים, תזכורות, עדכונים — בצורה מסודרת.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">הפסיקו לפספס לקוחות בוואטסאפ</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו כיצד בוט הוואטסאפ של פרוסאס עובד עבור העסק שלכם.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
