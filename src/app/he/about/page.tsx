import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

export const metadata: Metadata = {
  title: 'אודות פרוסאס | פלטפורמת תקשורת עסקית מבוססת AI',
  description: 'למדו על פרוסאס – הפלטפורמה הישראלית המשלבת CRM, אוטומציית וואטסאפ ובוט שיחות AI לניהול אוטומטי של כל אינטראקציית לקוח.',
  alternates: {
    canonical: `${siteUrl}/he/about`,
    languages: {
      'he': `${siteUrl}/he/about`,
      'en': `${siteUrl}/about`,
    },
  },
  keywords: 'פרוסאס, פרו סאס, ProSaaS, PRO SAAS, אודות פרוסאס, מוקד שיחות AI, CRM חכם, בינה מלאכותית לעסקים',
  openGraph: {
    title: 'אודות פרוסאס',
    description: 'הפלטפורמה הישראלית לאוטומציה של תקשורת עסקית מבוססת AI.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function AboutPageHe() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/about">
      <div className="max-w-4xl mx-auto px-4 py-16" dir="rtl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">אודות פרוסאס</h1>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">המשימה שלנו</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            פרוסאס נולדה כדי לתת לכל עסק — מקבלן עצמאי ועד חברה גדלה — את אותן יכולות תקשורת שהיו נחלתן של ארגונים גדולים בלבד. אנחנו מאמינים ש-AI צריך לעבוד עבור כל עסק, לא רק אלו שיש להם מחלקות IT ותקציבים ענקיים.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            המשימה שלנו פשוטה: לעזור לעסקים לא לפספס ליד, לא לתת ללקוח להרגיש מוזנח, ולא לבזבז זמן על משימות תקשורת ידניות שה-AI יכול לנהל טוב יותר.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">מה אנחנו בונים</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            פרוסאס היא פלטפורמת תקשורת עסקית מבוססת AI הכוללת שלוש יכולות מרכזיות:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: '📞', title: 'בוט שיחות AI', desc: 'עונה לשיחות נכנסות 24/7 עם דיבור עברי טבעי, מסנן מתקשרים ומתעד הכל ב-CRM.' },
              { icon: '💬', title: 'אוטומציית וואטסאפ', desc: 'מגיב להודעות וואטסאפ מיידית, מסנן לידים, אוסף פרטים ומנתב שיחות בצורה חכמה.' },
              { icon: '📊', title: 'CRM חכם', desc: 'מרכז כל הלידים, לקוחות ותקשורת – מאורגן ומוכן לפעולה.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">למה פרוסאס קיימת</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            הקמנו את פרוסאס אחרי שחזינו בתבנית מתסכלת: עסקים איבדו לקוחות לא בגלל שירות גרוע, אלא בגלל זמני תגובה איטיים וכאוס בתקשורת. אינסטלטור שפספס שיחה בזמן עבודה. סוכן נדל&quot;ן שלא הצליח לענות להודעות וואטסאפ בזמן הצגת נכס. עורך דין שחזר לשיחה יומיים מאוחר.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            הפתרונות הקיימים היו יקרים מדי, מסובכים מדי, או לא בנויים לשוק הישראלי. בנינו את פרוסאס כדי למלא את הפער הזה — מוצר שמדבר עברית בצורה טבעית, במחיר שמתאים לעסקים קטנים, וללא צורך בידע טכני כלשהו.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">הטכנולוגיה שלנו</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            פרוסאס בנויה על מודלי AI מתקדמים שעברו אופטימיזציה להבנה וייצור של השפה העברית. בוט הקול שלנו משתמש בעיבוד שפה טבעית כדי להבין את כוונת המתקשר בזמן אמת, גם עם רעשי רקע, מבטאים ודיבור לא פורמלי.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            אנחנו מתחברים ל-WhatsApp Business API, ספקי טלפוניה ישראלים מרכזיים וכלים עסקיים פופולריים. הפלטפורמה שלנו בנויה לאמינות — זמינות של 99.9% עם תשתית ברמה ארגונית.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">צור קשר</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            נשמח ללמוד על העסק שלכם ולהראות כיצד פרוסאס יכולה לעזור. הזמינו הדגמה חינמית וצוות שלנו יעבור איתכם בדיוק כיצד הפלטפורמה עובדת עבור תחום הפעילות הספציפי שלכם.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
              הזמן הדגמה חינמית
            </Link>
            <a href="mailto:support@prosaas.pro" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
              שלח מייל
            </a>
          </div>
        </section>
      </div>
    </SEOPageLayout>
  )
}
