# The ARG layer

An alternate reality game, in the Welcome Home sense: hidden pages, files
that talk back, a narrator who is not quite telling you everything. Built
on top of a real support site, which changes the rules.

## The premise, and why it works

**Everything in the lore is true.**

There really were four sites. `idkreally.com`, `sadsquad.org`, and
`iiclout.com` really are gone. `isnotokay.com` really did expire in July
2026 and is really sitting in its redemption window right now. The quotes
on `/archive` are the actual words that were on the actual dead pages.

That is the whole engine. Welcome Home works because its fiction is
airtight; this works because there is no fiction to keep airtight. Someone
digging into the Wayback Machine does not find the seams, they find
corroboration. The mystery is a real one: a person kept building a place
for sad people on the internet, kept losing the domains, and kept coming
back.

The narrator is `[REDACTED]`, who is also the founder, who is also the
person signing the censor marks. She is redacting her own website. That is
not a costume, it is just accurate.

## THE SAFETY RULES - read these before adding anything

ARGs work by creating compulsion. Hunting, refreshing, staying up until
4am to see if a page changed. That is the point of the form, and it is
**dangerous for this specific audience**: isolated people, anxious people,
people with bad sleep and worse coping mechanisms. Welcome Home's audience
was horror fans. Ours is people who are not okay.

So:

1. **Nothing anyone needs is ever hidden.** No crisis resource, no safety
   notice, no way to reach a human, is ever behind a puzzle. The crisis
   banner, `/welcome`, and `/contact` stay boring and reachable forever.
2. **No time pressure. No FOMO. Nothing expires.** No countdowns, no
   limited windows, no "you had to be there." Anything discoverable stays
   discoverable. Someone who finds it in a year gets the whole thing.
3. **Never a condition of belonging.** Solving nothing has zero effect on
   membership, status, or visibility. There will be no lore badges and no
   puzzle leaderboard. The moment insiders exist, a support community has
   an out-group.
4. **Every entrance says it is optional.** `robots.txt`, the console
   message, and `/archive` all state plainly that no puzzle is required and
   point at `/welcome` if tonight is bad. Keep doing that.
5. **Nothing frightening.** No jumpscares, no simulated surveillance, no
   "we know where you are," no fake DMs from the narrator. The unsettling
   thing in this ARG is *loss* - dead domains, missing archives - not
   threat.
6. **No fake statistics, ever, even in character.** Inventing "500 members"
   was the original sin of every previous version. It stays dead.

If a mechanic needs someone anxious to keep checking back, cut it.

## What is built (v0.1.0)

| Thing | Where | How it is found |
| --- | --- | --- |
| `robots.txt` message | `public/robots.txt` | Typing `/robots.txt` |
| Console signature | `src/main.jsx` | Opening devtools |
| `/archive` | `src/pages/Archive.jsx` | robots.txt, console, footer stamp |
| Footer breadcrumb | `src/components/Footer.jsx` | Hovering `[REDACTED]` |
| Whisper text | `src/components/Whisper.jsx` | Highlighting an empty gap |
| Glitched redactions | `src/components/Redacted.jsx` | Visible, unreadable-ish |
| Hover reveals | `<Redacted reveal>` | Hovering a censor bar |

The trail: `robots.txt` -> `/archive` -> a whisper on that page. Three
steps, each one a dead end that is also a small reward. Nobody gets stuck.

## Components

```jsx
<Redacted>hidden forever</Redacted>
<Redacted glitch>readable but coming apart</Redacted>
<Redacted reveal hint="nice try">hover to uncover</Redacted>
<Whisper>invisible until highlighted</Whisper>
<SignOff note="audited by nobody" />
```

## Ideas for later, roughly in order of how much they cost

**Cheap, no backend:**

- More whispers, one per page, all in `[REDACTED]`'s voice.
- A `/humans.txt` written as a letter rather than the usual credits file.
- More fragments in `src/data/fragments.js` as more old text surfaces.
- A `?` route like `/idkreally` that 404s in character: "that one is gone."
- HTML comments in `index.html` that read as marginalia.
- A hidden `/changelog` written as a recovery log rather than release notes.

**Needs the backend (Dec/Jan or later):**

- Redactions that come off as the real thing they hid becomes true. When
  the rooms actually open, the `[REDACTED]` on the launch date lifts. The
  ARG resolves by the project succeeding, which is a genuinely nice shape.
- A members-only `/archive` layer with the older, rougher drafts.
- The 2024 beta rehosted at a subpath as a museum piece, with the fake
  testimonials struck through and annotated.

**Things to never build:**

- Anything on a timer.
- Anything that messages the visitor unprompted.
- Anything that implies being watched.
- Anything that rewards solving with status inside the community.

## The tone

`[REDACTED]` is not a horror narrator. She is tired, funny, and a bit
embarrassed about how many times she has restarted this. The voice should
read like someone annotating their own failures at 3am - affectionate about
the wreckage, unwilling to pretend it did not happen.

When in doubt: the mystery is not "what is wrong with this website." It is
"who keeps building this, and why do they keep coming back."
