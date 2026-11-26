# Agent guide: Miguel Luque's portfolio

Read this before changing anything. It records the decisions behind the current design so that new work keeps the same voice and look. If a change needs to break a rule here, update this file in the same commit and say why.

Live site: https://miguelluque.vercel.app. Pushing to `main` deploys to production on Vercel; any other branch gets a preview URL.

## What the site is for

A one-page site for a Team Lead and Senior Backend Engineer in Seville. Readers are recruiters, hiring managers and occasional freelance clients. The page has to answer, in this order: who he is and what he does at work, the products he builds on his own time, how to contact him. Everything else is secondary.

The site is in English. Some of the products (PokePlus, Aljarafe+) are in Spanish; say so in their `status` instead of translating their screenshots.

## Stack and commands

Next.js 16 App Router, fully static, React 19, TypeScript, Tailwind CSS 3, ESLint 9 flat config. No UI library, no icon library, no animation library: keep it that way unless there is a real need.

```bash
npm run typecheck
npm run lint
npm run build      # must finish with every route marked ○ (static)
```

Run all three before every commit.

## Where things live

| What | Where |
| --- | --- |
| Name, email, links, site URL, CV path | `data/profile.ts` |
| Roles, education, certifications, languages | `data/experience.ts` |
| Featured products and smaller experiments | `data/projects.ts` |
| Page order | `app/page.tsx`: Hero, Experience (`#work`), Projects (`#products`), Services (`#services`), Contact |
| Colour tokens | `app/globals.css` (CSS variables) and `tailwind.config.ts` |
| SEO metadata | `app/layout.tsx`, `lib/structured-data.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` |
| Favicon and touch icon | `app/icon.tsx`, `app/apple-icon.tsx` |
| Screenshots | `public/projects/` |
| CV | `public/cv/miguel-luque-cv.pdf`, a copy of `~/Documents/CV/Miguel_Luque.pdf` |

Content changes almost always belong in `data/`, not in components.

## Visual design

The look is light and quiet: off-white paper, navy ink, one blue for links and a single warm accent. The idea comes from Seville: azulejo blue (`tile`) and the ochre of albero sand (`albero`). The screenshots are the only colourful thing on the page.

### Colour tokens

Defined as RGB channels so Tailwind opacity modifiers work (`decoration-tile/30`, `bg-paper/95`). Never use hex colours or Tailwind's default palette in components; add a token if one is missing.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#f2f4f3` | Page background |
| `surface` | `#ffffff` | Behind screenshots |
| `ink` | `#14213d` | Text, primary button, Contact and Footer background |
| `muted` | `#55606e` | Secondary text, labels (`dt`), intros |
| `rule` | `#d3dadd` | Borders and dividers |
| `tile` | `#1e56a0` | Links, focus outline, hover on the primary button |
| `albero` | `#d99a2b` | Accent. Used once: the left border of the hero facts. Don't spread it around |

### Typography

One family: Schibsted Grotesk via `next/font` (`--font-sans`). Hierarchy comes from size and weight, not from extra typefaces.

- h1 (hero only): `text-[clamp(2.4rem,5.6vw,4.25rem)]`, `font-extrabold`, `leading-[1.02]`, `tracking-[-0.035em]`, balanced wrapping, max `22ch`.
- h2 (section titles): `text-2xl font-bold tracking-tight`, in the sticky left column of `Section`.
- h3: `text-3xl font-extrabold` for product titles; `text-lg font-bold` for smaller headings.
- Body: `leading-[1.65]`, size `text-[0.95rem]` to `text-[1.125rem]`; keep paragraphs within `max-w-prose` (38rem).
- Labels are plain sentence-case text in `text-muted`, usually as `<dt>`.

### Layout

- Page width `max-w-page` (74rem); side padding `px-5 sm:px-8`.
- Every section after the hero uses `components/Section.tsx`: a 14rem sticky title column next to the content on `lg`, stacked below that. Sections are separated by a top border, not by background colour (except Contact, which is ink).
- Vertical rhythm: `py-16 sm:py-24` per section, `space-y-20` between products.
- Screenshots: `rounded-xl border border-rule bg-surface`. Cards, shadows and gradients are not used anywhere.

### Interaction and accessibility

- Links use the `.link` class (blue, underlined, the underline darkens on hover). External links go through `components/ExternalLink.tsx`, which adds `rel` and a screen-reader note about the new tab.
- Only one filled button on the page: "Email me" in the hero.
- Visible focus comes from the global `:focus-visible` outline; don't remove it.
- No entrance animations, no scroll effects. Smooth scrolling is turned off when the user prefers reduced motion.
- Check every change at 390 px wide: no horizontal scroll, tap targets at least `py-2`.

## Writing

- Plain, specific English in the first person. Say what a thing does and what Miguel did, with real numbers only when they come from the CV or the project itself.
- No buzzwords ("passionate", "cutting-edge", "seamless", "leverage", "robust solutions") and no invented metrics.
- Sentence case everywhere. No all-caps labels or eyebrow text above headings.
- Don't put arrows (→) on links. Don't join metadata with middle dots (A · B · C). Don't build labels as "Word — fragment".
- Don't highlight a single word of a headline with italics or colour.
- Link text says where it goes: "Open the app", "Source code", "Play", "Website".
- Never link to a private repo or an unpublished URL. Check that every link returns 200 before committing.
- Internal notes, to-dos or "next steps" never go in visible copy.

## Adding a product

1. Add an entry to `projects` in `data/projects.ts`. Fields:
   - `pitch`: one sentence on what it is for.
   - `status`: one short line, for example "Live" or "Private pilot in Spain".
   - `body`: two short paragraphs, what it does and the interesting engineering.
   - `role`, `stack`, `links`.
   - `note`: for non-public projects, instead of links.
2. Screenshots in `public/projects/`, JPG, quality around 82:
   - Desktop `image`: 1800×1125 (16:10).
   - Mobile `mobileImage`: about 780 px wide, portrait. It is shown below the `sm` breakpoint.
   - Optional `secondImage`: shown beside the main one from `sm` up, at the same height.
   - Rename the file when you replace an image; the Next image cache keeps the old one otherwise.
3. Write the `alt` text as a description of what the screenshot shows, not "screenshot of X".
4. Add the product to the products sentence in `components/sections/Hero.tsx`; its anchor is `#<slug>-title`.
5. If it is a product he runs himself and it is public, consider mentioning it in `components/sections/Services.tsx` only if it supports one of the offers.

### Taking screenshots

Use Playwright with `deviceScaleFactor: 2`:
- 1400×900 for desktop, then crop to 16:10 and resize to 1800 wide.
- 390×700 for mobile, which gives 780×1400 with no crop. (`sips -c` crops from the centre and ignores `--cropOffset`, so avoid it for top crops.)

Show the product doing its main job with realistic data, not an empty state or a login screen. If an app needs input (a file, a sign-in), use the project's own test fixtures or ask Miguel for a capture.

## SEO

- Title and description are in `app/layout.tsx`. Keep the title under 60 characters and the description under 160, and keep the name, role, Seville and the core stack in them.
- `lib/structured-data.ts` holds the schema.org graph (WebSite, ProfilePage and Person). When the job, education or certifications change in `data/`, update it too.
- The CV is served with `X-Robots-Tag: noindex` (see `next.config.mjs`) because it contains a phone number.
- To enable Google Search Console verification, set `GOOGLE_SITE_VERIFICATION` in Vercel.

## Facts that must stay consistent

The site must match the CV:
- 7 years in backend, the last 2 leading a team.
- Current role: Team Lead at Minsait.
- Certification: Certified Professional Scrum Master only, no AWS.
- Phone number: never shown on the site.

When the CV changes, update `public/cv/`, `data/experience.ts` and `lib/structured-data.ts` together.
