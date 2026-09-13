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

## 2. How it deploys

This is a **Worker with static assets**, not a Pages project. Cloudflare
now steers new projects to Workers and it is the better path, but the two
work differently and the docs for one will confuse you if you are on the
other.

What happens on every push to `main`:

1. `npm run build` - Vite compiles the React app into `dist/`
2. `npx wrangler deploy` - reads `wrangler.jsonc` and ships it

`wrangler.jsonc` is the file that makes the deploy work. Without it the
build passes and the deploy fails with nothing useful in the log.

Three settings in it matter:

| Setting | What it does |
| --- | --- |
| `assets.directory` | `./dist/` - must match "Build output" in the dashboard |
| `not_found_handling` | `single-page-application` so React Router owns the URLs |
| `run_worker_first` | `["/api/*"]` so the API is not swallowed by the SPA rule |

That last one is subtle. Without it, `/api/waitlist` would return
`index.html` with a 200 status and the form would fail in a genuinely
baffling way.

## 3. Dashboard settings

Your Worker -> Settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Those are already correct if the project was created through Connect to Git.

## 4. Secrets

Worker -> Settings -> **Variables and Secrets** -> Add:

| Name | Value | Type |
| --- | --- | --- |
| `AIRTABLE_TOKEN` | your `pat...` token | **Secret** |
| `AIRTABLE_BASE` | `appgdJPjWXPGgfF2E` | Text |
| `AIRTABLE_TABLE` | `Waitlist` | Text |

Then **retry the build**. Secrets only reach deploys that happen after you
save them.

## 5. Attach the domain

Worker -> Settings -> Domains & Routes -> Add -> Custom domain ->
`isnotokay.org`

DNS and the TLS certificate are automatic because the domain is already at
Cloudflare. Add `www.isnotokay.org` too.

## 6. sadsquad.party

Do not build a second site on it. Two options:

- **Redirect** - Cloudflare -> Rules -> Redirect Rules -> forward everything
  to `https://isnotokay.org`. A sayable URL for TikTok, zero extra work.
- **Point it at the existing Typeform** - there is already a live signup form
  at form.typeform.com/to/AjM7cmIy with the right voice on it.

Never send email from it. Novelty gTLDs have no sender reputation and mail
from them lands in spam. All email goes from isnotokay.org.

## Reading logs

Worker -> Logs. `observability` is enabled in `wrangler.jsonc`, so
`console.error` from `worker/` shows up there. That is where the real
Airtable error appears when the form misbehaves, because the visitor only
ever sees a friendly message.

## Phase 3 and beyond

When Supabase arrives in Dec/Jan, the frontend config is:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

in `.env.local`, which is already gitignored. Anything prefixed `VITE_` ends
up in the browser bundle and is therefore public. The anon key is designed
for that. A service role key belongs in `worker/`, never in `src/`.
