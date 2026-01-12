# Voice Demo Files

This folder contains the demo audio files for each voice.

## Current Files ✅

All voice MP3 files are now included (currently placeholder silent samples):

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
2. App loads `/voices/{voice-name}.mp3` directly from this folder
3. If file exists → plays the audio
4. If file missing → shows "דמו בהכנה" (Demo in preparation)

**No API calls needed!** Everything works with static MP3 files.

## Replacing with Real Voice Samples

To add actual voice recordings:

1. Replace any MP3 file with your real voice sample
2. Keep the same filename (e.g., `echo.mp3`)
3. Recommended: 2-5 seconds of sample Hebrew speech
4. The demo will automatically use the new files

## Note

Current files are minimal placeholders (~0.5s silence). Replace them with real voice samples for production deployment.
