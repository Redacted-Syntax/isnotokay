# How to change things yourself

This is the map. Every common change and the one file you touch to make it.

## "I want to change a color"

`src/styles/theme.css` - the block at the top called DESIGN TOKENS.

```css
--accent: #e63946;    /* every button, every label, every link */
--bg: #0a0a0f;        /* page background */
--text: #f1f1f1;      /* body text */
```

Change one value, save, and the whole site updates. **Never type a hex code
anywhere else.** If you find yourself writing `#e63946` inside a component,
use `var(--accent)` instead. That is the entire reason tokens exist.

## "I want to change wording on a page"

`src/pages/` - one file per page, named the obvious thing.

| Page on the site | File |
| --- | --- |
| Homepage | `Home.jsx` |
| About | `About.jsx` |
| Start here / safety | `Welcome.jsx` |
| Rooms | `Rooms.jsx` |
| Community guidelines | `Guidelines.jsx` |
| Shop | `Store.jsx` |
| Join | `Join.jsx` |
| 404 | `NotFound.jsx` |

The text is right there in the JSX. Edit it like HTML.

One gotcha: apostrophes in JSX need to be `&apos;` and quotes need
`&ldquo;` / `&rdquo;`. That is why the existing copy looks slightly odd in
the file but renders correctly in the browser.

## "I want to change the rooms"

`src/data/rooms.js` - a plain array. Add, remove, rename, rewrite the blurbs.
Both the homepage and the Rooms page read from this one file, so you only
edit it once.

## "I want to change the shop items"

`src/pages/Store.jsx`, the `ITEMS` array at the top.

## "I want to add a new page"

Three steps:

1. Make the file, e.g. `src/pages/Zines.jsx`. Copy an existing page as a
   starting point.
2. Import it in `src/App.jsx` and add a route:
   ```jsx
   <Route path="/zines" element={<Zines />} />
   ```
3. If you want it in the nav, add it to the `LINKS` array in
   `src/components/Nav.jsx`. If you want it in the footer, edit
   `src/components/Footer.jsx`.

## "I want to change the menu"

`src/components/Nav.jsx`, the `LINKS` array. Order in the array is order on
screen.

## "I want to change the crisis banner"

`src/components/CrisisBanner.jsx`

You can change the wording. Do not make it dismissible and do not move it
behind a login. It is deliberately the first thing on every page.

## "I want to change the waitlist form"

- How it looks: `src/styles/forms.css`
- What it says: `src/components/WaitlistForm.jsx`
- Where the data goes: `functions/api/waitlist.js`

## "I want to publish my changes"

```bash
git add .
git commit -m "what you changed"
git push
```

Cloudflare rebuilds automatically. About a minute.

To see it before you push: `npm run dev`, then open
http://localhost:5173

## Things that will bite you

**Blank white page.** You are probably using the Live Server extension
instead of `npm run dev`. Live Server serves raw files and never compiles
JSX. Use the terminal.

**"Cannot find package.json".** Wrong folder. `pwd` should end in
`/isnotokay`.

**A route 404s when you load it directly** but works when you click to it.
That is what `public/_redirects` fixes, and it is already in the repo. If it
happens in local dev only, that is normal Vite behaviour.

**The form says "not configured yet".** The Cloudflare secrets are missing.
See `docs/INTEGRATIONS.md`.

## The one rule

If you cannot figure out how to change something, that is a bug in how it was
built, not a gap in what you know. Ask and it gets restructured.
