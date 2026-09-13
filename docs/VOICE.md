# Voice bank

Every good line from every version of this project, plus the rules for the
redaction system. Nothing has to be rewritten from memory again.

Four versions exist: the March 2024 Canva/Joomla beta, the multi-page site
archived in May 2026, the single-page Netlify rebuild, and the Polsia app.
The 2024 beta is the rawest and the funniest. The target is the 2024 voice
with the 2026 structure.

## THE REDACTION SYSTEM

The founder is called Redacted. So the site redacts things. That is the
whole visual language and it does two jobs at once: it is funny, and it is
how unfinished parts get owned instead of apologised for.

### `<Redacted>` - the blackout bar

```jsx
<Redacted>not your business</Redacted>
<Redacted reveal hint="nice try">when the report button works</Redacted>
```

Without `reveal`, it stays blacked out forever and the hidden text is a
joke for people who open devtools. With `reveal`, hovering uncovers it.
Both are correct. Use it for:

- things genuinely private (her real name)
- punchlines (`Estimated ship date: [redacted]`)
- honest answers that are funnier hidden (`blocked on $425`)

### `<SystemNote>` - the fake terminal block

```jsx
<SystemNote code="ERR_NO_INVENTORY" status="cart disabled" variant="error">
  <p>Nothing here is for sale...</p>
</SystemNote>
```

This replaced every grey "placeholder, coming soon" box. Variants:
`error` (broken or missing), `pending` (still building), `classified`
(deliberately withheld).

The last paragraph gets a blinking cursor automatically, so do not put a
full stop on it. It reads as a live terminal, mid-thought.

Codes currently in use:

| Page | Code | Status |
| --- | --- | --- |
| /rooms | `ERR_ROOM_NOT_FOUND` | 4 of 4 missing |
| /store | `ERR_NO_INVENTORY` | cart disabled |
| /join | `AUTH_NOT_IMPLEMENTED` | phase 2 of 4 |
| /guidelines | `RULES_V0.9` | pre-release |
| /terms | `DOC_UNSIGNED` | not binding |
| /privacy | `POLICY_PENDING` | draft |
| /health-data | `HEALTH_DATA_SCOPE` | currently: none |
| /onboarding | `SIM_MODE` | dress rehearsal |
| 404 | `404_NOT_FOUND` | same |

### THE ONE HARD RULE

**Never wrap safety content in this.** No redaction bars over crisis
numbers, no fake error boxes around the 988 line, no glitch on the phone
number. Crisis information has to read as plain and true. A joke frame
around a real emergency resource is the one unfunny thing this site could
do.

So: the crisis banner, the crisis cards on `/welcome`, and the "clear line"
panel all stay completely straight. Everything else can play.

## Status tags on cards

Instead of a polite "Concept" pill, cards carry a terminal-style tag with a
pulsing dot. Rooms use `not deployed`, `in dev hell`, `awaiting cat`,
`ironic, pending`. Shop items use `unprinted`, `no mold yet`, `undrawn`,
`unsequenced`. Edit them in `src/data/rooms.js` and `src/pages/Store.jsx`.

## The thesis lines

> A space for people who are not okay and need a space to find their okay.

> For the beautifully unhinged, painfully self-aware, and terminally online.

> You can be smart, funny, online, and still not be okay.

> Self-awareness is not the same thing as self-rescue.

> You are allowed to be a work in progress in public.

> We're all in this mess together.

## The 2024 beta - the good stuff

Written in one sitting and it shows, in the best way.

> You found us. Or maybe we found you. Either way... welcome to the mess.

> This isn't just a website. It's a digital fever dream stitched together
> with caffeine, late-night overthinking, internet trauma, and some
> genuinely solid code.

> A network. A project. A club. A cry for help in the form of HTML. Pick
> your poison.

> Think of it like an internet dive bar with curated chaos and merch drops.

> It's club-meets-forum, but for Zillennials with ironic tattoos and
> imposter syndrome. No judgment. Just emotional depth and questionable
> coping mechanisms.

> All of it's under construction, just like us.

> Your presence here is already a form of support. Your love is seen. Your
> clicks are appreciated. Your emotional damage will be monetized
> (eventually).

> A subscription system with perks, chaos, and possible cult membership
> (legally not a cult).

> Member-only content, forums, and whatever else the void demands.

> Blog posts, collaborative art, and community-led spiraling.

> Get updates, existential thoughts, and early access. We promise to only
> email when we're having a crisis (often).

> When it all launches, you'll want to say you were here before it got
> weird. (It's already weird.)

> With love, angst, and absurdity.

> Follow along. Bookmark us. Check back often. Or don't. IDK really.

> All rights reserved (or whatever).

## SadSquad

> For people who text "lol" while crying. It's not a phase - it's a group
> project.

From the existing Typeform:

> Sad Squad? Wanna join or learn more? ...okay... Takes 15 sec

That "...okay..." as a button label is perfect and should survive.

## Room and feature lines worth keeping

> Cat Lovers Welcome - sometimes pets are better company than humans.

> Safe Spaces - moderated forums and groups where vulnerability is
> protected, not exploited.

> Merch with Meaning - wear your truth.

> Entry points, not clinical products pretending to know you better than
> you do.

## Merch names

Emotionally Unavailable Hoodie. Dissociation Tee. BPD Favorite Person Tee.
Not Okay Pin Set. Anxiety Playlist. "The Cult Shop" as the store name.
"The Cult of Controlled Chaos" as a tagline.

## What the 2024 version did better

1. **Jokes with teeth.** "Your emotional damage will be monetized
   (eventually)" beats any of the polished 2026 copy.
2. **Admitted it was unfinished** and made that the charm, instead of
   papering over it with invented statistics.
3. **Specific, not universal.** "Zillennials with ironic tattoos and
   imposter syndrome" tells you exactly who it is for. "People navigating
   mental health challenges" could be any wellness brand alive.
4. **Sounded like one person**, not a committee.

## What every version did wrong

All four carried invented social proof: testimonials from Jamie T., Morgan
P., Taylor M., Jordan P., Riley S., a member profile for "Alex K.", plus
"500+ Active Members", "12K+ Monthly Visitors", "5+ Planned Network Sites",
"65% dev progress", and "CultShop: NOW OPEN" when it was not open.

None of it goes in the rebuild. The FTC Consumer Reviews and Testimonials
Rule covers testimonials attributed to people who do not exist, and more to
the point: a brand whose whole premise is refusing the highlight reel
cannot run a fake one.

The honest version of social proof is what the 2024 beta did by accident -
say it is unfinished, be funny about it, let that be the draw. That is now
the entire redaction system.
