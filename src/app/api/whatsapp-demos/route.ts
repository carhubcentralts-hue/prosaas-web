import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

function filenameToTitle(filename: string): string {
  // Remove extension (case-insensitive) and clean up the name
  const withoutExt = filename.replace(/\.(mp4|webm|mov)$/i, '');
  // Replace underscores and dashes with spaces, but preserve Hebrew characters
  const cleaned = withoutExt.replace(/[_\-]+/g, ' ').trim();
  return cleaned;
}

export async function GET() {
  try {
    const demosDir = join(process.cwd(), 'public', 'whatsapp-demos');
    const files = await readdir(demosDir);

    const videos = files
      .filter(file => VIDEO_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext)))
      .map((filename) => ({
        id: encodeURIComponent(filename),
        title: filenameToTitle(filename),
        url: `/whatsapp-demos/${encodeURIComponent(filename)}`,
      }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error reading whatsapp demos directory:', error);
    return NextResponse.json({ videos: [] });
  }
}
