# Integrations

What is wired up, what is deliberately not, and how to finish each one.

## Cloudflare - hosting, DNS, and the API

Both domains are registered here, so everything lives in one dashboard.

**Deploy the site:**

1. Workers & Pages -> Create -> Pages -> Connect to Git
2. Pick the `isnotokay` repo
3. Framework preset **Vite**, build command `npm run build`, output `dist`
4. Deploy

**Attach the domain:** Pages project -> Custom domains -> `isnotokay.org`.
DNS and the TLS certificate are automatic because the domain is already here.

The `functions/` folder deploys along with the site automatically. No
separate worker, no wrangler config needed.

## Airtable - the waitlist

**Base:** Community Sign Up (`appgdJPjWXPGgfF2E`)
**Table:** Waitlist

Fields: Email, Name, Source, Status, Consent, Signed up, Notes.

Workflow: new signups land as `new`. Move to `invited` when you send an
invite, `joined` when they show up, `unsubscribed` if they ask out.

### Finish the setup (5 minutes)

1. **Revoke the old token.** airtable.com/create/tokens - the one starting
   `patreSQZ...` was published in a public repo and must die.
2. **Make a new token** with scopes `data.records:write` and
   `schema.bases:read`, limited to the Community Sign Up base only. Not
   all-workspace access. Copy it once; Airtable will not show it again.
3. **Add three secrets** in Cloudflare: Pages project -> Settings ->
   Variables and secrets:

   | Name | Value | Type |
   | --- | --- | --- |
   | `AIRTABLE_TOKEN` | the new token | **Secret** |
   | `AIRTABLE_BASE` | `appgdJPjWXPGgfF2E` | Text |
   | `AIRTABLE_TABLE` | `Waitlist` | Text |

4. Redeploy. Secrets only apply to builds after they are added.

### Why it is built this way

The token lives on Cloudflare's server, inside `functions/api/waitlist.js`.
The browser only ever talks to `isnotokay.org/api/waitlist` and never sees a
key.

The old idkreally page did the opposite: it put the token directly in the
HTML, so anyone who opened View Source could read and write the base. That is
the single most common way small sites get owned, and it is now structurally
impossible here.

Side note: those 7 rows already in the old `Subscribers` table are empty.
That form never actually saved a name or an email. Nothing was lost, and
nobody's real address was ever exposed.

### Treat this data as sensitive

Every row is a person who raised their hand for a mental health community.
That is consumer health data under Washington's My Health My Data Act and
Nevada NRS 603A. Practically: never connect this base to an ad tool, never
export it into a spreadsheet that syncs anywhere, and never share it.

## Stripe - connected, intentionally not wired up

There is a live **IsNotOkay.com** account plus a sandbox.

**Nothing is connected to the site, on purpose.** Taking money needs four
things this project does not have yet:

1. Something to sell. No designs exist.
2. Real terms of service and a refund policy.
3. A decision on the business entity. A Nevada LLC is $425 to form.
4. Sales tax handling, which is genuinely annoying to do yourself.

When there is merch, the recommendation is **not** to build checkout here.
Use Big Cartel (free up to 5 products, no transaction fees) or Payhip, both
of which sit on top of Stripe and handle tax, receipts, and fulfilment. The
Shop page links out. Less code, less liability, less to maintain.

The sandbox account is the safe place to experiment: use it to build a test
Payment Link and see how it works without touching real money.

## Supabase - Phase 3, December/January

Not connected yet and should not be. Accounts, posts, comments, and the
moderation queue arrive with the backend coursework, where there are
instructors to ask when a row-level security policy silently returns an empty
array.

When it lands, the only frontend config is:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

in `.env.local`, which is already gitignored. Anything prefixed `VITE_` ends
up in the browser bundle and is therefore public. The anon key is designed
for that. A service role key must never appear in frontend code.

## sadsquad.party

Not a second website. Either a redirect rule pointing at isnotokay.org, or
one single event page. Never a mail sender.
