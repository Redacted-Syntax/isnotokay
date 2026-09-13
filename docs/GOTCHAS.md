# Gotchas

Real errors hit during this build and what actually fixed them. Check here
first before searching.

## "Latest build failed" but the build log looks fine

Look at which step failed. There are two:

1. `npm run build` - Vite compiling your React code
2. `npx wrangler deploy` - Cloudflare shipping it

If you see "Success: Build command completed" and it still failed, your code
is fine and the problem is deploy config.

## "Invalid _redirects configuration: Infinite loop detected"

**Cause:** a `public/_redirects` file containing `/*  /index.html  200`.

That is Cloudflare **Pages** syntax. On **Workers**, the same line reads as a
rule that redirects to itself, so the API rejects it.

**Fix:** delete `public/_redirects`. SPA routing is already handled by
`"not_found_handling": "single-page-application"` in `wrangler.jsonc`.

## The Pages vs Workers trap in general

Cloudflare has two hosting products with overlapping docs. This project is
**Workers with static assets**. When you search for help, Pages answers will
look right and quietly not work.

| Thing | Pages | Workers (this project) |
| --- | --- | --- |
| Server code | `functions/` folder | `worker/` + `main` in wrangler.jsonc |
| SPA routing | `_redirects` file | `not_found_handling` in wrangler.jsonc |
| Config file | none needed | `wrangler.jsonc` required |
| Secrets | Pages project settings | Worker settings |
| Deploy | automatic | `npx wrangler deploy` |

If a tutorial mentions a `functions/` folder or a `_redirects` file, it is a
Pages tutorial. Keep looking.

## Blank white page in local dev

You are using the Live Server extension instead of `npm run dev`. Live Server
hands the browser raw files and never compiles JSX.

## "Cannot find package.json"

Wrong folder. `pwd` should end in `/isnotokay`.

## Form says "The waitlist is not configured yet"

The secrets are missing, or you added them and did not redeploy. Secrets only
reach builds that run *after* you save them.

## Form says "Could not save that. Try again in a bit?"

Airtable rejected the write. Real reason is in Worker -> Logs. Usually:

- token has the wrong scopes (needs `data.records:write`)
- token does not have access to the Community Sign Up base
- `AIRTABLE_TABLE` does not match the table name exactly

The visitor deliberately never sees Airtable's own error, because those can
leak table and field names.

## A route 404s when loaded directly

Should not happen now. If it does, `not_found_handling` is missing or
misspelled in `wrangler.jsonc`.

## Diff on GitHub looks like it is missing a bracket

GitHub's diff view splits every symbol into its own element, and copying from
it can drop characters. Trust the file view over the diff view, or pull the
file locally and let your editor tell you.
