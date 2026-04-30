# Yvonne Montefrio — Portfolio

Modern pink-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- **Responsive design** — works on all screen sizes
- **Modern pink theme** — elegant gradient design with glass-card UI
- **Smooth animations** — scroll-triggered reveal animations
- **Chatbot assistant** — answers questions about Yvonne (no API, no 3rd party)
- **Resume download** — one-click PDF download button
- **Contact section** — copy-to-clipboard contact info

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display + DM Sans (Google Fonts)
- **Deployment:** Vercel

## 📁 Project Structure

```
yvonne-portfolio/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (all sections)
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll detection
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills + proficiency bars
│   ├── Experience.tsx    # Timeline work history
│   ├── Projects.tsx      # Project cards grid
│   ├── Contact.tsx       # Contact info + social links
│   ├── Footer.tsx        # Site footer
│   └── Chatbot.tsx       # Floating chatbot assistant
├── lib/
│   └── data.ts           # Resume data + chatbot knowledge base
├── public/
│   └── YVONNE MONTEFRIO 2026.pdf        # Downloadable resume
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI (recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project root
vercel

# Follow the prompts, then deploy to production
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! 🎉

## 🤖 Chatbot

The chatbot uses a local keyword-matching knowledge base (`lib/data.ts`).
No external API or third-party service required.
Add more Q&A pairs to the `chatbotKB` object in `lib/data.ts`.

## 📄 Resume

Place your resume PDF at `public/YVONNE MONTEFRIO 2026.pdf` to enable the download button.
The current file is already included.
