import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../../components/SEOPageLayout'
import { blogPostsHe } from '../../../lib/blog-posts-he'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prosaas.website'

export const metadata: Metadata = {
  title: 'בלוג פרוסאס | תובנות על AI, CRM ואוטומציה עסקית',
  description:
    'מאמרים מקצועיים על אוטומציה AI, CRM, שיווק בוואטסאפ וניהול לידים לעסקים. מדריכים מעשיים ומאמרים מבוססי נתונים מצוות פרוסאס.',
  keywords: 'בלוג AI, בלוג CRM, בלוג וואטסאפ, ניהול לידים, אוטומציה עסקית, פרוסאס בלוג',
  alternates: {
    canonical: `${siteUrl}/he/blog`,
    languages: {
      'he': `${siteUrl}/he/blog`,
      'en': `${siteUrl}/blog`,
    },
  },
  openGraph: {
    title: 'בלוג פרוסאס | AI, CRM ואוטומציה עסקית',
    description: 'תובנות מקצועיות על אוטומציה AI, CRM ותקשורת עסקית.',
    type: 'website',
    locale: 'he_IL',
  },
}

export default function HebrewBlogPage() {
  return (
    <SEOPageLayout lang="he" alternateUrl="/blog">
      <div className="max-w-6xl mx-auto px-4 py-16" dir="rtl">
        <div className="mb-12">
          <nav className="text-sm text-gray-500 mb-6" aria-label="נתיב ניווט">
            <Link href="/" className="hover:text-blue-600">בית</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-gray-700">בלוג</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">בלוג פרוסאס</h1>
          <p className="text-xl text-gray-600">
            תובנות מעשיות על אוטומציה AI, ניהול לידים וצמיחת העסק שלכם.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsHe.map(post => (
            <Link
              key={post.slug}
              href={`/he/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={`קרא את המאמר: ${post.title}`}
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-700 transition leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>
                    {new Date(post.date).toLocaleDateString('he-IL', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SEOPageLayout>
  )
}
