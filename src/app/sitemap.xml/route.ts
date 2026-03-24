import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog-posts';
import { blogPostsHe } from '@/lib/blog-posts-he';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website';

type Alternates = Record<string, string>;

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternates?: Alternates;
}

function bilingualAlternates(he: string, en: string): Alternates {
  return { he, en, 'x-default': he };
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildXml(entries: SitemapEntry[]): string {
  const urlElements = entries
    .map((entry) => {
      const altLinks = entry.alternates
        ? Object.entries(entry.alternates)
            .map(
              ([lang, href]) =>
                `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(href)}"/>`
            )
            .join('\n')
        : '';
      const lines = [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority.toFixed(2)}</priority>`,
        altLinks,
        '  </url>',
      ];
      return lines.filter(Boolean).join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlElements}
</urlset>`;
}

export async function GET(): Promise<NextResponse> {
  const today = new Date().toISOString().split('T')[0];
  const url = BASE_URL;

  const staticEntries: SitemapEntry[] = [
    // Homepage (Hebrew default ↔ English)
    {
      url,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
      alternates: bilingualAlternates(url, `${url}/en`),
    },
    {
      url: `${url}/en`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9,
      alternates: bilingualAlternates(url, `${url}/en`),
    },

    // Hebrew feature pages
    {
      url: `${url}/he/ai-system`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/he/smart-crm`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    {
      url: `${url}/he/whatsapp-bot`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },

    // About (Hebrew ↔ English)
    {
      url: `${url}/he/about`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/about`, `${url}/about`),
    },
    {
      url: `${url}/about`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/about`, `${url}/about`),
    },

    // English feature pages
    {
      url: `${url}/ai-call-center`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/whatsapp-automation`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },
    {
      url: `${url}/ai-crm`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    { url: `${url}/ai-answering-service`,       lastmod: today, changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-for-small-business`,      lastmod: today, changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-lead-management`,         lastmod: today, changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-for-moving-companies`,    lastmod: today, changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-dental-clinics`,      lastmod: today, changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-real-estate`,         lastmod: today, changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-law-firms`,           lastmod: today, changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-cleaning-companies`,  lastmod: today, changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-property-management`, lastmod: today, changefreq: 'monthly', priority: 0.7  },

    // Blog indexes (Hebrew ↔ English)
    {
      url: `${url}/he/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/blog`, `${url}/blog`),
    },
    {
      url: `${url}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/blog`, `${url}/blog`),
    },

    // Legal / utility pages
    {
      url: `${url}/privacy`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/terms`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/terms`, `${url}/en/terms`),
    },
    {
      url: `${url}/en/privacy`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/en/terms`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/terms`, `${url}/en/terms`),
    },
    { url: `${url}/accessibility`, lastmod: today, changefreq: 'yearly', priority: 0.4 },
  ];

  // Dynamic English blog posts
  const enBlogEntries: SitemapEntry[] = blogPosts.map(({ slug }) => ({
    url: `${url}/blog/${slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Hebrew blog posts
  const heBlogEntries: SitemapEntry[] = blogPostsHe.map(({ slug }) => ({
    url: `${url}/he/blog/${slug}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.75,
  }));

  const xml = buildXml([...staticEntries, ...enBlogEntries, ...heBlogEntries]);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
