# Voice Demo Files

This folder contains the demo audio files for each voice with Hebrew speech.

## Current Files ✅

All voice MP3 files with Hebrew text: "שלום, אני העוזר הדיגיטלי של ProSaaS. אני כאן כדי לעזור לכם בכל שאלה."

- `alloy.mp3` - Alloy voice demo
- `ash.mp3` - Ash voice demo
- `ballad.mp3` - Ballad voice demo
- `coral.mp3` - Coral voice demo
- `echo.mp3` - Echo voice demo (default voice)
- `sage.mp3` - Sage voice demo
- `shimmer.mp3` - Shimmer voice demo
- `verse.mp3` - Verse voice demo
- `marin.mp3` - Marin voice demo

## How It Works

1. User clicks "שמע דוגמה" in the Voice Demo section
2. App loads `/voices/{voice-name}.mp3?v=3` directly from this folder
3. If file exists → plays the audio
4. If file missing → shows "דמו בהכנה" (Demo in preparation)

**No API calls needed!** Everything works with static MP3 files.

## Generating Voice Demos

To generate all voice demos with Hebrew speech using OpenAI TTS:

```bash
# Set your OpenAI API key
export OPENAI_API_KEY=sk-your-api-key-here

# Run the generation script
npm run generate-voices
```

This will create all 9 MP3 files with the standard Hebrew demo text.

## Validation

Before each build, the `scripts/validate-voice-mp3s.mjs` script automatically:
- Checks that all 9 required MP3 files exist
- Verifies each file is at least 30KB (prevents placeholder/silent files)
- Fails the build if validation doesn't pass

This ensures only proper voice demos are deployed to production.

## Manual Replacement

You can also manually replace MP3 files:

1. Create your voice sample (2-6 seconds of Hebrew speech)
2. Save as MP3 format
3. Name it exactly: `alloy.mp3`, `echo.mp3`, etc.
4. Place in this `public/voices/` directory
5. Ensure file size is > 30KB
6. The demo will automatically use the new files

**Important:** After replacing files, update the cache version in `VoiceDemo.tsx` (currently `?v=3`) to ensure browsers fetch the new files.
