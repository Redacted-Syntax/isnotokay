# Architecture

Two halves, one domain.

```
isnotokay.org
|
+-- everything else  ->  dist/          static React app (fast, free, no server)
|
+-- /api/*           ->  worker/        server code, holds the secrets
```

## src/ - the browser half

React 19 + Vite + react-router-dom 7. Compiled into `dist/` and served as
plain files from Cloudflare's edge.

**Everything here is public.** It ships to the browser, so anyone can read
it with View Source. Never put a key, a token, or a password in `src/`.

## worker/ - the server half

Runs on Cloudflare. Only paths listed in `run_worker_first` reach it, which
is currently just `/api/*`.

**This is the only place secrets are safe.** `env.AIRTABLE_TOKEN` exists
here and nowhere else.

```
worker/
  index.js      router - matches the path, calls a handler
  waitlist.js   one handler, one job
```

To add an endpoint: write `worker/thing.js`, import it in `worker/index.js`,
add an `if` for its path. That is the whole pattern.

## Why split it this way

A community site needs a server for exactly three things: holding secrets,
talking to a database, and checking who someone is. Everything else is
faster and cheaper as a static file.

So the Worker stays small on purpose. Most of the site never touches it,
which means most of the site cannot break in a server-shaped way.

## What goes where later

| Feature | Where |
| --- | --- |
| Waitlist (now) | `worker/waitlist.js` |
| Login, signup (Phase 3) | Supabase client in `src/`, session checks in `worker/` |
| Posts and comments (Phase 3) | Supabase with row-level security |
| Moderation queue (Phase 4) | `worker/` - needs the service role key |
| Content screening (Phase 4) | `worker/` - OpenAI Moderation API, free tier |
| Merch checkout | Neither. Big Cartel or Payhip handles it, the Shop page links out. |

The pattern to hold onto: if it needs a secret, it lives in `worker/`. If it
only needs to look good, it lives in `src/`.
