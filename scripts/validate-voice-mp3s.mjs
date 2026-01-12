#!/usr/bin/env node
/**
 * Validation script for voice demo MP3 files
 * 
 * Checks that all required MP3 files exist and are larger than the minimum size
 * to prevent placeholder/silent files from being deployed.
 * 
 * This script is run automatically before build (prebuild in package.json)
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

  let hasErrors = false;
  const results = [];

  for (const voice of REQUIRED_VOICES) {
    const filePath = path.join(voicesDir, `${voice}.mp3`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Missing: ${voice}.mp3`);
      results.push({ voice, status: 'missing' });
      hasErrors = true;
      continue;
    }

    // Check file size
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    if (stats.size < MIN_FILE_SIZE) {
      console.error(`❌ Too small: ${voice}.mp3 (${sizeKB} KB) - must be at least 30 KB`);
      results.push({ voice, status: 'too_small', size: stats.size });
      hasErrors = true;
    } else {
      console.log(`✓ ${voice}.mp3 (${sizeKB} KB)`);
      results.push({ voice, status: 'ok', size: stats.size });
    }
  }

  console.log('');
  
  if (hasErrors) {
    console.error('❌ Voice demo validation FAILED');
    console.error('');
    console.error('Some MP3 files are missing or too small (likely placeholders).');
    console.error('Please generate proper voice demos before building.');
    console.error('');
    console.error('To generate demos, run:');
    console.error('  OPENAI_API_KEY=sk-... node scripts/generate-voice-demos.mjs');
    console.error('');
    process.exit(1);
  } else {
    console.log('✅ All voice demo files validated successfully!');
    const totalSizeKB = (results.reduce((sum, r) => sum + r.size, 0) / 1024).toFixed(2);
    console.log(`Total size: ${totalSizeKB} KB`);
    process.exit(0);
  }
}

validateVoiceFiles();
