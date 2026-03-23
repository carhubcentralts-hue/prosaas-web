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
        // Ensure sitemap is served as XML so browsers and crawlers parse it
        // correctly instead of rendering it as HTML (which strips all tags).
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
