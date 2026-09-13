# The secrets map

Everything currently planted, where it lives, and how somebody finds it.
This file is the keeper's map - the point is that YOU do not lose track of
what is hidden out there.

Read `docs/ARG.md` first for the safety rules. The short version: nothing
anyone needs is ever hidden, nothing is on a timer, and solving things
never earns status inside the community.

## The trail as it stands

```
view-source  ->  robots.txt  ->  /archive  ->  ghost routes
                 humans.txt                    /idkreally
                 security.txt                  /sadsquad
                 Network tab headers           /iiclout
                 devtools console               /cult
                 /api/transmission
```

Every branch is a dead end that is also a small reward. Nobody can get
stuck, because nothing depends on anything else.

## Planted

| # | Secret | File | How it is found |
| --- | --- | --- | --- |
| 1 | Source comment with the whole trail | `index.html` | View source |
| 2 | robots.txt letter | `public/robots.txt` | `/robots.txt` |
| 3 | humans.txt letter + base64 line | `public/humans.txt` | `/humans.txt` |
| 4 | security.txt, real + in character | `public/.well-known/security.txt` | `/.well-known/security.txt` |
| 5 | Response headers | `public/_headers` | Network tab, or `curl -I` |
| 6 | Console signature | `src/main.jsx` | Open devtools |
| 7 | Lore JSON with the real timeline | `worker/transmission.js` | `/api/transmission` |
| 8 | In-character API 404 | `worker/index.js` | Any wrong `/api/` path |
| 9 | `/archive` | `src/pages/Archive.jsx` | #1, #2, #6, footer stamp |
| 10 | Footer breadcrumb | `src/components/Footer.jsx` | Hover `[REDACTED]` |
| 11 | Ghost routes | `src/data/ghosts.js` | Typing a dead domain name as a path |
| 12 | Whispers | `<Whisper>` on `/archive`, `/cult` etc | Highlighting an empty gap |
| 13 | Hover reveals | `<Redacted reveal>` | Hovering a censor bar |
| 14 | Glitched redactions | `<Redacted glitch>` | Visible, coming apart |

### The base64 line in humans.txt

```
aGkgdGhlcmUsIG5vc3kuIGdvb2QuIGtlZXAgZ29pbmcuCg==
```

Decodes to: `hi there, nosy. good. keep going.`

Deliberately trivial. It is a wink at anyone who recognises base64, not a
cipher. To make a new one, run it through any online base64 encoder - or in
the browser console, `btoa("your text")`.

### The response headers

`public/_headers` does double duty. The `Referrer-Policy: no-referrer`
line is real and it matters: without it, every site a member clicks
through to would learn they came from a mental health community. The
`X-Redacted` and `X-Note` lines are the ARG part.

Per-path headers work too - `/archive` gets its own set naming the three
unrecoverable domains. `/welcome` deliberately says it has no secrets,
because the safety page stays clean.

### Ghost routes

The four dead domains resolve as paths on the live site:

| Path | Was |
| --- | --- |
| `/idkreally` | idkreally.com - Ground Zero |
| `/sadsquad` | sadsquad.org - The Mothership |
| `/iiclout` | iiclout.com - The Creator Hub |
| `/cult` | isnotokay.com - The Cult |

Add one by adding an entry to `src/data/ghosts.js`. The route appears
automatically, because `/:slug` catches everything and falls through to the
404 for unknown names.

**One caveat:** that `/:slug` route matches any single-segment path, so
ghost slugs must never collide with a real page name. Real pages are
listed above it in `src/App.jsx` and win, but keep it in mind when adding
pages later.

## How to plant a new one

| Kind | Where to put it |
| --- | --- |
| Invisible on-page text | `<Whisper>` anywhere |
| Blacked-out text | `<Redacted>` anywhere |
| A new hidden page | `src/pages/`, add route at the bottom of `App.jsx` |
| A new dead site | one entry in `src/data/ghosts.js` |
| Machine-readable lore | edit the payload in `worker/transmission.js` |
| A header | `public/_headers` |
| A flat file | `public/` - it ships as-is |

## The rules, again, short

1. Never hide anything a person needs.
2. Never put anything on a timer.
3. Never make finding things a condition of belonging.
4. Nothing frightening. The unsettling thing here is loss, not threat.
5. No invented statistics, even in character.
6. Keep the lore true. Its entire strength is that it is checkable.

## Kept deliberately clean

`/welcome`, the crisis banner, `/contact`, and the crisis resource cards.
No redaction bars, no whispers, no glitch, no jokes. Someone arriving
there at 4am gets a plain page that works.
