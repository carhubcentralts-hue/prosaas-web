#!/usr/bin/env node
/**
 * Validation script for voice demo MP3 files
 * 
 * Checks that all required MP3 files exist and are larger than the minimum size
 * to prevent placeholder/silent files from being deployed.
 * 
 * This script runs automatically before build (prebuild in package.json).
 * Missing files will generate warnings but won't fail the build (showcase site).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All required voice files
const REQUIRED_VOICES = [
  'alloy',
  'ash',
  'ballad',
  'coral',
  'echo',
  'sage',
  'shimmer',
  'verse',
  'marin'
];

// Minimum file size in bytes (30KB = 30720 bytes)
// This helps catch placeholder/silent/tone files
const MIN_FILE_SIZE = 30 * 1024; // 30KB

function validateVoiceFiles() {
  const voicesDir = path.join(__dirname, '..', 'public', 'voices');
  
  console.log('🔍 Validating voice demo MP3 files...');
  console.log(`Directory: ${voicesDir}`);
  console.log('');

  let hasWarnings = false;
  const results = [];

  for (const voice of REQUIRED_VOICES) {
    const filePath = path.join(voicesDir, `${voice}.mp3`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Missing: ${voice}.mp3 - demo will show "not available yet"`);
      results.push({ voice, status: 'missing' });
      hasWarnings = true;
      continue;
    }

    // Check file size
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    if (stats.size < MIN_FILE_SIZE) {
      console.error(`❌ Too small: ${voice}.mp3 (${sizeKB} KB) - must be at least 30 KB (likely silent/placeholder)`);
      results.push({ voice, status: 'too_small', size: stats.size });
      hasWarnings = true;
    } else {
      console.log(`✓ ${voice}.mp3 (${sizeKB} KB)`);
      results.push({ voice, status: 'ok', size: stats.size });
    }
  }

  console.log('');
  
  if (hasWarnings) {
    console.warn('⚠️  Voice demo validation completed with warnings');
    console.warn('');
    console.warn('Some MP3 files are missing or too small (likely placeholders).');
    console.warn('The build will continue, but missing demos will show "not available yet" message.');
    console.warn('');
    console.warn('To generate proper demos, run:');
    console.warn('  OPENAI_API_KEY=sk-... npm run generate-voices');
    console.warn('');
    // Exit with success (0) - don't fail the build
    process.exit(0);
  } else {
    console.log('✅ All voice demo files validated successfully!');
    const totalSizeKB = (results.reduce((sum, r) => sum + r.size, 0) / 1024).toFixed(2);
    console.log(`Total size: ${totalSizeKB} KB`);
    process.exit(0);
  }
}

validateVoiceFiles();
