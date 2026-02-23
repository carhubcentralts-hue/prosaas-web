#!/usr/bin/env node
/**
 * Generates public/sitemap.xml as a static file for deployment.
 *
 * This ensures the sitemap is available on any hosting platform,
 * including those that don't route .xml requests through the Next.js server
 * (e.g. CDNs, static hosts, or Vercel edge configurations).
 *
 * Slug lists are extracted from the TypeScript source files using regex so
 * this script can run as plain ESM without a TypeScript compiler.
 *
 * This script is run automatically before every build (prebuild in package.json).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prosaas.website';

/** Extract slug values from a TypeScript blog-posts file. */
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
  return matches.map(m => m.replace(/^slug:\s*['"]/, '').replace(/['"]$/, ''));
}

function generateSitemap() {
  const now = new Date().toISOString();

  const enSlugs = extractSlugs(path.join(rootDir, 'src/lib/blog-posts.ts'));
  const heSlugs = extractSlugs(path.join(rootDir, 'src/lib/blog-posts-he.ts'));

  const urls = [
    // Hebrew (default) pages – highest priority
    { url: siteUrl,                                        priority: '1.0', changefreq: 'weekly'  },
    { url: `${siteUrl}/he/ai-system`,                      priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/he/smart-crm`,                      priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/he/whatsapp-bot`,                   priority: '0.9', changefreq: 'monthly' },
    { url: `${siteUrl}/he/blog`,                           priority: '0.85', changefreq: 'weekly' },
    { url: `${siteUrl}/he/about`,                          priority: '0.8', changefreq: 'monthly' },

    // English homepage and top-level pages
    { url: `${siteUrl}/en`,                                priority: '0.9', changefreq: 'weekly'  },
    { url: `${siteUrl}/about`,                             priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-call-center`,                    priority: '0.85', changefreq: 'monthly' },
    { url: `${siteUrl}/whatsapp-automation`,               priority: '0.85', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-crm`,                            priority: '0.85', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-answering-service`,              priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-small-business`,             priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-lead-management`,                priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-moving-companies`,           priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-dental-clinics`,             priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-real-estate`,                priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-law-firms`,                  priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-cleaning-companies`,         priority: '0.7', changefreq: 'monthly' },
    { url: `${siteUrl}/ai-for-property-management`,        priority: '0.7', changefreq: 'monthly' },

    // English blog index
    { url: `${siteUrl}/blog`,                              priority: '0.8', changefreq: 'weekly'  },

    // Legal / utility pages (bilingual)
    { url: `${siteUrl}/privacy`,                           priority: '0.4', changefreq: 'yearly'  },
    { url: `${siteUrl}/terms`,                             priority: '0.4', changefreq: 'yearly'  },
    { url: `${siteUrl}/en/privacy`,                        priority: '0.4', changefreq: 'yearly'  },
    { url: `${siteUrl}/en/terms`,                          priority: '0.4', changefreq: 'yearly'  },
    { url: `${siteUrl}/accessibility`,                     priority: '0.4', changefreq: 'yearly'  },

    // Dynamic English blog posts
    ...enSlugs.map(slug => ({
      url: `${siteUrl}/blog/${slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),

    // Dynamic Hebrew blog posts
    ...heSlugs.map(slug => ({
      url: `${siteUrl}/he/blog/${slug}`,
      priority: '0.75',
      changefreq: 'monthly',
    })),
  ];

  const urlEntries = urls
    .map(({ url, priority, changefreq }) =>
      `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join('\n');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urlEntries + '\n' +
    `</urlset>\n`;

  const outputPath = path.join(rootDir, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  console.log(`✅ sitemap.xml generated (${urls.length} URLs)`);
  console.log(`   → ${outputPath}`);
}

generateSitemap();
