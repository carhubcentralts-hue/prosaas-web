import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'CRM חכם לעסקים | פרוסאס – ניהול לידים ולקוחות עם AI',
  description: 'פרוסאס מציעה CRM חכם לעסקים עם AI מובנה — ניהול לידים אוטומטי, מעקב אחר לקוחות, ותזכורות פולואפ. כל הכלים במקום אחד, בעברית.',
  keywords: 'CRM חכם, CRM לעסקים, ניהול לידים, מערכת CRM, CRM AI, ניהול לקוחות, פרוסאס, פרו סאס, ProSaaS, מוקד שיחות',
  alternates: {
    canonical: `${siteUrl}/he/smart-crm`,
    languages: {
      he: `${siteUrl}/he/smart-crm`,
      en: `${siteUrl}/ai-crm`,
    },
  },
  openGraph: {
    title: 'CRM חכם לעסקים | פרוסאס',
    description: 'CRM חכם עם AI לניהול לידים ולקוחות אוטומטי.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function HeCRMPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-100" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">CRM חכם</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              CRM חכם לעסקים — ניהול לידים ולקוחות עם AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              פרוסאס CRM לא רק שומר אנשי קשר — הוא מנהל את הפייפליין שלכם, שולח פולואפ אוטומטי, ומנתח לאיזה לידים כדאי לתת עדיפות. הכל בעברית, הכל אוטומטי.
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">למה CRM חכם ולא רגיל?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            CRM רגיל הוא מאגר מידע — אתם מכניסים נתונים ידנית, ומקבלים דוחות. CRM חכם עם AI פועל עבורכם: לוכד לידים אוטומטית משיחות ווואטסאפ, מדרג אותם לפי פוטנציאל, ושולח פולואפ ללא צורך בהתערבות ידנית.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">יכולות ה-CRM של פרוסאס</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'לכידת לידים אוטומטית', desc: 'כל ליד משיחה, וואטסאפ או טופס נוסף אוטומטית ל-CRM ללא הקלדה ידנית.' },
              { icon: '📊', title: 'פייפליין ויזואלי', desc: 'ראו את כל הלידים בכל שלב של תהליך המכירה. גרור ושחרר עם המלצות AI.' },
              { icon: '🔄', title: 'פולואפ אוטומטי', desc: 'הגדירו רצף הודעות שיישלחו אוטומטית לפי מצב הליד. אף ליד לא יישכח.' },
              { icon: '📈', title: 'ניתוח ביצועים', desc: 'עקבו אחרי מקורות לידים, שיעורי המרה וזמני תגובה. קבלו החלטות על בסיס נתונים.' },
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
          <h2 className="text-3xl font-bold mb-4">תפסיקו לנהל לידים בגיליון אקסל</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            עברו ל-CRM חכם שעובד עבורכם — לא ההפך. קבלו הדגמה חינם היום.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
