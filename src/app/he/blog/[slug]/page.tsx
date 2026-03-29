import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SEOPageLayout from '../../../../components/SEOPageLayout'
import StructuredData from '../../../../components/StructuredData'
import { blogPostsHe, getBlogPostHe, getAllBlogSlugsHe } from '../../../../lib/blog-posts-he'
import { siteUrl } from '@/lib/site-url'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugsHe().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostHe(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/he/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${siteUrl}/he/blog/${slug}`,
      locale: 'he_IL',
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-900 mt-4 mb-2">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="mr-6 text-lg text-gray-700 leading-relaxed list-disc mb-1">
          {line.slice(2)}
        </li>
      )
    } else if (line.startsWith('| ') && line.includes('|')) {
      // skip table rows (simplified)
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p key={key++} className="text-lg text-gray-700 leading-relaxed mb-4">
          {line}
        </p>
      )
    }
  }
  return elements
}

export default async function HebrewBlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostHe(slug)
  if (!post) notFound()

  const relatedPosts = blogPostsHe.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <SEOPageLayout lang="he" alternateUrl="/blog">
      <StructuredData
        type="article"
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        url={`${siteUrl}/he/blog/${slug}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-16" dir="rtl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500" aria-label="נתיב ניווט">
          <Link href="/" className="hover:text-blue-600">בית</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <Link href="/he/blog" className="hover:text-blue-600">בלוג</Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Article header */}
        <header className="mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200">
            <span>מאת צוות פרוסאס</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('he-IL', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article content */}
        <article className="prose-custom" lang="he">
          {renderMarkdown(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">רוצים לאוטומט את העסק שלכם?</h2>
          <p className="text-blue-100 mb-6">
            ראו כיצד פרוסאס יכולה לעזור לעסק שלכם לענות מהר יותר, ללכוד יותר לידים ולצמוח.
          </p>
          <Link
            href="/#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            קבלו הדגמה חינם
          </Link>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <h3 id="related-heading" className="text-2xl font-bold text-gray-900 mb-6">
              מאמרים קשורים
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link
                  key={related.slug}
                  href={`/he/blog/${related.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`קרא: ${related.title}`}
                >
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {related.category}
                  </span>
                  <h4 className="font-bold text-gray-900 mt-1 mb-2 leading-tight hover:text-blue-700">
                    {related.title}
                  </h4>
                  <span className="text-xs text-gray-400">{related.readTime}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </SEOPageLayout>
  )
}
