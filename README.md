# ProSaaS Landing Page

דף נחיתה ואתר תדמית ל-ProSaaS - מערכת CRM מתקדמת עם בוט WhatsApp ובוט שיחות בזמן אמת.

## 🚀 טכנולוגיות

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS**
- **OpenAI TTS** - יצירת דוגמאות קול בזמן אמת
- **RTL מלא** - עברית מימין לשמאל

## 📦 התקנה והרצה מקומית

```bash
# התקנת תלויות
npm install

# הרצה בסביבת פיתוח
npm run dev

# בנייה לייצור
npm run build

# הרצה בייצור
npm run start
```

פתחו את [http://localhost:3000](http://localhost:3000) בדפדפן.

## 🌐 פריסה ב-Vercel

1. העלו את הקוד ל-GitHub
2. התחברו ל-[Vercel](https://vercel.com)
3. צרו פרויקט חדש וחברו את הריפו
4. **הוסיפו את משתני הסביבה הבאים:**
   - `OPENAI_API_KEY` - מפתח API של OpenAI (נדרש להדגמת הקול)
5. Vercel יזהה אוטומטית שזה Next.js ויבנה

### משתני סביבה נדרשים

```bash
# .env.local (לפיתוח מקומי)
OPENAI_API_KEY=sk-your-openai-api-key-here
```

**חשוב:** אל תשתפו את מפתח ה-API בגיט. הוסיפו את `.env.local` ל-`.gitignore`.

## 📝 עריכת תוכן

כל הטקסטים נמצאים בקובץ אחד:

```
content/site.he.json
```

ניתן לשנות:
- כותרות ותתי-כותרות
- תכונות ויכולות
- מחירים וחבילות
- שאלות נפוצות
- פרטי קשר
- קולות להדגמה

## 🎨 עיצוב וצבעים

האתר משתמש בסכמת צבעים כחול-לבן מקצועית.

**משתני צבע (ב-`globals.css`):**
```css
--brand-50 to --brand-900  /* גווני כחול */
--brand-accent             /* כחול זוהר להדגשות */
```

**רכיבי עיצוב:**
- לוגו כחול-לבן עם אייקון chat bubble
- כפתורים ראשיים: כחול עם טקסט לבן
- כפתורים משניים: outline כחול עם hover
- גרדיאנטים: כחול-לבן
- Focus rings: כחול

## 🎤 הדגמת קול (Voice Demo)

ההדגמה משתמשת ב-OpenAI TTS API לייצר אודיו בזמן אמת.

**קולות זמינים:**
- Alloy, Ash, Ballad, Coral, Echo (ברירת מחדל), Sage, Shimmer, Verse, Marin

**תכונות:**
- יצירת אודיו דינמי לפי הטקסט שנבחר
- מטמון בזיכרון למשך 60 שניות (חיסכון בעלויות API)
- תמיכה ב-iOS ואנדרואיד
- הודעות שגיאה בעברית

אין צורך להוסיף קבצי MP3 ידנית - הכל נוצר בזמן אמת!

## 📁 מבנה הפרויקט

```
├── content/
│   └── site.he.json      # כל הטקסטים
├── public/
│   └── logo.svg          # לוגו כחול-לבן
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/     # API לטופס לידים
│   │   │   └── tts/      # API ליצירת אודיו (OpenAI TTS)
│   │   ├── layout.tsx    # Layout ראשי
│   │   ├── page.tsx      # דף הבית
│   │   └── globals.css   # סגנונות גלובליים + משתני צבע כחול-לבן
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── WhatIs.tsx
│       ├── Features.tsx
│       ├── VoiceDemo.tsx
│       ├── Integrations.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── package.json
```

## 🔧 API

### POST /api/lead

מקבל פרטי ליד:

```json
{
  "name": "שם מלא",
  "phone": "050-1234567",
  "business": "שם העסק",
  "message": "הודעה"
}
```

### POST /api/tts

יוצר אודיו מטקסט בזמן אמת:

```json
{
  "voice": "echo",
  "text": "שלום, אני העוזר הדיגיטלי שלכם",
  "format": "mp3"
}
```

**תכונות:**
- מאמת קול מול רשימת קולות מאושרים
- מגביל טקסט ל-400 תווים
- מטמון לשיפור ביצועים
- מחזיר audio/mpeg להשמעה ישירה

## 📱 רספונסיביות

האתר מותאם לכל גדלי המסך:
- מובייל (iPhone)
- טאבלט
- דסקטופ

## 📄 License

MIT