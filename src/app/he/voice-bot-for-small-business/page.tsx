import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט קולי לעסקים קטנים – מענה טלפוני חכם במחיר שמשתלם | ProSaaS',
  description: 'בוט קולי לעסקים קטנים של פרוסאס עונה לכל שיחה נכנסת 24/7 — בלי להעסיק נציג טלפוני. מתחיל מ-600 שקל בחודש. קבל הדגמה חינם.',
  keywords: 'בוט קולי לעסקים קטנים, מענה טלפוני לעסק קטן, נציג AI לעסק קטן, מענה אוטומטי לעסק קטן, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/voice-bot-for-small-business`,
    languages: {
      he: `${siteUrl}/he/voice-bot-for-small-business`,
    },
  },
  openGraph: {
    title: 'בוט קולי לעסקים קטנים – מענה טלפוני חכם במחיר שמשתלם | ProSaaS',
    description: 'בוט קולי לעסקים קטנים — עונה לכל שיחה 24/7, מ-600 שקל בחודש.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/voice-bot-for-small-business`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'בוט קולי לעסקים קטנים | ProSaaS' }],
  },
}

export default function HeVoiceBotSmallBusinessPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-indigo-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט קולי לעסקים קטנים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט קולי לעסקים קטנים – מענה טלפוני חכם במחיר שמשתלם
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              עסק קטן לא יכול להרשות לעצמו נציג טלפוני במשרה מלאה — אבל לא יכול להרשות לעצמו לאבד לקוחות בגלל שיחות שנפספסו. הבוט הקולי של פרוסאס הוא הפתרון: מענה מקצועי 24/7, מ-600 שקל בחודש.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                קבל הדגמה חינם
              </Link>
              <Link href="/he/voice-bot" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                עוד על בוט קולי
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12" dir="rtl">

        {/* The question */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">בוט קולי לעסק קטן – האם זה שווה?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            שאלה טובה. בואו נחשב: עסק קטן מקבל בממוצע 20–40 שיחות ביום. אם 30% מהן נפספסות (בעל עסק עסוק, שיחה אחרת, שעות לא נוחות) — מדובר ב-6–12 לידים שאבדו בכל יום.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            אפילו אם כל ליד שווה 500 שקל — 6 לידים ביום = 3,000 שקל ביום = 90,000 שקל בחודש שנשארו על השולחן. הבוט עולה 600 שקל. החשבון עושה את עצמו.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה מקבל עסק קטן עם בוט קולי?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📞', title: 'שיחות נכנסות — אפס שנפספסות', desc: 'הבוט עונה לכל שיחה, גם כשאתם בשיחה אחרת, בפגישה, בשטח, או ישנים. כל לקוח מקבל מענה מקצועי.' },
              { icon: '🗣️', title: 'נשמע כמו עסק גדול', desc: 'הבוט מקדם בברכה מקצועית, מנהל שיחה טבעית ומשאיר רושם של ארגון מסודר — גם אם אתם בעל עסק יחיד.' },
              { icon: '📋', title: 'אוסף פרטים ומתמלל', desc: 'שם, טלפון, מה הצורך — הבוט אוסף הכל ומתמלל לסיכום מסודר. תקבלו SMS/ווצאפ עם כל מה שצריך לחזור.' },
              { icon: '📅', title: 'תיאום פגישות ישיר', desc: 'הבוט מציג מועדים פנויים ומתאם פגישות ישירות ביומן — בלי שתצטרכו לחזור לשיחה.' },
              { icon: '💰', title: 'מחיר לעסק קטן', desc: 'מ-600 שקל בחודש — פחות מעלות שעה של נציג טלפוני. ללא עמלות שיחה, ללא חוזים ארוכים, ללא הפתעות.' },
              { icon: '⚙️', title: 'התקנה מהירה', desc: 'תוך 3–5 ימי עסקים הבוט חי. לא צריך מחלקת IT, לא צריך ידע טכני. הצוות של פרוסאס עושה הכל.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of businesses */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">לאיזה עסקים קטנים מתאים הבוט?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'קבלנים ואומנים', 'סלונים ועיצוב שיער', 'מאמני כושר',
              'יועצים עצמאיים', 'מתקנים ואינסטלטורים', 'קוסמטיקאיות',
              'מורים פרטיים', 'ספקי שירות אחזקה', 'כל מי שמקבל שיחות',
            ].map((type, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 text-center font-medium text-gray-700">
                {type}
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">שירותים נוספים</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי — כל היכולות</Link>
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לעסקים</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם לעסק קטן</Link>
            <Link href="/he/ai-sales-agent" className="text-blue-600 hover:text-blue-800 underline">נציג מכירות אוטומטי</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-indigo-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">עסק קטן, שירות גדול</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותבינו תוך 20 דקות איך בוט קולי יכול לשנות את העסק שלכם — ב-600 שקל בחודש.
          </p>
          <Link href="/#contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
