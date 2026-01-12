#!/usr/bin/env node
/**
 * Validation script for call demo MP3 files
 * 
 * Checks that all required MP3 files exist and are larger than the minimum size
 * to prevent placeholder/silent files from being deployed.
 * 
 * This script runs automatically before build (prebuild in package.json).
 * Missing files will generate warnings but won't fail the build.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Minimum file size in bytes (30KB = 30720 bytes)
// This helps catch placeholder/silent/tone files
const MIN_FILE_SIZE = 30 * 1024; // 30KB

function validateCallFiles() {
  const callsDir = path.join(__dirname, '..', 'public', 'calls');
  const contentPath = path.join(__dirname, '..', 'content', 'site.he.json');
  
  console.log('🔍 Validating call demo MP3 files...');
  console.log(`Directory: ${callsDir}`);
  console.log('');

  // Read the content file to get the list of expected calls
  let expectedCalls = [];
  try {
    const contentData = fs.readFileSync(contentPath, 'utf-8');
    const content = JSON.parse(contentData);
    expectedCalls = content.callDemos?.calls || [];
  } catch (error) {
    console.warn('⚠️  Could not read content/site.he.json - skipping validation');
    process.exit(0);
  }

  if (expectedCalls.length === 0) {
    console.log('ℹ️  No call demos defined in content/site.he.json - nothing to validate');
    process.exit(0);
  }

  let hasWarnings = false;
  const results = [];

  for (const call of expectedCalls) {
    const fileName = `${call.id}.mp3`;
    const filePath = path.join(callsDir, fileName);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Missing: ${fileName} (${call.title}) - will show "not available yet"`);
      results.push({ call: call.id, status: 'missing' });
      hasWarnings = true;
      continue;
    }

    // Check file size
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    if (stats.size < MIN_FILE_SIZE) {
      console.warn(`⚠️  Too small: ${fileName} (${sizeKB} KB) - must be at least 30 KB (likely silent/placeholder)`);
      results.push({ call: call.id, status: 'too_small', size: stats.size });
      hasWarnings = true;
    } else {
      console.log(`✓ ${fileName} (${sizeKB} KB) - ${call.title}`);
      results.push({ call: call.id, status: 'ok', size: stats.size });
    }
  }

  console.log('');
  
  if (hasWarnings) {
    console.warn('⚠️  Call demo validation completed with warnings');
    console.warn('');
    console.warn('Some MP3 files are missing or too small (likely placeholders).');
    console.warn('The build will continue, but missing demos will show "not available yet" message.');
    console.warn('');
    console.warn('To add call demos:');
    console.warn('  1. Place MP3 files in public/calls/ with names matching the id field (e.g., call-1.mp3)');
    console.warn('  2. Ensure files are at least 30KB in size');
    console.warn('  3. Update content/site.he.json if needed');
    console.warn('');
    // Exit with success (0) - don't fail the build
    process.exit(0);
  } else {
    console.log('✅ All call demo files validated successfully!');
    const totalSizeKB = (results.reduce((sum, r) => sum + (r.size || 0), 0) / 1024).toFixed(2);
    console.log(`Total size: ${totalSizeKB} KB`);
    process.exit(0);
  }
}

validateCallFiles();
