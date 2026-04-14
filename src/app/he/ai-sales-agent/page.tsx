import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'נציג מכירות אוטומטי לעסקים – סוגר לידים גם כשאתה לא זמין | ProSaaS',
  description: 'נציג מכירות אוטומטי של פרוסאס עונה ללידים 24/7, מכשיר אותם, מפולל ומתאם פגישות — כך שאתם מגיעים לשיחת סגירה בלבד. קבל הדגמה חינם.',
  keywords: 'נציג מכירות אוטומטי, AI מכירות, בוט מכירות, אוטומציה מכירות, נציג AI לעסקים, לידים אוטומטי, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/ai-sales-agent`,
    languages: {
      he: `${siteUrl}/he/ai-sales-agent`,
    },
  },
  openGraph: {
    title: 'נציג מכירות אוטומטי לעסקים – סוגר לידים גם כשאתה לא זמין | ProSaaS',
    description: 'נציג מכירות AI שמכשיר לידים, מפולל ומתאם פגישות אוטומטית — 24/7.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/ai-sales-agent`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'נציג מכירות אוטומטי | ProSaaS' }],
  },
}

export default function HeAISalesAgentPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold mb-3 text-sm uppercase tracking-wide">נציג מכירות אוטומטי</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              נציג מכירות אוטומטי לעסקים – סוגר לידים גם כשאתה לא זמין
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              נציג המכירות האוטומטי של פרוסאס עונה לכל פנייה, מכשיר לידים, מענה על שאלות ומתאם פגישות — כך שאתם מגיעים לשיחה בלבד כשהליד כבר בשל. פחות זמן על לידים קרים, יותר זמן על עסקות שנסגרות.
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הבעיה: לידים שמתקררים כי אין מי שיטפל בהם מיד</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ליד שנכנס הוא הזדמנות שחיה 5 דקות. מחקרים מראים ש-78% מהקונים בוחרים בעסק הראשון שענה. אם אתם עסוקים, בפגישה, או פשוט לא זמינים — הליד עובר למתחרה.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            גם כשעונים — הרבה זמן מבוזבז על לידים לא מוכשרים: אנשים ש"רק שואלים", שהתקציב לא מתאים, או שהצורך לא אמיתי. נציג מכירות אוטומטי מסנן אותם לפני שאתם מדברים.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה נציג המכירות האוטומטי עושה?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'מענה מיידי לכל ליד', desc: 'כל פנייה — ווצאפ, טלפון, טופס אתר — מקבלת תגובה תוך שניות. הליד לא מתקרר, לא עובר למתחרה.' },
              { icon: '🎯', title: 'כישור לידים אוטומטי', desc: 'הנציג שואל שאלות ממוקדות: מה הצורך, מה התקציב, מה הטווח הזמן. מעביר לכם רק לידים שעומדים בקריטריונים.' },
              { icon: '💬', title: 'מענה על שאלות נפוצות', desc: 'כמה זה עולה? איזה שירות מתאים לי? מה הניסיון שלכם? הנציג עונה על כל זה, מציג יתרונות ומטפל בהתנגדויות ראשוניות.' },
              { icon: '📅', title: 'תיאום פגישות ודמו', desc: 'לידים מוסמכים? הנציג מתאם אוטומטית שיחת סגירה עם הנציג האנושי — יומן מתמלא לבד.' },
              { icon: '🔄', title: 'פולואפ אוטומטי', desc: 'ליד שלא ענה? הנציג שולח תזכורת ב-24 ו-72 שעות. ליד שהביע עניין אבל לא קנה? מקבל מסרון חימום.' },
              { icon: '📊', title: 'דיווח ו-CRM', desc: 'כל ליד, כל שיחה, כל סטטוס — מועבר אוטומטית ל-CRM עם ציון כישור, הערות ומה לעשות בצעד הבא.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">דוגמה: כך עובד נציג המכירות בפועל</h2>
          <div className="bg-orange-50 rounded-xl p-8 border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 סוכנות נדל&quot;ן</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">ליד נכנס (ווצאפ, 20:00):</span> &quot;מחפש דירה 4 חדרים בתל אביב, תקציב 3M&quot;</p>
              <p><span className="font-semibold">נציג AI:</span> עונה מיד — שואל על העדפות שכונה, קומה, חניה, תאריך כניסה</p>
              <p><span className="font-semibold">נציג AI:</span> מציג 2–3 נכסים מתאימים, שולח תמונות</p>
              <p><span className="font-semibold">נציג AI:</span> מתאם ביקור לנכס הנבחר ביומן הסוכן</p>
              <p><span className="font-semibold">ב-CRM:</span> ליד מוסמך עם כל הפרטים ממתין לסוכן בבוקר</p>
              <p className="font-semibold text-orange-600">התוצאה: הסוכן בא לפגישה עם ליד שכבר ראה נכסים ומוכן לקנות.</p>
            </div>
          </div>
        </section>

        {/* How to start */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">איך מתחילים?</h2>
          <ol className="space-y-4">
            {[
              { step: '1', text: 'הדגמה חינמית — נבין את תהליך המכירה שלכם ונזהה איפה נציג AI יכול לחסוך הכי הרבה זמן.' },
              { step: '2', text: 'בנייה מותאמת אישית — הצוות שלנו בונה תסריט כישור בהתאמה לעסק, תוך 3–5 ימי עסקים.' },
              { step: '3', text: 'עבודה חיה — הנציג מתחיל לטפל בלידים. אתם רואים תוצאות מהשבוע הראשון.' },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{s.step}</div>
                <p className="text-lg text-gray-700 pt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">שירותים נוספים</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לעסקים</Link>
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לעסקים</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם</Link>
            <Link href="/he/customer-service-bot" className="text-blue-600 hover:text-blue-800 underline">נציג שירות אוטומטי</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-orange-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">תניחו לנציג AI לסגור לידים בשבילכם</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו כמה לידים אתם מפספסים עכשיו — ואיך נציג מכירות אוטומטי משנה את זה.
          </p>
          <Link href="/#contact" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
