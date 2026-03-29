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
  const url = BASE_URL;

  const staticEntries: SitemapEntry[] = [
    // Homepage (Hebrew default ↔ English)
    {
      url,
      lastmod: '2026-01-15',
      changefreq: 'weekly',
      priority: 1.0,
      alternates: bilingualAlternates(url, `${url}/en`),
    },
    {
      url: `${url}/en`,
      lastmod: '2026-01-15',
      changefreq: 'weekly',
      priority: 0.9,
      alternates: bilingualAlternates(url, `${url}/en`),
    },

    // Hebrew feature pages
    {
      url: `${url}/he/ai-system`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/he/smart-crm`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    {
      url: `${url}/he/whatsapp-bot`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },

    // About (Hebrew ↔ English)
    {
      url: `${url}/he/about`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/about`, `${url}/about`),
    },
    {
      url: `${url}/about`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/about`, `${url}/about`),
    },

    // English feature pages
    {
      url: `${url}/ai-call-center`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/ai-system`, `${url}/ai-call-center`),
    },
    {
      url: `${url}/whatsapp-automation`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/whatsapp-bot`, `${url}/whatsapp-automation`),
    },
    {
      url: `${url}/ai-crm`,
      lastmod: '2025-10-01',
      changefreq: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/smart-crm`, `${url}/ai-crm`),
    },
    { url: `${url}/ai-answering-service`,       lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-for-small-business`,      lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-lead-management`,         lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.8  },
    { url: `${url}/ai-for-moving-companies`,    lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-dental-clinics`,      lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-real-estate`,         lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-law-firms`,           lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-cleaning-companies`,  lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },
    { url: `${url}/ai-for-property-management`, lastmod: '2025-10-01', changefreq: 'monthly', priority: 0.7  },

    // Blog indexes (Hebrew ↔ English)
    {
      url: `${url}/he/blog`,
      lastmod: '2025-01-20',
      changefreq: 'weekly',
      priority: 0.85,
      alternates: bilingualAlternates(`${url}/he/blog`, `${url}/blog`),
    },
    {
      url: `${url}/blog`,
      lastmod: '2025-01-05',
      changefreq: 'weekly',
      priority: 0.8,
      alternates: bilingualAlternates(`${url}/he/blog`, `${url}/blog`),
    },

    // Legal / utility pages
    {
      url: `${url}/privacy`,
      lastmod: '2025-06-01',
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/terms`,
      lastmod: '2025-06-01',
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/terms`, `${url}/en/terms`),
    },
    {
      url: `${url}/en/privacy`,
      lastmod: '2025-06-01',
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/privacy`, `${url}/en/privacy`),
    },
    {
      url: `${url}/en/terms`,
      lastmod: '2025-06-01',
      changefreq: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${url}/terms`, `${url}/en/terms`),
    },
    { url: `${url}/accessibility`, lastmod: '2025-06-01', changefreq: 'yearly', priority: 0.4 },
  ];

  // Dynamic English blog posts – use each post's actual publish date
  const enBlogEntries: SitemapEntry[] = blogPosts.map(({ slug, date }) => ({
    url: `${url}/blog/${slug}`,
    lastmod: date,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Hebrew blog posts – use each post's actual publish date
  const heBlogEntries: SitemapEntry[] = blogPostsHe.map(({ slug, date }) => ({
    url: `${url}/he/blog/${slug}`,
    lastmod: date,
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
