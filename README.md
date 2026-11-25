# Miguel Luque · portfolio

Personal site for Miguel Luque, Team Lead and Senior Backend Engineer in Seville. Live at https://miguelluque.vercel.app.

## Stack

Next.js 16 (App Router, fully static), React 19, TypeScript and Tailwind CSS 3. Typeface: Schibsted Grotesk via `next/font`.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Content

Everything editable lives in `data/`:

- `profile.ts`: name, links, email and site URL.
- `experience.ts`: roles, education and certifications.
- `projects.ts`: featured products and smaller experiments. Screenshots go in `public/projects/` (1800 px wide JPG, 16:10).

Design tokens (colours) are CSS variables in `app/globals.css`, exposed to Tailwind in `tailwind.config.ts`.

The CV sources are in `docs/cv/`; the published PDF is `public/cv/miguel-luque-cv.pdf`.
