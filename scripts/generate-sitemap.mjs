#!/usr/bin/env node
/**
 * Generates public/sitemap.xml as a static file for deployment.
 *
 * This ensures the sitemap is available on any hosting platform,
 * including those that don't route .xml requests through the Next.js server
 * (e.g. CDNs, static hosts, or Vercel edge configurations).
 *
 * Slug lists are extracted from the TypeScript source files using a capture-group
 * regex so this script can run as plain ESM without a TypeScript compiler.
 *
 * This script is run automatically before every build (prebuild in package.json).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prosaas.website';

/** Extract slug values from a TypeScript blog-posts file using a capture group. */
function extractSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    slugs.push(m[1]);
  }
  return slugs;
}

/** Build a set of <xhtml:link> alternate tags for a bilingual page pair. */
function xhtmlAlternates(heUrl, enUrl) {
  return [
    `    <xhtml:link rel="alternate" hreflang="he" href="${heUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${heUrl}"/>`,
  ].join('\n');
}

function urlEntry({ url, priority, changefreq, alternates }) {
  const lines = [
    `  <url>`,
    `    <loc>${url}</loc>`,
    `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ];
  if (alternates) lines.push(alternates);
  lines.push(`  </url>`);
  return lines.join('\n');
}

function generateSitemap() {
  const enSlugs = extractSlugs(path.join(rootDir, 'src/lib/blog-posts.ts'));
  const heSlugs = extractSlugs(path.join(rootDir, 'src/lib/blog-posts-he.ts'));

  const entries = [
    // Homepage (Hebrew default <-> English)
    urlEntry({ url: siteUrl,          priority: '1.0', changefreq: 'weekly', alternates: xhtmlAlternates(siteUrl, `${siteUrl}/en`) }),
    urlEntry({ url: `${siteUrl}/he`,  priority: '0.9', changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he`, `${siteUrl}/en`) }),
    urlEntry({ url: `${siteUrl}/en`,  priority: '0.9', changefreq: 'weekly', alternates: xhtmlAlternates(`${siteUrl}/he`, `${siteUrl}/en`) }),

    // Hebrew feature pages
    urlEntry({ url: `${siteUrl}/he/ai-system`,    priority: '0.9', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/he/smart-crm`,    priority: '0.9', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/he/whatsapp-bot`, priority: '0.9', changefreq: 'monthly' }),

    // About (Hebrew <-> English)
    urlEntry({ url: `${siteUrl}/he/about`, priority: '0.8', changefreq: 'monthly', alternates: xhtmlAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`) }),
    urlEntry({ url: `${siteUrl}/about`,    priority: '0.8', changefreq: 'monthly', alternates: xhtmlAlternates(`${siteUrl}/he/about`, `${siteUrl}/about`) }),

    // English top-level pages
    urlEntry({ url: `${siteUrl}/ai-call-center`,             priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/whatsapp-automation`,         priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-crm`,                     priority: '0.85', changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-answering-service`,        priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-small-business`,       priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-lead-management`,          priority: '0.8',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-moving-companies`,     priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-dental-clinics`,       priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-real-estate`,          priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-law-firms`,            priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-cleaning-companies`,   priority: '0.7',  changefreq: 'monthly' }),
    urlEntry({ url: `${siteUrl}/ai-for-property-management`,  priority: '0.7',  changefreq: 'monthly' }),

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
    ...enSlugs.map(slug => urlEntry({ url: `${siteUrl}/blog/${slug}`,    priority: '0.7',  changefreq: 'monthly' })),

    // Dynamic Hebrew blog posts
    ...heSlugs.map(slug => urlEntry({ url: `${siteUrl}/he/blog/${slug}`, priority: '0.75', changefreq: 'monthly' })),
  ];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join('\n') + '\n' +
    `</urlset>\n`;

  const outputPath = path.join(rootDir, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf-8');

  console.log(`\u2705 sitemap.xml generated (${entries.length} URLs)`);
  console.log(`   \u2192 ${outputPath}`);
}

generateSitemap();
