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
    return [
      // Redirect old Hebrew URL (404 in GSC) to the current route
      {
        source: '/he/%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA-ai-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D',
        destination: '/he/ai-system',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path((?!api|_next/static|_next/image|favicon\\.ico).*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      // Prevent Google from indexing the PWA manifest file
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
