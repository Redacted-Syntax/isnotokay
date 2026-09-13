# Setup

## 1. Get it running locally

```bash
git clone https://github.com/Redacted-Syntax/isnotokay.git
cd isnotokay
npm install
npm run dev
```

Open http://localhost:5173

**Use `npm run dev`, not the Live Server extension.** Live Server serves files
raw and never compiles JSX, which gives you a blank page and misleading
console errors.

If the terminal says it cannot find `package.json`, you are in the wrong
folder. `pwd` should end in `/isnotokay`.

## 2. Deploy to Cloudflare Pages

1. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git
2. Pick the `isnotokay` repo
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and Deploy

Every push to `main` redeploys automatically. Pull requests get their own
preview URL.

## 3. Attach the domain

Pages project -> Custom domains -> Set up a domain -> `isnotokay.org`

The domain is already at Cloudflare, so DNS is filled in automatically and TLS
is issued for free. Add `www.isnotokay.org` too and let it redirect to the
apex.

## 4. sadsquad.party

Do not build a second site on it. Two options:

- **Redirect** - Cloudflare -> Rules -> Redirect Rules -> forward everything to
  `https://isnotokay.org`. A sayable URL for TikTok, zero extra work.
- **One event page** - a single page with a date on it for a specific
  session. An event is the best cold-start mechanic there is, because people
  show up for a time slot when they will not sign up for a forum.

Never send email from it. Novelty gTLDs have no sender reputation and mail
from them lands in spam. All email goes from isnotokay.org.

## 5. Routing note

`public/_redirects` sends every path to `index.html` so React Router can
handle it. Without it, loading `/about` directly returns a 404 on a static
host. It is already in the repo.

## Phase 2 and beyond

Nothing here needs a `.env` file yet. When Supabase arrives in Dec/Jan:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Those go in `.env.local`, which is already gitignored. Note that anything
prefixed `VITE_` is bundled into the browser and is therefore public. The anon
key is designed for that. A service role key never, ever goes in frontend code.
