import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'בוט וואטסאפ לעסקים – מענה אוטומטי שמביא לקוחות | ProSaaS',
  description: 'בוט וואטסאפ לעסקים של פרוסאס עונה לכל הודעה תוך שניות, מסנן לידים ומתאם פגישות 24/7. דוגמאות אמיתיות מהובלות, קליניקות ועסקים קטנים. קבל הדגמה חינם.',
  keywords: 'בוט וואטסאפ לעסקים, בוט וואטסאפ, מענה אוטומטי וואטסאפ, בוט ווצאפ, נציג לוואטסאפ, אוטומציה וואטסאפ, בינה מלאכותית וואטסאפ, פרוסאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/whatsapp-bot`,
    languages: {
      he: `${siteUrl}/he/whatsapp-bot`,
      en: `${siteUrl}/whatsapp-automation`,
    },
  },
  openGraph: {
    title: 'בוט וואטסאפ לעסקים – מענה אוטומטי שמביא לקוחות | ProSaaS',
    description: 'בוט וואטסאפ לעסקים — מענה מיידי 24/7, לכידת לידים אוטומטית ותיאום פגישות ללא מאמץ.',
    type: 'website',
    locale: 'he_IL',
    url: `${siteUrl}/he/whatsapp-bot`,
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: 'בוט וואטסאפ לעסקים | ProSaaS' }],
  },
}

export default function HeWhatsAppBotPage() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/whatsapp-automation">
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">בוט וואטסאפ לעסקים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              בוט וואטסאפ לעסקים שמדבר כמו בן אדם וסוגר לידים
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              כשלקוח שולח הודעת וואטסאפ ולא מקבל מענה תוך דקות — הוא פונה למתחרה. בוט הוואטסאפ של פרוסאס עונה תוך שניות, מנהל שיחה טבעית בעברית, מסנן לידים ומתאם פגישות — גם בלילה, גם בשבת.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                קבל הדגמה חינם
              </Link>
              <Link href="/he/voice-bot" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                גם בוט קולי
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12" dir="rtl">

        {/* Problem */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הבעיה: לקוחות לא מחכים</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            וואטסאפ הוא ערוץ התקשורת העיקרי בישראל. לפי נתונים, מעל 87% מהישראלים משתמשים בוואטסאפ יומיומית — והם מצפים למענה מהיר. כשלקוח פוטנציאלי שולח הודעה ב-9 בערב ולא מקבל תשובה עד בוקר — הוא כבר שכח מכם, או עבר למתחרה שכן ענה.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            מחקרים מראים: הסיכוי להמיר ליד יורד ב-80% כשלא עונים תוך 5 דקות. בעל עסק ממוצע מפספס 30–50% מהפניות שלו בגלל שאין לו זמן לענות לכולן מיד. בוט וואטסאפ לעסקים פותר בדיוק את הבעיה הזו.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">הפתרון: בוט וואטסאפ שעובד בשבילכם</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'מענה מיידי 24/7', desc: 'כל הודעה נכנסת מקבלת מענה תוך שניות — בלילה, בשבת, בחגים. לקוח שמקבל תשובה מיידית נשאר מעורב ומגדיל משמעותית את הסיכוי לסגירת עסקה.' },
              { icon: '🎯', title: 'סינון וכישור לידים', desc: 'הבוט שואל את השאלות הנכונות: מה הצורך? מתי? מה התקציב? מסווג לידים לפי עדיפות ומעביר לצוות רק את הלידים הבשלים. אתם סוגרים יותר עסקות בפחות מאמץ.' },
              { icon: '📅', title: 'תיאום פגישות אוטומטי', desc: 'הבוט בודק את היומן שלכם, מציע שעות פנויות וקובע פגישות ישירות עם הלקוח — בלי צורך בהתכתבות ידנית. לקוח שקובע פגישה הוא ליד בשל.' },
              { icon: '📊', title: 'סנכרון מלא ל-CRM', desc: 'כל שיחת וואטסאפ, פרטי הליד, הסטטוס ותוצאת השיחה מועברים אוטומטית ל-CRM החכם של פרוסאס. היסטוריה מלאה לכל לקוח, ללא הזנה ידנית.' },
              { icon: '📢', title: 'הודעות יוזמות ואוטומציות', desc: 'שלחו הודעות פולואפ ללידים שלא סגרו, תזכורות לפגישות, מבצעים ועדכונים ללקוחות קיימים — הכל אוטומטי, בתזמון שנקבע מראש.' },
              { icon: '🌐', title: 'שפה טבעית בעברית', desc: 'הבוט מדבר עברית שוטפת — לא תסריטים נוקשים. הוא מבין ביטויים מקומיים, קיצורים ודרכי דיבור ישראליות. הלקוח לא מרגיש שהוא מדבר עם מכונה.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real examples */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">דוגמאות אמיתיות: כך עובד הבוט בתעשיות שונות</h2>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚚 חברת הובלות</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                לקוח שולח הודעה: <span className="font-semibold">"כמה עולה הובלה מתל אביב לחיפה?"</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                הבוט עונה מיד: שואל על גודל הדירה, תאריך ההובלה, קומות ומעלית. לאחר 3–4 הודעות יש בידי חברת ההובלות ליד מוסמך עם כל הפרטים, מוכן לסגירה. ה<Link href="/he/whatsapp-bot-for-moving-companies" className="text-blue-600 hover:underline">בוט וואטסאפ להובלות</Link> עובד 24/7 וחוסך שעות של מענה ידני.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 קליניקה</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                מטופל שולח הודעה בשעה 11 בלילה: <span className="font-semibold">"אפשר לקבוע תור?"</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                הבוט עונה מיד, בודק את היומן, מציע שעות פנויות ומקבע תור — כשהרופא עוד ישן. בבוקר, הרופא מגיע לקליניקה עם יומן מלא. ה<Link href="/he/whatsapp-bot-for-clinics" className="text-blue-600 hover:underline">בוט וואטסאפ לקליניקות</Link> הוא הנציג שלא עייף אף פעם.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔧 קבלן שיפוצים</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                לקוח שולח: <span className="font-semibold">"צריך לשפץ מטבח, מה המחיר?"</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                הבוט אוסף פרטים: גודל המטבח, סוג השיפוץ, תחילת עבודה מועדפת, ושולח את הכל לקבלן כליד מסודר. במקום לבזבז 20 דקות על שיחת טלפון, הקבלן מקבל תמצית של כל מה שצריך — ומתקשר רק לסגירה.
              </p>
            </div>
          </div>
        </section>

        {/* Why better */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">למה בוט וואטסאפ עדיף על מענה ידני?</h2>
          <ul className="space-y-3">
            {[
              'עונה תוך שניות — לא שעות. זמן תגובה מהיר מכפיל שיעור המרת לידים',
              'זמין 24/7 ללא עלות נוספת — גם בלילה, גם בחגים, גם בשבת',
              'לא עייף, לא בטלפון אחר, לא שוכח לענות לאף לקוח',
              'אוסף מידע מסודר — בלי "אוקיי תשלח לי פרטים" ובלי טעויות',
              'מנתב לאדם הנכון בצוות בדיוק כשצריך',
              'עולה פחות מעובד במשרה חלקית — ועובד פי 10 יותר',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to start */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">איך מתחילים?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'הדגמה חינמית', desc: 'מתאמים שיחה קצרה בה אנחנו מבינים את העסק שלכם ואת הצרכים הספציפיים.' },
              { step: '2', title: 'הגדרה מהירה', desc: 'הצוות שלנו מגדיר את הבוט בהתאמה אישית לעסק — שפה, תסריטים, חיבור ל-CRM. 3–5 ימי עסקים.' },
              { step: '3', title: 'מתחילים לעבוד', desc: 'הבוט עובד עבורכם מהרגע הראשון. מעקב שוטף ושיפור מתמיד על בסיס ביצועים.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">שירותים נוספים של פרוסאס</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/he/voice-bot" className="text-blue-600 hover:text-blue-800 underline">בוט קולי לעסקים</Link>
            <Link href="/he/smart-crm" className="text-blue-600 hover:text-blue-800 underline">CRM חכם</Link>
            <Link href="/he/ai-sales-agent" className="text-blue-600 hover:text-blue-800 underline">נציג מכירות אוטומטי</Link>
            <Link href="/he/customer-service-bot" className="text-blue-600 hover:text-blue-800 underline">נציג שירות אוטומטי</Link>
            <Link href="/he/whatsapp-bot-for-moving-companies" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ להובלות</Link>
            <Link href="/he/whatsapp-bot-for-clinics" className="text-blue-600 hover:text-blue-800 underline">בוט וואטסאפ לקליניקות</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">הפסיקו לפספס לקוחות בוואטסאפ</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו כיצד בוט הוואטסאפ של פרוסאס עובד עבור העסק שלכם — תוך 3 ימי עסקים אתם חיים.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
