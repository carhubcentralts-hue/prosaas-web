import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט קולי לעסקים – מענה טלפוני חכם 24/7 | ProSaaS',
  description: 'בוט קולי לעסקים של פרוסאס עונה לכל שיחה נכנסת 24/7 בעברית טבעית, מסכם ושומר ב-CRM אוטומטית. אין יותר שיחות שנפספסות. קבל הדגמה חינם.',
  keywords: 'בוט קולי לעסקים, בוט קולי, מענה טלפוני אוטומטי, נציג טלפוני חכם, מענה קולי אוטומטי, נציג AI לעסקים, מוקד שיחות AI, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/voice-bot`,
    languages: {
      he: `${siteUrl}/he/voice-bot`,
      en: `${siteUrl}/ai-call-center`,
    },
  },
  openGraph: {
    title: 'בוט קולי לעסקים – מענה טלפוני חכם 24/7 | ProSaaS',
    description: 'בוט קולי לעסקים — עונה לכל שיחה נכנסת, מנהל שיחה טבעית בעברית, מתמלל ושומר ב-CRM אוטומטית.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/voice-bot`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'בוט קולי לעסקים | ProSaaS' }],
  },
}

export default function HeVoiceBotPage() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/ai-call-center">
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט קולי לעסקים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט קולי לעסקים – מענה טלפוני חכם 24/7 בעברית
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              כל שיחה שנפספסת היא לקוח שהלך. הבוט הקולי של פרוסאס עונה לכל טלפון נכנס, מנהל שיחה טבעית בעברית, אוסף פרטים ומעביר למערכת ה-CRM — אוטומטית, 24 שעות ביממה.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                קבל הדגמה חינם
              </Link>
              <Link href="/he/whatsapp-bot" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                גם בוט וואטסאפ
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12" dir="rtl">

        {/* Problem */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הבעיה: שיחות שנפספסות = כסף שנשאר על השולחן</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            הטלפון מצלצל בזמן שאתם עם לקוח אחר. אתם בפגישה. אתם ישנים. התוצאה — לקוח פוטנציאלי מנסה את המתחרה הבא ברשימה. מחקרים מראים שעסקים מפספסים 30–50% מהשיחות הנכנסות, ולכל שיחה שנפספסת יש מחיר.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            גם כשעונים — לא תמיד מספיקים לרשום הכל. פרטי הלקוח נשכחים, ה-CRM לא מתעדכן, ופולואפ לא קורה. בוט קולי לעסקים פותר את כל זה.
          </p>
        </section>

        {/* What it does */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">מה הבוט הקולי עושה?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📞', title: 'עונה לכל שיחה נכנסת', desc: 'הבוט עונה מיד לכל שיחה, מברך את המתקשר, מקשיב לצרכיו ומגיב בצורה טבעית — בלי תפריטים מסורבלים, בלי "לחץ 1 לשירות".' },
              { icon: '🗣️', title: 'עברית טבעית, לא רובוטית', desc: 'הבוט מדבר עברית שוטפת, מבין מבטאים, קיצורים וביטויים מקומיים. לקוחות רבים לא מבחינים שמדברים עם AI.' },
              { icon: '📋', title: 'תמלול וסיכום אוטומטי', desc: 'כל שיחה מתומללת ומסוכמת אוטומטית. תוכן השיחה, פרטי הלקוח ומה שסוכם — הכל שמור ב-CRM לפני שהשיחה הסתיימה.' },
              { icon: '📅', title: 'תיאום פגישות', desc: 'הבוט בודק זמינות ביומן ומקבע פגישות ישירות עם המתקשר — בלי שאתם צריכים להיות מעורבים.' },
              { icon: '🔄', title: 'העברה לנציג אנושי', desc: 'כשנדרש — הבוט מעביר לנציג חי בצורה חלקה, עם כל המידע שנאסף. הנציג נכנס לשיחה עם תמונה מלאה.' },
              { icon: '📊', title: 'סנכרון ל-CRM חכם', desc: 'כל שיחה מועברת אוטומטית ל-CRM של פרוסאס — ליד חדש, עדכון ליד קיים, סטטוס, ומה לעשות בצעד הבא.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real example */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">דוגמה אמיתית: כך עובד הבוט בפועל</h2>
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 קבלן אינסטלציה</h3>
            <div className="space-y-4 text-gray-700">
              <p><span className="font-semibold">שעה 21:30:</span> לקוח מתקשר — "יש לי נזילה דחופה"</p>
              <p><span className="font-semibold">הבוט:</span> עונה מיד, שואל על טיב הנזילה, הכתובת ורמת הדחיפות</p>
              <p><span className="font-semibold">הבוט:</span> מבין שזה דחוף, מעביר ישירות לקבלן עם כל הפרטים</p>
              <p><span className="font-semibold">ב-CRM:</span> נוצר ליד אוטומטי עם שם, טלפון, כתובת ותיאור הבעיה</p>
              <p className="font-semibold text-blue-600">התוצאה: לקוח קיבל מענה מיידי, קבלן קיבל ליד מוכן — גם בשעות הלילה.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">היתרונות של בוט קולי לעסקים</h2>
          <ul className="space-y-3">
            {[
              'אפס שיחות שנפספסות — כל שיחה נענית, כל שעה',
              'חוסך עד 70% מעלויות ניהול שיחות לעומת נציג אנושי',
              'לא צריך להכשיר, לא לנהל, לא לשלם על שעות עבודה',
              'כל לקוח מקבל חוויה עקבית ומקצועית בכל שיחה',
              'נתוני שיחות בזמן אמת — אנליטיקס מפורט לשיפור מתמיד',
              'משתלב עם <a href="/he/whatsapp-bot" class="text-blue-600 hover:underline">בוט הוואטסאפ</a> ו-<a href="/he/smart-crm" class="text-blue-600 hover:underline">CRM החכם</a> לפתרון מלא',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </section>

        {/* For whom */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">לאיזה עסקים מתאים הבוט הקולי?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'קבלנים ואינסטלטורים', href: '/he/voice-bot-for-small-business' },
              { label: 'קליניקות ומרפאות', href: '/he/whatsapp-bot-for-clinics' },
              { label: 'חברות הובלות', href: '/he/whatsapp-bot-for-moving-companies' },
              { label: 'סוכני נדל"ן', href: '/he/ai-system' },
              { label: 'משרדי עו"ד ורו"ח', href: '/he/ai-system' },
              { label: 'עסקים קטנים', href: '/he/voice-bot-for-small-business' },
            ].map((industry, i) => (
              <Link key={i} href={industry.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-sm transition text-center font-medium text-gray-800">
                {industry.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">שירותים נוספים של פרוסאס</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/whatsapp-bot" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לעסקים</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם</Link>
            <Link href="/he/ai-sales-agent" className="text-blue-600 hover:text-blue-800 underline">נציג מכירות אוטומטי</Link>
            <Link href="/he/customer-service-bot" className="text-blue-600 hover:text-blue-800 underline">נציג שירות אוטומטי</Link>
            <Link href="/he/voice-bot-for-small-business" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לעסקים קטנים</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">תפסיקו לפספס שיחות</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו כיצד הבוט הקולי של פרוסאס עונה לשיחות עבור העסק שלכם — תוך 3 ימי עסקים אתם חיים.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
