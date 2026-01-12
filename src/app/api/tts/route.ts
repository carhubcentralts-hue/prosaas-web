import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Whitelist of allowed voices
const ALLOWED_VOICES = [
  'alloy',
  'ash',
  'ballad',
  'coral',
  'echo',
  'sage',
  'shimmer',
  'verse',
  'marin'
] as const;

type AllowedVoice = typeof ALLOWED_VOICES[number];

// Cache configuration
const CACHE_TTL = 60 * 1000; // 60 seconds
const MAX_CACHE_SIZE = 100;

// Simple in-memory cache for TTS results
const ttsCache = new Map<string, { audio: ArrayBuffer; timestamp: number }>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { voice, text, format = 'mp3' } = body;

    // Validate voice
    if (!voice || !ALLOWED_VOICES.includes(voice as AllowedVoice)) {
      return NextResponse.json(
        { error: 'קול לא תקין. אנא בחר קול מהרשימה.' },
        { status: 400 }
      );
    }

    // Validate text
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'טקסט חסר' },
        { status: 400 }
      );
    }

    if (text.length > 400) {
      return NextResponse.json(
        { error: 'הטקסט ארוך מדי. מקסימום 400 תווים.' },
        { status: 400 }
      );
    }

    // Validate format
    if (format && format !== 'mp3') {
      return NextResponse.json(
        { error: 'פורמט לא נתמך. רק MP3 נתמך.' },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Not configured - TTS service requires OPENAI_API_KEY' },
        { status: 501 }
      );
    }

    // Create cache key
    const cacheKey = `${voice}:${text}`;
    
    // Check cache
    const cached = ttsCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return new NextResponse(cached.audio, {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=60',
        },
      });
    }

    // Call OpenAI TTS API
    const openai = new OpenAI({ apiKey });
    
    const response = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice as AllowedVoice,
      input: text,
      response_format: format as 'mp3',
    });

    // Convert response to buffer
    const arrayBuffer = await response.arrayBuffer();

    // Cache the result
    ttsCache.set(cacheKey, { audio: arrayBuffer, timestamp: Date.now() });

    // Clean old cache entries (basic cleanup)
    if (ttsCache.size > MAX_CACHE_SIZE) {
      const now = Date.now();
      for (const [key, value] of ttsCache.entries()) {
        if (now - value.timestamp > CACHE_TTL) {
          ttsCache.delete(key);
        }
      }
    }

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=60',
      },
    });

  } catch (error) {
    console.error('TTS API error:', error);
    return NextResponse.json(
      { error: 'שגיאה ביצירת הדוגמה הקולית' },
      { status: 500 }
    );
  }
}
