# Voice Demo Generation Guide

## 🎯 Objective

Replace the current MP3 demo files with actual Hebrew speech recordings saying:
**"שלום, אני העוזר הדיגיטלי של ProSaaS. אני כאן כדי לעזור לכם בכל שאלה."**

## ✅ Infrastructure Complete

The following has been implemented:

1. **Generation Script** (`scripts/generate-voice-demos.mjs`)
   - Automatically generates all 9 voice demos using OpenAI TTS
   - Creates consistent Hebrew speech across all voices
   - Requires `OPENAI_API_KEY` environment variable

2. **Validation Script** (`scripts/validate-voice-mp3s.mjs`)
   - Checks all 9 required MP3 files exist
   - Ensures each file is at least 30KB (prevents silent/placeholder files)
   - Runs automatically before every build (`prebuild` script)
   - **Build will fail** if validation doesn't pass

3. **Cache Busting**
   - Updated from `?v=2` to `?v=3` in `VoiceDemo.tsx`
   - Ensures browsers fetch new MP3 files after replacement

4. **Documentation**
   - Updated README.md with generation instructions
   - Updated public/voices/README.md with detailed process

## 🚀 How to Generate Voice Demos

### Option 1: Using OpenAI TTS API (Recommended)

```bash
# 1. Get your OpenAI API key from https://platform.openai.com/api-keys

# 2. Set the environment variable (choose one method):

# Method A: Using .env file (recommended)
cp .env.example .env
# Edit .env and add your key: OPENAI_API_KEY=sk-your-api-key-here

# Method B: Export to shell
export OPENAI_API_KEY=sk-your-api-key-here

# 3. Run the generation script
cd /home/runner/work/prosaas-web/prosaas-web
npm run generate-voices

# 4. Verify the files were generated
npm run prebuild
```

**Cost:** ~$0.015 per voice = ~$0.14 total for all 9 voices (using tts-1 model)

### Option 2: Using Online TTS Services

If you don't have an OpenAI API key, you can use free online services:

1. **Google Cloud Text-to-Speech** (Free tier: 1M characters/month)
   - Go to https://cloud.google.com/text-to-speech
   - Select Hebrew language
   - Paste the text: "שלום, אני העוזר הדיגיטלי של ProSaaS. אני כאן כדי לעזור לכם בכל שאלה."
   - Download as MP3
   - Rename to `alloy.mp3`, `echo.mp3`, etc.

2. **Azure Cognitive Services** (Free tier: 5M characters/month)
   - Go to https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/
   - Similar process as Google

3. **Other Options**
   - Fiverr voice actors (for unique, professional recordings)
   - Record yourself in Hebrew
   - Use local TTS software

### Option 3: Manual Upload

If you already have MP3 files:

1. Ensure each file is:
   - MP3 format
   - At least 30KB in size (typically 50-100KB for 3-6 seconds)
   - Contains Hebrew speech (not tones/silence)
   
2. Name them exactly:
   - `alloy.mp3`
   - `ash.mp3`
   - `ballad.mp3`
   - `coral.mp3`
   - `echo.mp3`
   - `sage.mp3`
   - `shimmer.mp3`
   - `verse.mp3`
   - `marin.mp3`

3. Place in `/home/runner/work/prosaas-web/prosaas-web/public/voices/`

4. Validate:
   ```bash
   npm run prebuild
   ```

## 🧪 Testing After Generation

1. **Local Testing:**
   ```bash
   npm run dev
   # Open http://localhost:3000
   # Navigate to Voice Demo section
   # Test each voice by clicking "שמע דוגמה"
   ```

2. **Verify in Browser:**
   - Open DevTools → Network tab
   - Filter by "mp3"
   - Check file sizes (should be 50-100KB each)
   - Check response (should be 200 OK)
   - Listen to each voice - should hear Hebrew speech, not tones/silence

3. **Build Test:**
   ```bash
   npm run build
   # Should pass validation automatically
   ```

## ⚠️ Important Notes

- **All 9 voices must be present** - build will fail if any are missing
- **Minimum file size: 30KB** - prevents silent/placeholder files
- **Cache busting is v=3** - if you replace files again, increment to v=4
- **Validation runs before every build** - ensures quality in production

## 🔧 Troubleshooting

### Build fails with "Too small" error
- Your MP3 file is under 30KB
- Likely a placeholder/silent file
- Re-generate or use longer audio sample

### Build fails with "Missing" error
- One or more MP3 files are not in `public/voices/`
- Check file names match exactly (lowercase)
- Ensure all 9 files are present

### Hear tones/beeps instead of speech
- Current files may still be placeholders
- Re-generate using the scripts above
- Verify file content before deployment

## 📝 Next Steps

1. Choose your generation method (Option 1, 2, or 3 above)
2. Generate/obtain all 9 MP3 files
3. Run `npm run prebuild` to validate
4. Test locally with `npm run dev`
5. Commit and push changes
6. Deploy to production

---

**Status:** Infrastructure ready, awaiting MP3 file generation with actual Hebrew speech.
