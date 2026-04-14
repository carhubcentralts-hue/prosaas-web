import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'נציג שירות אוטומטי לעסקים – מענה ללקוחות בלי להעסיק עובדים | ProSaaS',
  description: 'נציג שירות אוטומטי של פרוסאס עונה לכל פנייה, פותר בעיות נפוצות ומעביר לנציג אנושי רק כשצריך. חסכו זמן וכסף על שירות לקוחות. קבל הדגמה.',
  keywords: 'נציג שירות אוטומטי, שירות לקוחות אוטומטי, בוט שירות, AI שירות לקוחות, מענה לקוחות אוטומטי, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/customer-service-bot`,
    languages: {
      he: `${siteUrl}/he/customer-service-bot`,
    },
  },
  openGraph: {
    title: 'נציג שירות אוטומטי לעסקים – מענה ללקוחות בלי להעסיק עובדים | ProSaaS',
    description: 'נציג שירות AI שעונה 24/7, פותר בעיות ומעביר לנציג אנושי רק כשצריך.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/customer-service-bot`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'נציג שירות אוטומטי | ProSaaS' }],
  },
}

export default function HeCustomerServiceBotPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-teal-600 font-semibold mb-3 text-sm uppercase tracking-wide">נציג שירות אוטומטי</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              נציג שירות אוטומטי לעסקים – מענה ללקוחות בלי להעסיק עובדים
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              לקוח שלא מקבל מענה מהיר — הופך ללקוח לא מרוצה. נציג השירות האוטומטי של פרוסאס עונה לכל פנייה 24/7, פותר בעיות שכיחות ומסלים לנציג אנושי רק כשיש צורך — כך ששירות הלקוחות שלכם עובד גם כשאתם לא.
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הבעיה: שירות לקוחות עולה הרבה ומספק מעט</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            עסק קטן לא יכול להרשות לעצמו נציג שירות במשרה מלאה — ועסק גדול מתמודד עם עומסים שמובילים לזמני המתנה ארוכים ולקוחות מתוסכלים. 80% מהפניות לשירות לקוחות חוזרות על עצמן: שאלות על שעות פעילות, מחירים, מצב הזמנה, ביטול, ניתוב שיחה.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            נציג שירות אוטומטי טופל ב-80% מהפניות האלה ללא התערבות אנושית — ומעביר את ה-20% הנותרים לנציג עם כל הקשר הרלוונטי מוכן.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה נציג השירות האוטומטי עושה?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '❓', title: 'מענה על שאלות נפוצות', desc: 'שעות פעילות, מחירים, מדיניות ביטול, מצב הזמנה — הנציג עונה מיד, בדיוק כמו שהגדרתם.' },
              { icon: '🔁', title: 'ניהול בקשות שכיחות', desc: 'ביטול פגישה, שינוי תאריך, בקשת חשבונית, דיווח על בעיה — הנציג מטפל ישירות ומעדכן את המערכת.' },
              { icon: '📈', title: 'סיווג ועדיפות', desc: 'פנייה דחופה? תלונה חמורה? הנציג מזהה, מסמן בעדיפות גבוהה ומעביר מיד לאדם הנכון.' },
              { icon: '🤝', title: 'העברה חלקה לנציג אנושי', desc: 'כשנדרש נציג אנושי — הלקוח מועבר עם כל ההקשר. הנציג לא צריך לשאול "מה הבעיה?" פעם נוספת.' },
              { icon: '📊', title: 'מדידה ושיפור', desc: 'נתוני פניות, זמני מענה, שביעות רצון — הכל נמדד ומוצג בדשבורד. אפשר לשפר ולעדכן בקלות.' },
              { icon: '🌐', title: 'כל הערוצים', desc: 'וואטסאפ, טלפון, טופס אתר — נציג אחד שמנהל הכל, עם היסטוריה מרוכזת לכל לקוח.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">דוגמה: נציג שירות בפועל</h2>
          <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🧹 חברת ניקיון</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">לקוח (ווצאפ):</span> &quot;צריך לבטל את הניקיון ביום רביעי&quot;</p>
              <p><span className="font-semibold">נציג AI:</span> מזהה את הלקוח לפי מספר, בודק את הפגישה ביומן</p>
              <p><span className="font-semibold">נציג AI:</span> &quot;ביטול 2 ימים לפני — ללא עלות. רוצה לקבוע תאריך חלופי?&quot;</p>
              <p><span className="font-semibold">לקוח:</span> &quot;כן, ביום שישי&quot;</p>
              <p><span className="font-semibold">נציג AI:</span> בודק זמינות, מאשר ומעדכן את היומן — הכל אוטומטי</p>
              <p className="font-semibold text-teal-600">הלקוח קיבל שירות מהיר, המנהלת ראתה את השינוי ב-CRM — בלי אינטראקציה ידנית.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">יתרונות נציג שירות אוטומטי</h2>
          <ul className="space-y-3">
            {[
              'חוסך 60–80% מזמן הטיפול בפניות שירות שחוזרות',
              'לקוחות מקבלים מענה מיידי — 24/7, ללא המתנה',
              'נציגים אנושיים מתפנים לטפל בבעיות שבאמת דורשות אותם',
              'עקביות מלאה — כל לקוח מקבל אותה חוויה, תמיד',
              'אפס שכחות, אפס טעויות אנוש בטיפול בבקשות שגרתיות',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-teal-600 mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">שירותים נוספים</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לעסקים</Link>
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לעסקים</Link>
            <Link href="/he/ai-sales-agent" className="text-blue-600 hover:text-blue-800 underline">נציג מכירות אוטומטי</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-teal-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">תנו לנציג AI לטפל בשירות הלקוחות</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו איך פרוסאס הופך שירות לקוחות מנטל ליתרון תחרותי.
          </p>
          <Link href="/#contact" className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
