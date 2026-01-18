import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const appDir = path.join(projectRoot, 'src', 'app');

// Create a simple blue icon with a phone symbol
async function generateIcon(size, outputPath) {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#3B82F6"/>
      <g transform="translate(${size * 0.25}, ${size * 0.25})">
        <circle cx="${size * 0.25}" cy="${size * 0.25}" r="${size * 0.18}" fill="white" opacity="0.3"/>
        <path d="M ${size * 0.3} ${size * 0.15} C ${size * 0.3} ${size * 0.117} ${size * 0.283} ${size * 0.1} ${size * 0.25} ${size * 0.1} H ${size * 0.15} C ${size * 0.117} ${size * 0.1} ${size * 0.1} ${size * 0.117} ${size * 0.1} ${size * 0.15} V ${size * 0.3} C ${size * 0.1} ${size * 0.333} ${size * 0.117} ${size * 0.35} ${size * 0.15} ${size * 0.35} H ${size * 0.175} L ${size * 0.2} ${size * 0.4} L ${size * 0.225} ${size * 0.35} H ${size * 0.25} C ${size * 0.283} ${size * 0.35} ${size * 0.3} ${size * 0.333} ${size * 0.3} ${size * 0.3} V ${size * 0.15} Z" fill="white"/>
        <path d="M ${size * 0.15} ${size * 0.2} C ${size * 0.15} ${size * 0.194} ${size * 0.154} ${size * 0.19} ${size * 0.16} ${size * 0.19} H ${size * 0.24} C ${size * 0.246} ${size * 0.19} ${size * 0.25} ${size * 0.194} ${size * 0.25} ${size * 0.2} C ${size * 0.25} ${size * 0.206} ${size * 0.246} ${size * 0.21} ${size * 0.24} ${size * 0.21} H ${size * 0.16} C ${size * 0.154} ${size * 0.21} ${size * 0.15} ${size * 0.206} ${size * 0.15} ${size * 0.2} Z" fill="#3B82F6"/>
        <path d="M ${size * 0.15} ${size * 0.25} C ${size * 0.15} ${size * 0.244} ${size * 0.154} ${size * 0.24} ${size * 0.16} ${size * 0.24} H ${size * 0.22} C ${size * 0.226} ${size * 0.24} ${size * 0.23} ${size * 0.244} ${size * 0.23} ${size * 0.25} C ${size * 0.23} ${size * 0.256} ${size * 0.226} ${size * 0.26} ${size * 0.22} ${size * 0.26} H ${size * 0.16} C ${size * 0.154} ${size * 0.26} ${size * 0.15} ${size * 0.256} ${size * 0.15} ${size * 0.25} Z" fill="#3B82F6"/>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(outputPath);
  
  console.log(`Generated ${path.basename(outputPath)} (${size}x${size})`);
}

async function generateFavicon() {
  const sizes = [16, 32];
  const icoPath = path.join(appDir, 'favicon.ico');
  
  // Generate a 32x32 PNG first, then convert to ICO
  const tempPng = path.join(appDir, 'temp-favicon-32.png');
  await generateIcon(32, tempPng);
  
  // For now, just copy the 32x32 as favicon.ico (ICO format is complex)
  // In production, you'd use a proper ICO converter
  console.log(`Note: Using PNG as favicon.ico. For better results, convert to proper ICO format.`);
  
  fs.unlinkSync(tempPng);
}

async function main() {
  try {
    // Generate various icon sizes
    // icon.png files in Next.js app directory are automatically used
    await generateIcon(180, path.join(appDir, 'apple-icon.png'));
    await generateIcon(192, path.join(appDir, 'icon-192.png'));
    await generateIcon(512, path.join(appDir, 'icon-512.png'));
    
    // Generate opengraph image (1200x630 is standard)
    const ogSvg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#3B82F6"/>
        <g transform="translate(400, 200)">
          <circle cx="100" cy="100" r="72" fill="white" opacity="0.3"/>
          <path d="M 120 60 C 120 46.8 109.2 40 96 40 H 72 C 58.8 40 48 46.8 48 60 V 120 C 48 133.2 58.8 144 72 144 H 80 L 88 160 L 96 144 H 104 C 117.2 144 128 133.2 128 120 V 60 Z" fill="white"/>
          <path d="M 64 88 C 64 85.8 65.8 84 68 84 H 108 C 110.2 84 112 85.8 112 88 C 112 90.2 110.2 92 108 92 H 68 C 65.8 92 64 90.2 64 88 Z" fill="#3B82F6"/>
          <path d="M 64 104 C 64 101.8 65.8 100 68 100 H 96 C 98.2 100 100 101.8 100 104 C 100 106.2 98.2 108 96 108 H 68 C 65.8 108 64 106.2 64 104 Z" fill="#3B82F6"/>
        </g>
        <text x="600" y="380" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="white" text-anchor="middle">ProSaaS</text>
      </svg>
    `;
    
    await sharp(Buffer.from(ogSvg))
      .resize(1200, 630)
      .png()
      .toFile(path.join(appDir, 'opengraph-image.png'));
    console.log('Generated opengraph-image.png (1200x630)');
    
    console.log('\nAll icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

main();
