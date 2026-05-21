# Amorist Luxe

A premium, high-end luxury **perfume boutique** experience — sophisticated visuals, rich product
storytelling, and engaging product interactions.

> Note: this is one of three repos that contain the Amorist Luxe codebase
> (also in `CODE_hex1` and `CODE_hex`). Consider consolidating.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- `@google/genai` (Gemini SDK) — AI-assisted features
- `better-sqlite3` — local persistence
- React Router, Framer Motion, `lucide-react`
- Express (small server-side endpoints)

## Run locally

```bash
npm install
cp .env.example .env.local       # add your GEMINI_API_KEY
npm run dev
```

## Project layout

```
.
├── index.html
├── src/                  React app
├── public/               static assets
├── metadata.json         AI Studio app metadata
└── vite.config.ts
```
