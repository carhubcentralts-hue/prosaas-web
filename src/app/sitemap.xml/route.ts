import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

/**
 * Serves sitemap.xml with the correct Content-Type header.
 *
 * Static files in `public/` are delivered directly by Vercel's CDN edge,
 * which means `headers()` in next.config.ts never applies to them.
 * This Route Handler intercepts /sitemap.xml before the CDN can serve the
 * static file and responds with `application/xml` so browsers and crawlers
 * parse it as XML instead of plain text.
 */
export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');

  try {
    const xml = await fs.readFile(filePath, 'utf-8');

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return new NextResponse('Sitemap not found', { status: 404 });
  }
}
