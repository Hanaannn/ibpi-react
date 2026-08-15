# Inti Bangun Perkasa Indonesia — Web Application

Company profile site for **PT Inti Bangun Perkasa Indonesia**, rebuilt as a modern React
application. Single-page marketing site (Home → About → Partners → Services → Contact)
architected so new pages/sections are cheap to add later.

## Stack

- **React 18** — functional components + hooks only
- **React Router 6** — routing shell is already in place for future pages
- **Vite 5** — dev server & build
- **Tailwind CSS v4** — CSS-first config (`@theme` in `src/styles/index.css`, no `tailwind.config.js` needed)
- **Framer Motion** — scroll reveals, stagger groups, hover micro-interactions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run lint        # ESLint
```

## Folder structure

```
src/
├── assets/illustrations/   Hand-built blueprint-style SVG illustrations (no stock photos)
├── components/
│   ├── ui/                  Generic, reusable presentational components
│   ├── forms/                Contact form + its field primitive
│   ├── layout/                Navbar, Footer, mobile menu, loader, back-to-top
│   └── motion/                framer-motion wrappers (RevealOnScroll, StaggerGroup) + variants
├── sections/                 One file per homepage section (Hero, About, Services, ...)
├── layouts/                  MainLayout wraps every route (navbar + footer + outlet)
├── pages/                    Route-level components (HomePage, NotFoundPage)
├── hooks/                    Reusable stateful logic (count-up, active-section tracking, etc.)
├── constants/                 Static site/nav config — edit these to rebrand or re-point nav
├── data/                       Content arrays (services, stats, partners) — edit copy here
├── utils/                      Small pure helpers (cn, scrollToId)
└── styles/index.css            Tailwind import + design tokens (@theme) + base styles
```

**Where to make common changes**

| Change | File |
|---|---|
| Company name, phone, email, address | `src/constants/site.js` |
| Nav links / footer links | `src/constants/navigation.js` |
| Service cards (copy, tags) | `src/data/services.js` |
| About-section stats | `src/data/stats.js` |
| Trusted-by logos | `src/data/partners.js` |
| Colors, fonts, shadows | `src/styles/index.css` (`@theme` block) |
| Contact form submit behavior | `src/hooks/useContactForm.js` (currently simulated — wire up a real endpoint here) |

## Design system

- **Palette**: graphite (dark surfaces), paper (light surfaces), amber (primary accent /
  CTAs), blueprint-blue (secondary accent used in line art and dimension annotations).
- **Type**: Space Grotesk for headings, Inter for body copy, JetBrains Mono for
  labels/eyebrows/numerals — a deliberate nod to spec-sheet/blueprint typography.
- **Signature motif**: `components/ui/CornerFrame.jsx` draws drafting-style corner ticks
  around featured imagery (hero panel, service illustrations) — used sparingly so it stays
  meaningful.
- **Motion**: all animations respect `prefers-reduced-motion` (see `src/styles/index.css`
  and the individual hooks) and run once on scroll-into-view rather than replaying.

## Notes on content

The original HTML's About/Services copy described a software (web/mobile/IoT) company,
which conflicted with the hero copy, footer tagline, and the company name itself. This
rebuild assumes that was a leftover template mismatch and writes About/Services/stats
around the company's actual business — residential, commercial/warehouse, and
industrial/hangar construction. If that assumption is wrong, everything content-related
lives in `src/data/*.js` and is a quick edit.

No stock photography is used — illustrations are custom inline SVG components so the
site has zero external image dependencies and stays fast.
