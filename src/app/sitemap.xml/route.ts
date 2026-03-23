import { blogPosts } from '@/lib/blog-posts'
import { blogPostsHe } from '@/lib/blog-posts-he'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'

function xhtmlAlternates(heUrl: string, enUrl: string): string {
  return [
    `    <xhtml:link rel="alternate" hreflang="he" href="${heUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${heUrl}"/>`,
  ].join('\n')
}

function urlEntry({
  url,
  priority,
  changefreq,
  alternates,
}: {
  url: string
  priority: string
  changefreq: string
  alternates?: string
}): string {
  const today = new Date().toISOString().split('T')[0]
  const lines = [
    `  <url>`,
    `    <loc>${url}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ]
  if (alternates) lines.push(alternates)
  lines.push(`  </url>`)
  return lines.join('\n')
}

function buildXml(): string {
  const entries = [
    // Homepage (Hebrew default <-> English)
    urlEntry({ url: siteUrl,         priority: '1.0', changefreq: 'weekly', alternates: xhtmlAlternates(siteUrl, `${siteUrl}/en`) }),
    urlEntry({ url: `${siteUrl}/he`, priority: '0.9', changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he`, `${siteUrl}/en`) }),
    urlEntry({ url: `${siteUrl}/en`, priority: '0.9', changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he`, `${siteUrl}/en`) }),

    // Hebrew feature pages
    urlEntry({ url: `${siteUrl}/he/ai-system`,    priority: '0.9', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/he/smart-crm`,    priority: '0.9', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/he/whatsapp-bot`, priority: '0.9', changefreq: 'monthly' }),

    // About (Hebrew <-> English)
    urlEntry({ url: `${siteUrl}/he/about`, priority: '0.8', changefreq: 'monthly', alternates: xhtmlAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`) }),
    urlEntry({ url: `${siteUrl}/about`,    priority: '0.8', changefreq: 'monthly', alternates: xhtmlAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`) }),

    // English top-level pages
    urlEntry({ url: `${siteUrl}/ai-call-center`,            priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/whatsapp-automation`,        priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-crm`,                    priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-answering-service`,       priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-small-business`,      priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-lead-management`,         priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-moving-companies`,    priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-dental-clinics`,      priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-real-estate`,         priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-law-firms`,           priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-cleaning-companies`,  priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-property-management`, priority: '0.7',  changefreq: 'monthly' }),

    // Blog indexes (Hebrew <-> English)
    urlEntry({ url: `${siteUrl}/he/blog`, priority: '0.85', changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he/blog`, `${siteUrl}/blog`) }),
    urlEntry({ url: `${siteUrl}/blog`,    priority: '0.8',  changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he/blog`, `${siteUrl}/blog`) }),

    // Legal / utility pages (bilingual)
    urlEntry({ url: `${siteUrl}/privacy`,    priority: '0.4', changefreq: 'yearly', alternates: xhtmlAlternates(`${siteUrl}/privacy`,  `${siteUrl}/en/privacy`) }),
    urlEntry({ url: `${siteUrl}/terms`,      priority: '0.4', changefreq: 'yearly', alternates: xhtmlAlternates(`${siteUrl}/terms`,    `${siteUrl}/en/terms`)   }),
    urlEntry({ url: `${siteUrl}/en/privacy`, priority: '0.4', changefreq: 'yearly', alternates: xhtmlAlternates(`${siteUrl}/privacy`,  `${siteUrl}/en/privacy`) }),
    urlEntry({ url: `${siteUrl}/en/terms`,   priority: '0.4', changefreq: 'yearly', alternates: xhtmlAlternates(`${siteUrl}/terms`,    `${siteUrl}/en/terms`)   }),
    urlEntry({ url: `${siteUrl}/accessibility`, priority: '0.4', changefreq: 'yearly' }),

    // Dynamic English blog posts
    ...blogPosts.map(({ slug }) =>
      urlEntry({ url: `${siteUrl}/blog/${slug}`,    priority: '0.7',  changefreq: 'monthly' })
    ),

    // Dynamic Hebrew blog posts
    ...blogPostsHe.map(({ slug }) =>
      urlEntry({ url: `${siteUrl}/he/blog/${slug}`, priority: '0.75', changefreq: 'monthly' })
    ),
  ]

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join('\n') + '\n' +
    `</urlset>\n`
  )
}

export const dynamic = 'force-dynamic'

export function GET(): Response {
  try {
    return new Response(buildXml(), {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error('[sitemap] Failed to generate sitemap XML:', err)
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  }
}
