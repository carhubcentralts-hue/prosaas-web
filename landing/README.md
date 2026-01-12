# ProSaaS Landing Page

דף נחיתה ואתר תדמית ל-ProSaaS - מערכת CRM מתקדמת עם בוט WhatsApp ובוט שיחות בזמן אמת.

## 🚀 טכנולוגיות

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
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
4. הגדירו את Root Directory ל-`landing`
5. Vercel יזהה אוטומטית שזה Next.js ויבנה

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

## 🎤 קבצי אודיו לדמו

הוסיפו קבצי MP3 לתיקיית `public/voices/`:

- `alloy.mp3`
- `ash.mp3`
- `ballad.mp3`
- `coral.mp3`
- `echo.mp3` (ברירת מחדל)
- `sage.mp3`
- `shimmer.mp3`
- `verse.mp3`
- `marin.mp3`

## 📁 מבנה הפרויקט

```
landing/
├── content/
│   └── site.he.json      # כל הטקסטים
├── public/
│   └── voices/           # קבצי אודיו
├── src/
│   ├── app/
│   │   ├── api/lead/     # API לטופס לידים
│   │   ├── layout.tsx    # Layout ראשי
│   │   ├── page.tsx      # דף הבית
│   │   └── globals.css   # סגנונות גלובליים
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

## 📱 רספונסיביות

האתר מותאם לכל גדלי המסך:
- מובייל (iPhone)
- טאבלט
- דסקטופ

## 📄 License

MIT
