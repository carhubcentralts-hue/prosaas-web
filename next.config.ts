import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // NOTE: www→non-www redirect is intentionally NOT defined here.
    // Defining it in next.config.ts conflicts with Vercel's platform-level
    // domain redirect and creates an infinite redirect loop (ERR_TOO_MANY_REDIRECTS).
    // Configure www→non-www (or vice-versa) exclusively in the Vercel dashboard
    // under Project → Settings → Domains, not in application code.
    //
    // NOTE: /he→/ redirect is handled by src/app/he/page.tsx via permanentRedirect('/').
    return []
  },
  async headers() {
    return [
      {
        // Ensure sitemap.xml is always served as XML.
        // Next.js MetadataRoute and route handlers set this too, but Vercel's
        // CDN layer can override it. Declaring it here forces the correct
        // Content-Type at the edge so browsers and crawlers parse it as XML.
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
      {
        source: '/:path((?!api|_next/static|_next/image|favicon\\.ico).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
