import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

function filenameToTitle(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '').replace(/[_\-]+/g, ' ').trim();
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
