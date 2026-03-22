import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www (canonical)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.prosaas.website' }],
        destination: 'https://prosaas.website/:path*',
        permanent: true,
      },
      // Permanent redirect /he to / (Hebrew is the default)
      {
        source: '/he',
        destination: '/',
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
    ]
  },
};

export default nextConfig;
