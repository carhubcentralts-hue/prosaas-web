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

### הגדרות נדרשות

1. **Root Directory:** repository root (ברירת מחדל)
2. **Build Command:** `npm run build` (אוטומטי)
3. **Output Directory:** `.next` (אוטומטי)

### שלבי הפריסה

1. העלו את הקוד ל-GitHub
2. התחברו ל-[Vercel](https://vercel.com)
3. צרו פרויקט חדש וחברו את הריפו
4. Vercel יזהה אוטומטית שזה Next.js ויבנה את האתר
5. האתר יעלה אוטומטית!

### משתני סביבה (אופציונלי)

אם רוצים להפעיל את `/api/tts` לייצור אודיו בזמן אמת:

```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
```

**חשוב:** זה לא חובה! הדמו קול עובד גם בלי API key עם קבצי MP3 סטטיים.

## 📝 עריכת תוכן

### איך לערוך טקסט באתר?

**כל הטקסטים באתר נמצאים בקובץ אחד:**

```
content/site.he.json
```

**כדי לשנות טקסט:**

1. פתחו את הקובץ `content/site.he.json` בעורך
2. מצאו את המפתח (key) הרלוונטי
3. שנו את הערך (value)
4. שמרו והעלו את השינוי ל-GitHub
5. Vercel יעשה deploy אוטומטי עם הטקסט החדש

**מה ניתן לשנות:**

- `hero` - כותרת ראשית ותתי כותרת
- `features.items` - יכולות המערכת
- `voiceDemo` - טקסטים בהדגמת הקול
- `pricing.plans` - מחירים וחבילות
- `faq.items` - שאלות ותשובות נפוצות
- `contact` - פרטי קשר
- `legal.terms` - תנאי שימוש
- `legal.privacy` - מדיניות פרטיות

**דוגמה:**

```json
{
  "hero": {
    "title": "הכותרת שלכם כאן",
    "subtitle": "תת-כותרת משלכם"
  }
}
```

**חשוב:** שמרו על המבנה של ה-JSON (סוגריים, פסיקים, מרכאות).

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

ההדגמה משתמשת בקבצי אודיו סטטיים מהתיקייה `public/voices/`.

**קולות זמינים:**
- Alloy, Ash, Ballad, Coral, Echo (ברירת מחדל), Sage, Shimmer, Verse, Marin

**איך זה עובד:**

1. כאשר לוחצים על "שמע דוגמה", המערכת מנסה לטעון את הקובץ `/voices/{voice-name}.mp3`
2. אם הקובץ קיים - הוא מתנגן
3. אם הקובץ לא קיים - מוצגת הודעה "דמו בהכנה" (ללא שגיאה)

**הוספת קבצי דמו:**

להוסיף קבצי MP3 לתיקייה `public/voices/`:

```
public/voices/alloy.mp3
public/voices/echo.mp3
...
```

**חלופה מתקדמת (אופציונלי):**

אם יש לכם מפתח API של OpenAI, אפשר להשתמש ב-`/api/tts` לייצור אודיו בזמן אמת:

1. הוסיפו משתנה סביבה ב-Vercel: `OPENAI_API_KEY=sk-your-key`
2. ה-API יעבוד אוטומטית (אבל לא חובה - הדמו עובד גם בלי זה)

## 📁 מבנה הפרויקט

```
├── content/
│   └── site.he.json      # ★ כל הטקסטים - ערוך כאן!
├── public/
│   ├── logo.svg          # לוגו כחול-לבן
│   └── voices/           # קבצי MP3 לדמו קול (אופציונלי)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/     # API לטופס לידים
│   │   │   └── tts/      # API ליצירת אודיו (אופציונלי)
│   │   ├── terms/        # עמוד תנאי שימוש
│   │   ├── privacy/      # עמוד מדיניות פרטיות
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