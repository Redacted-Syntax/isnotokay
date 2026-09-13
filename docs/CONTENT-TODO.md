# Content TODO

The scaffold has real copy in it, but it is copy assembled from the archived
site and the founder's own words. It needs a pass in her actual voice.

## Write yourself, do not generate

- [ ] **Community guidelines** (`src/pages/Guidelines.jsx`) - the most
      important document on the site. The structure is adapted from #chatsafe
      and the Samaritans online community guidelines. Replace the wording with
      yours; keep rules 2, 3, and 4, which are the safety-critical ones.
- [ ] **The founder paragraph** on `/about` - currently written around you
      rather than by you.
- [ ] **The one quote on the homepage** - it is a paraphrase. Replace it with a
      real sentence you actually said.

## Do not add

- [ ] No testimonials. Not from friends, not composites, not representative
      examples. The FTC rule covers testimonials attributed to people who do
      not exist, and the entire premise of this site is that it does not fake
      the highlight reel.
- [ ] No member counts, visitor counts, or percentage-complete bars.
- [ ] No coming-soon dates you are not certain of. The concept status in
      `src/data/rooms.js` is the honest version.

## Assets still needed

- [ ] Logo / wordmark (SVG preferred)
- [ ] `favicon.svg` in `public/`
- [ ] Open Graph image, 1200x630, for link previews
- [ ] Anything worth pulling from the Canva beta

## Before launch

- [ ] Real terms, privacy policy, and the separate consumer health data policy
- [ ] Verify no third-party scripts load on any page
- [ ] Test every route by loading it directly, not just by clicking
- [ ] Read the whole site on a phone
- [ ] Confirm the crisis banner is visible on every single page
