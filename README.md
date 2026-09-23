# Furkan Fidan — Portfolio

Schematic, single-page portfolio: a power core on the home canvas opens Projects, Skills, About, and Contact panels.

What each file does: [FILES.md](FILES.md).

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Resend.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The contact panel sends mail through a server action. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. `CONTACT_TO` defaults to the Gmail in `src/data/contact.ts`.

## Scripts

```bash
npm run dev    # development
npm run build  # production build
npm run lint   # eslint
```
