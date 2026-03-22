import { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '../lib/blog-posts'
import { getAllBlogSlugsHe } from '../lib/blog-posts-he'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'
  const lastModified = new Date().toISOString().split('T')[0]

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/he`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/en`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // Hebrew service pages
    { url: `${siteUrl}/he/ai-system`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/he/smart-crm`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/he/whatsapp-bot`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/he/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    // English service pages
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ai-call-center`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/whatsapp-automation`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ai-crm`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ai-answering-service`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ai-for-small-business`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/ai-lead-management`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    // Industry pages
    { url: `${siteUrl}/ai-for-moving-companies`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ai-for-dental-clinics`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ai-for-real-estate`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ai-for-law-firms`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ai-for-cleaning-companies`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ai-for-property-management`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    // Blog index pages
    { url: `${siteUrl}/he/blog`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    // Legal pages
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/en/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/en/terms`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${siteUrl}/accessibility`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ]

  const enBlogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map(slug => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const heBlogPages: MetadataRoute.Sitemap = getAllBlogSlugsHe().map(slug => ({
    url: `${siteUrl}/he/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...enBlogPages, ...heBlogPages]
}
