#!/usr/bin/env node
/**
 * Script to generate Hebrew voice demo MP3 files using OpenAI TTS API
 * 
 * This script creates all 9 voice demo files with the same Hebrew text.
 * Run with: OPENAI_API_KEY=sk-... node scripts/generate-voice-demos.mjs
 * Or create a .env file with OPENAI_API_KEY=sk-...
 */

import 'dotenv/config';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hebrew text for all demos
const DEMO_TEXT = 'היי, זאת הנציגה הדיגיטלית של פרו־סאס. תרצו אותי גם אצלכם בעסק?';

// All available voices
const VOICES = [
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

async function generateVoiceDemo(openai, voice, outputDir) {
  console.log(`Generating ${voice}.mp3...`);
  
  try {
    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice,
      input: DEMO_TEXT,
      response_format: 'mp3',
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    const outputPath = path.join(outputDir, `${voice}.mp3`);
    fs.writeFileSync(outputPath, buffer);
    
    const sizeKB = (buffer.length / 1024).toFixed(2);
    console.log(`✓ ${voice}.mp3 created (${sizeKB} KB)`);
    
    return { voice, success: true, size: buffer.length };
  } catch (error) {
    console.error(`✗ Failed to generate ${voice}.mp3:`, error.message);
    return { voice, success: false, error: error.message };
  }
}

async function main() {
  // Check for API key
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set');
    console.error('Usage: OPENAI_API_KEY=sk-... node scripts/generate-voice-demos.mjs');
    console.error('Or create a .env file with: OPENAI_API_KEY=sk-...');
    process.exit(1);
  }

  // Initialize OpenAI client
  const openai = new OpenAI({ apiKey });

  // Determine output directory
  const outputDir = path.join(__dirname, '..', 'public', 'voices');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🎤 Generating voice demo MP3 files...');
  console.log(`Text: "${DEMO_TEXT}"`);
  console.log(`Output: ${outputDir}`);
  console.log('');

  // Generate all voices
  const results = [];
  for (const voice of VOICES) {
    const result = await generateVoiceDemo(openai, voice, outputDir);
    results.push(result);
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('');
  console.log('📊 Summary:');
  console.log('─'.repeat(50));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✓ Successful: ${successful.length}/${VOICES.length}`);
  if (failed.length > 0) {
    console.log(`✗ Failed: ${failed.length}`);
    failed.forEach(f => console.log(`  - ${f.voice}: ${f.error}`));
  }
  
  if (successful.length === VOICES.length) {
    console.log('');
    console.log('🎉 All voice demos generated successfully!');
    process.exit(0);
  } else {
    console.log('');
    console.log('⚠️ Some voice demos failed to generate');
    process.exit(1);
  }
}

main();
