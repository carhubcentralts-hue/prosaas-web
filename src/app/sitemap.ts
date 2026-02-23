import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '../lib/blog-posts'
import { getAllBlogSlugsHe } from '../lib/blog-posts-he'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prosaas.website'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    // Hebrew (default) homepage ↔ English homepage
    {
      url: siteUrl,
      priority: 1.0,
      changeFrequency: 'weekly',
      alternates: { languages: { 'he': siteUrl, 'en': `${siteUrl}/en`, 'x-default': siteUrl } },
    },
    {
      url: `${siteUrl}/en`,
      priority: 0.9,
      changeFrequency: 'weekly',
      alternates: { languages: { 'he': siteUrl, 'en': `${siteUrl}/en`, 'x-default': siteUrl } },
    },

    // Hebrew feature pages
    { url: `${siteUrl}/he/ai-system`,    priority: 0.9, changeFrequency: 'monthly' },
    { url: `${siteUrl}/he/smart-crm`,    priority: 0.9, changeFrequency: 'monthly' },
    { url: `${siteUrl}/he/whatsapp-bot`, priority: 0.9, changeFrequency: 'monthly' },

    // Hebrew about ↔ English about
    {
      url: `${siteUrl}/he/about`,
      priority: 0.8,
      changeFrequency: 'monthly',
      alternates: { languages: { 'he': `${siteUrl}/he/about`, 'en': `${siteUrl}/about`, 'x-default': `${siteUrl}/he/about` } },
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.8,
      changeFrequency: 'monthly',
      alternates: { languages: { 'he': `${siteUrl}/he/about`, 'en': `${siteUrl}/about`, 'x-default': `${siteUrl}/he/about` } },
    },

    // English top-level pages
    { url: `${siteUrl}/ai-call-center`,           priority: 0.85, changeFrequency: 'monthly' },
    { url: `${siteUrl}/whatsapp-automation`,       priority: 0.85, changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-crm`,                   priority: 0.85, changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-answering-service`,      priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-small-business`,     priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-lead-management`,        priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-moving-companies`,   priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-dental-clinics`,     priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-real-estate`,        priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-law-firms`,          priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-cleaning-companies`, priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${siteUrl}/ai-for-property-management`,priority: 0.7,  changeFrequency: 'monthly' },

    // Blog indexes (Hebrew ↔ English)
    {
      url: `${siteUrl}/he/blog`,
      priority: 0.85,
      changeFrequency: 'weekly',
      alternates: { languages: { 'he': `${siteUrl}/he/blog`, 'en': `${siteUrl}/blog`, 'x-default': `${siteUrl}/he/blog` } },
    },
    {
      url: `${siteUrl}/blog`,
      priority: 0.8,
      changeFrequency: 'weekly',
      alternates: { languages: { 'he': `${siteUrl}/he/blog`, 'en': `${siteUrl}/blog`, 'x-default': `${siteUrl}/he/blog` } },
    },

    // Legal / utility pages (bilingual)
    {
      url: `${siteUrl}/privacy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      alternates: { languages: { 'he': `${siteUrl}/privacy`, 'en': `${siteUrl}/en/privacy` } },
    },
    {
      url: `${siteUrl}/terms`,
      priority: 0.4,
      changeFrequency: 'yearly',
      alternates: { languages: { 'he': `${siteUrl}/terms`, 'en': `${siteUrl}/en/terms` } },
    },
    {
      url: `${siteUrl}/en/privacy`,
      priority: 0.4,
      changeFrequency: 'yearly',
      alternates: { languages: { 'he': `${siteUrl}/privacy`, 'en': `${siteUrl}/en/privacy` } },
    },
    {
      url: `${siteUrl}/en/terms`,
      priority: 0.4,
      changeFrequency: 'yearly',
      alternates: { languages: { 'he': `${siteUrl}/terms`, 'en': `${siteUrl}/en/terms` } },
    },
    { url: `${siteUrl}/accessibility`, priority: 0.4, changeFrequency: 'yearly' },
  ]

  // Dynamic English blog post pages (ASCII slugs — no encoding needed)
  const enBlogPages = getAllBlogSlugs().map(slug => ({
    url: `${siteUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Dynamic Hebrew blog post pages (ASCII slugs — no encoding needed)
  const heBlogPages = getAllBlogSlugsHe().map(slug => ({
    url: `${siteUrl}/he/blog/${slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...enBlogPages, ...heBlogPages].map(page => ({
    ...page,
    lastModified: now,
  }))
}
