import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { blogPostsHe } from '@/lib/blog-posts-he';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website';

type SitemapEntry = MetadataRoute.Sitemap[number];

function bilingualAlternates(heUrl: string, enUrl: string) {
  return {
    languages: {
      he: heUrl,
      en: enUrl,
      'x-default': heUrl,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];

  const staticEntries: SitemapEntry[] = [
    // Homepage (Hebrew default ↔ English)
    {
      url: siteUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: bilingualAlternates(siteUrl, `${siteUrl}/en`),
    },
    {
      url: `${siteUrl}/en`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: bilingualAlternates(`${siteUrl}/he`, `${siteUrl}/en`),
    },

    // Hebrew feature pages (with English hreflang alternates)
    {
      url: `${siteUrl}/he/ai-system`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${siteUrl}/he/ai-system`, `${siteUrl}/ai-call-center`),
    },
    {
      url: `${siteUrl}/he/smart-crm`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${siteUrl}/he/smart-crm`, `${siteUrl}/ai-crm`),
    },
    {
      url: `${siteUrl}/he/whatsapp-bot`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: bilingualAlternates(`${siteUrl}/he/whatsapp-bot`, `${siteUrl}/whatsapp-automation`),
    },

    // About (Hebrew ↔ English)
    {
      url: `${siteUrl}/he/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: bilingualAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`),
    },

    // English feature pages (with Hebrew hreflang alternates where applicable)
    {
      url: `${siteUrl}/ai-call-center`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${siteUrl}/he/ai-system`, `${siteUrl}/ai-call-center`),
    },
    {
      url: `${siteUrl}/whatsapp-automation`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${siteUrl}/he/whatsapp-bot`, `${siteUrl}/whatsapp-automation`),
    },
    {
      url: `${siteUrl}/ai-crm`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: bilingualAlternates(`${siteUrl}/he/smart-crm`, `${siteUrl}/ai-crm`),
    },
    { url: `${siteUrl}/ai-answering-service`,       lastModified: today, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${siteUrl}/ai-for-small-business`,      lastModified: today, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${siteUrl}/ai-lead-management`,         lastModified: today, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${siteUrl}/ai-for-moving-companies`,    lastModified: today, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${siteUrl}/ai-for-dental-clinics`,      lastModified: today, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${siteUrl}/ai-for-real-estate`,         lastModified: today, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${siteUrl}/ai-for-law-firms`,           lastModified: today, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${siteUrl}/ai-for-cleaning-companies`,  lastModified: today, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${siteUrl}/ai-for-property-management`, lastModified: today, changeFrequency: 'monthly', priority: 0.7  },

    // Blog indexes (Hebrew ↔ English)
    {
      url: `${siteUrl}/he/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: bilingualAlternates(`${siteUrl}/he/blog`, `${siteUrl}/blog`),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: bilingualAlternates(`${siteUrl}/he/blog`, `${siteUrl}/blog`),
    },

    // Legal / utility pages (bilingual)
    {
      url: `${siteUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${siteUrl}/privacy`, `${siteUrl}/en/privacy`),
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${siteUrl}/terms`, `${siteUrl}/en/terms`),
    },
    {
      url: `${siteUrl}/en/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${siteUrl}/privacy`, `${siteUrl}/en/privacy`),
    },
    {
      url: `${siteUrl}/en/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: bilingualAlternates(`${siteUrl}/terms`, `${siteUrl}/en/terms`),
    },
    { url: `${siteUrl}/accessibility`, lastModified: today, changeFrequency: 'yearly', priority: 0.4 },
  ];

  // Dynamic English blog posts
  const enBlogEntries: SitemapEntry[] = blogPosts.map(({ slug }) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Hebrew blog posts
  const heBlogEntries: SitemapEntry[] = blogPostsHe.map(({ slug }) => ({
    url: `${siteUrl}/he/blog/${slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticEntries, ...enBlogEntries, ...heBlogEntries];
}
