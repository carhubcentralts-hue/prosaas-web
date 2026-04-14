import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט וואטסאפ לקליניקות – קביעת תורים אוטומטית 24/7 | ProSaaS',
  description: 'בוט וואטסאפ לקליניקות ומרפאות של פרוסאס קובע תורים אוטומטית, שולח תזכורות ומצמצם ביטולים של רגע אחרון. קבל הדגמה חינם.',
  keywords: 'בוט וואטסאפ לקליניקות, קביעת תורים אוטומטית, בוט קליניקה, מרפאה אוטומציה, תזכורת תור, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/whatsapp-bot-for-clinics`,
    languages: {
      he: `${siteUrl}/he/whatsapp-bot-for-clinics`,
    },
  },
  openGraph: {
    title: 'בוט וואטסאפ לקליניקות – קביעת תורים אוטומטית 24/7 | ProSaaS',
    description: 'בוט וואטסאפ לקליניקות — קביעת תורים אוטומטית, תזכורות ומצמצום ביטולים.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/whatsapp-bot-for-clinics`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'בוט וואטסאפ לקליניקות | ProSaaS' }],
  },
}

export default function HeWhatsAppClinicsPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט וואטסאפ לקליניקות</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט וואטסאפ לקליניקות – קביעת תורים אוטומטית 24/7
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              מטופלים קובעים תורים בשעות שאתם לא עובדים. הבוט של פרוסאס קובע תורים אוטומטית בלי שתצטרכו להיות זמינים, שולח תזכורות אוטומטיות ומצמצם ביטולים של רגע אחרון — כך שהיומן שלכם מלא ומסודר.
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">האתגר הגדול של קליניקות: פערים ביומן וביטולים</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            מטופל מחפש תור בשעה 22:00. הקליניקה סגורה. הוא שולח הודעת וואטסאפ ומחכה לתשובה. בבוקר — הוא כבר מצא קליניקה אחרת. יומן עם חורים = כסף שנשאר על הרצפה.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            בעיה נוספת: ביטולים בלי הודעה מספיקה. מטופל לא מגיע, השעה מתבזבזת. עם תזכורות אוטומטיות — ביטולים מגיעים מוקדם מספיק כדי למלא את הפנוי.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה הבוט עושה עבור הקליניקה שלכם?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📅', title: 'קביעת תורים 24/7', desc: 'מטופל שולח הודעה — הבוט בודק זמינות ביומן ומציע מועדים פנויים. המטופל בוחר ומאשר — הכל בוואטסאפ, בלי להתקשר.' },
              { icon: '🔔', title: 'תזכורות אוטומטיות', desc: 'תזכורת 24 שעות לפני התור ו-2 שעות לפני — מצמצמת no-shows ב-40–60%. המטופל יכול לאשר, לבטל או לשנות ישירות מהתזכורת.' },
              { icon: '🔄', title: 'ניהול ביטולים ושינויים', desc: 'מטופל שרוצה לשנות תור? הבוט מציע מועדים חלופיים ומעדכן את היומן — בלי שאתם צריכים להיות מעורבים.' },
              { icon: '❓', title: 'מענה לשאלות נפוצות', desc: 'מחיר הטיפול, מה להכין, מדיניות ביטול, כתובת הקליניקה — הבוט עונה אוטומטית ומפחית שיחות מיותרות.' },
              { icon: '📋', title: 'תיעוד במערכת', desc: 'כל תור, כל שינוי, כל פנייה — מתועדים ב-CRM עם פרטי המטופל, היסטוריה ומה תוזמן.' },
              { icon: '🌐', title: 'שפה טבעית', desc: 'הבוט מדבר עברית שוטפת. מטופלים מרגישים שמדברים עם הרציפטשן — לא עם מכונה.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">דוגמה: קביעת תור בלילה</h2>
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">מטופל (22:15):</span> &quot;אפשר לקבוע תור לפיזיותרפיה?&quot;</p>
              <p><span className="font-semibold">הבוט:</span> &quot;כמובן! יש לנו זמינות ביום שלישי ב-10:00 וב-16:30, ובחמישי ב-9:00. מה מתאים לכם?&quot;</p>
              <p><span className="font-semibold">מטופל:</span> &quot;שלישי ב-10&quot;</p>
              <p><span className="font-semibold">הבוט:</span> מאשר, שולח פרטים ואוסף שם וטלפון, מוסיף ליומן</p>
              <p><span className="font-semibold">24 שעות לפני:</span> הבוט שולח תזכורת עם אפשרות אישור/ביטול</p>
              <p className="font-semibold text-blue-600">התוצאה: יומן מלא, מטופל מרוצה, רציפטשן לא נדרשת לפעול בלילה.</p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">עוד פתרונות</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לכל עסק</Link>
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לקליניקה</Link>
            <Link href="/he/customer-service-bot" className="text-blue-600 hover:text-blue-800 underline">נציג שירות אוטומטי</Link>
            <Link href="/he/whatsapp-bot-for-moving-companies" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ להובלות</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">היומן שלכם יכול להיות מלא גם בלילה</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו איך בוט הוואטסאפ ממלא את היומן — בלי עלות נוספת של כוח אדם.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
