# IsNotOkay

> A space for people who are not okay and need a space to find their okay.

Live at **isnotokay.org**

## What this is

A peer support community. Not a clinical service, not therapy, not a crisis line.
Founded and built by one person with lived experience.

## Stack

- React 19 + Vite
- react-router-dom 7
- Plain CSS with custom properties (no framework)
- Cloudflare Pages for hosting
- Supabase for auth + database (Phase 2, Dec/Jan)

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

**Use `npm run dev`. Not the Live Server extension.** Live Server serves raw
files and does not compile JSX, so you get a blank page and confusing errors.

```bash
npm run build      # production build into dist/
npm run preview    # serve the built dist/ locally
```

## Build phases

| Phase | When | What |
| --- | --- | --- |
| 1 | Sep-Nov 2026 | Static frontend. Every route real, real copy, no backend. |
| 2 | Nov 2026 | Email waitlist (no login, no database). |
| 3 | Dec 2026-Jan 2027 | Supabase auth + posts + comments. Built as backend coursework. |
| 4 | Feb-Mar 2027 | Moderation queue, then invite the first members. |

## Ground rules for this codebase

1. **No fabricated content.** No testimonials from people who do not exist, no
   invented member counts, no fake visitor stats. The FTC Consumer Reviews and
   Testimonials Rule makes this a real penalty risk, and it contradicts the
   entire point of the project.
2. **No secrets in the repo.** Keys go in `.env.local`, which is gitignored.
   Anything in client-side code is public forever.
3. **No trackers on pages where mental health is inferable.** No Meta Pixel, no
   ad networks. Mental health posts count as consumer health data under
   Washington's My Health My Data Act and Nevada NRS 603A.
4. **Crisis resources stay visible without logging in.**
5. **One product.** Rooms live inside this site. They are not future websites.
