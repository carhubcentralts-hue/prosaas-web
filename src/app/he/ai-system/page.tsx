import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { siteUrl } from '@/lib/site-url'

export const metadata: Metadata = {
  title: 'נציג שיחות AI | פרוסאס – נציג טלפוני חכם ומענה אוטומטי לעסקים',
  description: 'פרוסאס מספקת נציג שיחות AI ונציג טלפוני חכם לעסקים — עונה לכל שיחה נכנסת 24/7, מנהל שיחה טבעית בעברית, מסכם ושומר ב-CRM אוטומטית. בלי לפספס לקוחות.',
  keywords: 'נציג שיחות AI, נציג טלפוני חכם, נציג טלפוני אוטומטי, נציג AI לעסקים, מענה טלפוני אוטומטי, בוט קולי חכם, מוקד שיחות AI, פרוסאס, פרו סאס, ProSaaS',
  alternates: {
    canonical: `${siteUrl}/he/ai-system`,
    languages: {
      he: `${siteUrl}/he/ai-system`,
      en: `${siteUrl}/ai-call-center`,
    },
  },
  openGraph: {
    title: 'נציג שיחות AI | פרוסאס – נציג טלפוני חכם לעסקים',
    description: 'נציג שיחות AI שעונה לכל שיחה נכנסת 24/7, מנהל שיחה טבעית בעברית ושומר הכל ב-CRM.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function HeAISystemPage() {
  return (
    <SEOPageLayout lang="he">
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100" dir="rtl">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">נציג שיחות AI לעסקים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              נציג שיחות AI — נציג טלפוני חכם ומענה אוטומטי 24/7
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              פרוסאס מספקת לעסק שלכם נציג שיחות AI שעונה לכל שיחה נכנסת, מנהל שיחה טבעית בעברית, מסכם ושומר ב-CRM — אוטומטית, 24 שעות ביממה, 7 ימים בשבוע. בלי לפספס לקוחות. בלי בלאגן.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                קבל הדגמה חינם
              </Link>
              <Link href="/" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                לדף הבית
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12" dir="rtl">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">מה זה נציג שיחות AI?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            נציג שיחות AI הוא נציג טלפוני חכם שמבוסס בינה מלאכותית ומטפל בשיחות נכנסות בצורה אוטומטית. בניגוד לנציג אנושי, הוא זמין 24/7, לא עייף, לא טועה, ומתעד כל שיחה אוטומטית ב-CRM.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            במקום שאתם צריכים לענות לכל שיחה ידנית, נציג ה-AI של פרוסאס עונה עבורכם, אוסף מידע, מסווג לידים ומעדכן את ה-CRM — הכל אוטומטית, 24 שעות ביממה, 7 ימים בשבוע.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">היכולות של נציג השיחות AI של פרוסאס</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📞', title: 'נציג טלפוני חכם בעברית', desc: 'עונה לכל שיחה נכנסת, מנהל שיחה טבעית בעברית, אוסף פרטים ומסנכרן ל-CRM.' },
              { icon: '💬', title: 'נציג לוואטסאפ', desc: 'עונה להודעות וואטסאפ מיד, מסנן לידים ומנתב לאדם הנכון.' },
              { icon: '🗂️', title: 'CRM חכם', desc: 'כל הלידים, הלקוחות וההיסטוריה במקום אחד — עם המלצות AI לפעולה הבאה.' },
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
          <h2 className="text-3xl font-bold mb-4">רוצים נציג שיחות AI לעסק שלכם?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            קבלו הדגמה חינם ותראו איך פרוסאס יכולה לשנות את אופן ניהול הלקוחות בעסק שלכם.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            קבל הדגמה חינם
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
