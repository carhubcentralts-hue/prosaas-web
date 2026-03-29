import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { blogPostsHe } from '@/lib/blog-posts-he'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

function bilingual(he: string, en: string): NonNullable<MetadataRoute.Sitemap[number]['alternates']> {
  return { languages: { he, en, 'x-default': he } }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const url = BASE_URL

  const staticEntries: MetadataRoute.Sitemap = [
    // Homepage (Hebrew default ↔ English)
    {
      url,
      lastModified: '2026-01-15',
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: bilingual(url, `${url}/en`),
    },
    {
      url: `${url}/en`,
      lastModified: '2026-01-15',
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: bilingual(url, `${url}/en`),
    },

    // Hebrew feature pages
    {
      url: `${url}/he/ai-system`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingual(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/he/smart-crm`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingual(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    {
      url: `${url}/he/whatsapp-bot`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingual(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },

    // About (Hebrew ↔ English)
    {
      url: `${url}/he/about`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual(`${url}/he/about`, `${url}/about`),
    },
    {
      url: `${url}/about`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingual(`${url}/he/about`, `${url}/about`),
    },

    // English feature pages
    {
      url: `${url}/ai-call-center`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingual(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/whatsapp-automation`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingual(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },
    {
      url: `${url}/ai-crm`,
      lastModified: '2026-01-01',
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingual(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    { url: `${url}/ai-answering-service`,       lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${url}/ai-for-small-business`,      lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${url}/ai-lead-management`,         lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${url}/ai-for-moving-companies`,    lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/ai-for-dental-clinics`,      lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/ai-for-real-estate`,         lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/ai-for-law-firms`,           lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/ai-for-cleaning-companies`,  lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/ai-for-property-management`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },

    // Blog indexes (Hebrew ↔ English)
    {
      url: `${url}/he/blog`,
      lastModified: '2026-02-01',
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: bilingual(`${url}/he/blog`, `${url}/blog`),
    },
    {
      url: `${url}/blog`,
      lastModified: '2026-02-01',
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: bilingual(`${url}/he/blog`, `${url}/blog`),
    },

    // Legal / utility pages
    {
      url: `${url}/privacy`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingual(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/terms`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingual(`${url}/terms`, `${url}/en/terms`),
    },
    {
      url: `${url}/en/privacy`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingual(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/en/terms`,
      lastModified: '2026-01-01',
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingual(`${url}/terms`, `${url}/en/terms`),
    },
    { url: `${url}/accessibility`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
  ]

  // English blog posts
  const enBlogEntries: MetadataRoute.Sitemap = blogPosts.map(({ slug }) => ({
    url: `${url}/blog/${slug}`,
    lastModified: '2026-03-01',
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Hebrew blog posts
  const heBlogEntries: MetadataRoute.Sitemap = blogPostsHe.map(({ slug }) => ({
    url: `${url}/he/blog/${slug}`,
    lastModified: '2026-03-01',
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticEntries, ...enBlogEntries, ...heBlogEntries]
}
