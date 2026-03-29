import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import { blogPosts } from '../../lib/blog-posts'

export const metadata: Metadata = {
  title: 'ProSaaS Blog | AI, CRM & Business Automation Insights',
  description: 'Expert insights on AI automation, CRM, WhatsApp marketing, and lead management for businesses. Practical guides and data-driven articles from the ProSaaS team.',
  keywords: 'ProSaaS blog, PROSAAS, PRO SAAS, AI blog, CRM blog, WhatsApp automation blog, lead management, business automation',
  alternates: {
    canonical: '/blog',
    languages: {
      'en': '/blog',
      'he': '/he/blog',
    },
  },
  openGraph: {
    title: 'ProSaaS Blog | AI, CRM & Business Automation Insights',
    description: 'Expert insights on AI automation, CRM, and business communication.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <SEOPageLayout alternateUrl="/he/blog">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ProSaaS Blog</h1>
          <p className="text-xl text-gray-600">
            Practical insights on AI automation, lead management, and growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition overflow-hidden">
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-700 transition leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
