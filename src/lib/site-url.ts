/**
 * Canonical base URL for the site, with any trailing slash stripped.
 * Set NEXT_PUBLIC_SITE_URL in the Vercel (or .env.local) environment.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.website'
).replace(/\/$/, '')
