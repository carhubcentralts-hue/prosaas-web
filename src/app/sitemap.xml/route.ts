import { blogPosts } from '@/lib/blog-posts'
import { blogPostsHe } from '@/lib/blog-posts-he'
import { siteUrl as BASE_URL } from '@/lib/site-url'

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
  alternates?: { he: string; en: string; xDefault: string }
}

function bilingual(he: string, en: string): SitemapEntry['alternates'] {
  return { he, en, xDefault: he }
}

function buildXml(entries: SitemapEntry[]): string {
  const urlTags = entries
    .map((entry) => {
      const alternateLinks = entry.alternates
        ? [
            `    <xhtml:link rel="alternate" hreflang="he" href="${entry.alternates.he}"/>`,
            `    <xhtml:link rel="alternate" hreflang="en" href="${entry.alternates.en}"/>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.alternates.xDefault}"/>`,
          ].join('\n')
        : ''

      return [
        '  <url>',
        `    <loc>${entry.url}</loc>`,
        `    <lastmod>${entry.lastModified}</lastmod>`,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        ...(alternateLinks ? [alternateLinks] : []),
        '  </url>',
      ].join('\n')
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlTags,
    '</urlset>',
  ].join('\n')
}

export async function GET() {
  const u = BASE_URL

  const staticEntries: SitemapEntry[] = [
    // Homepage (Hebrew default ↔ English)
    { url: u,          lastModified: '2026-01-15', changeFrequency: 'weekly',  priority: 1.0, alternates: bilingual(u, `${u}/en`) },
    { url: `${u}/en`,  lastModified: '2026-01-15', changeFrequency: 'weekly',  priority: 0.9, alternates: bilingual(u, `${u}/en`) },

    // Hebrew feature pages
    { url: `${u}/he/ai-system`,   lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.9, alternates: bilingual(`${u}/he/ai-system`,   `${u}/ai-call-center`) },
    { url: `${u}/he/smart-crm`,   lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.9, alternates: bilingual(`${u}/he/smart-crm`,   `${u}/ai-crm`) },
    { url: `${u}/he/whatsapp-bot`,lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.9, alternates: bilingual(`${u}/he/whatsapp-bot`, `${u}/whatsapp-automation`) },

    // New Hebrew SEO pages
    { url: `${u}/he/voice-bot`,                        lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9, alternates: bilingual(`${u}/he/voice-bot`, `${u}/ai-call-center`) },
    { url: `${u}/he/ai-sales-agent`,                   lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${u}/he/customer-service-bot`,             lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${u}/he/whatsapp-bot-for-moving-companies`,lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${u}/he/whatsapp-bot-for-clinics`,         lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${u}/he/voice-bot-for-small-business`,     lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.8 },

    // About (Hebrew ↔ English)
    { url: `${u}/he/about`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8, alternates: bilingual(`${u}/he/about`, `${u}/about`) },
    { url: `${u}/about`,    lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8, alternates: bilingual(`${u}/he/about`, `${u}/about`) },

    // English feature pages
    { url: `${u}/ai-call-center`,        lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.85, alternates: bilingual(`${u}/he/ai-system`,    `${u}/ai-call-center`) },
    { url: `${u}/whatsapp-automation`,   lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.85, alternates: bilingual(`${u}/he/whatsapp-bot`, `${u}/whatsapp-automation`) },
    { url: `${u}/ai-crm`,                lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.85, alternates: bilingual(`${u}/he/smart-crm`,    `${u}/ai-crm`) },
    { url: `${u}/ai-answering-service`,       lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${u}/ai-for-small-business`,      lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${u}/ai-lead-management`,         lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${u}/ai-for-moving-companies`,    lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${u}/ai-for-dental-clinics`,      lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${u}/ai-for-real-estate`,         lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${u}/ai-for-law-firms`,           lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${u}/ai-for-cleaning-companies`,  lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${u}/ai-for-property-management`, lastModified: '2026-01-01', changeFrequency: 'monthly', priority: 0.7 },

    // Blog indexes (Hebrew ↔ English)
    { url: `${u}/he/blog`, lastModified: '2026-02-01', changeFrequency: 'weekly', priority: 0.85, alternates: bilingual(`${u}/he/blog`, `${u}/blog`) },
    { url: `${u}/blog`,    lastModified: '2026-02-01', changeFrequency: 'weekly', priority: 0.8,  alternates: bilingual(`${u}/he/blog`, `${u}/blog`) },

    // Legal / utility pages
    { url: `${u}/privacy`,     lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4, alternates: bilingual(`${u}/privacy`,    `${u}/en/privacy`) },
    { url: `${u}/terms`,       lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4, alternates: bilingual(`${u}/terms`,      `${u}/en/terms`) },
    { url: `${u}/en/privacy`,  lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4, alternates: bilingual(`${u}/privacy`,    `${u}/en/privacy`) },
    { url: `${u}/en/terms`,    lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4, alternates: bilingual(`${u}/terms`,      `${u}/en/terms`) },
    { url: `${u}/accessibility`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.4 },
  ]

  const enBlogEntries: SitemapEntry[] = blogPosts.map(({ slug, date }) => ({
    url: `${u}/blog/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const heBlogEntries: SitemapEntry[] = blogPostsHe.map(({ slug, date }) => ({
    url: `${u}/he/blog/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const xml = buildXml([...staticEntries, ...enBlogEntries, ...heBlogEntries])

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
