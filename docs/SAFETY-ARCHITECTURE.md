# Safety architecture

The two pages that look similar and must never be merged.

## /welcome - public

No account. No login. No gate. Anyone can read it, including someone who
will never sign up.

Holds the crisis resource library, the clear line about what peer support is
not, and the honest limits on response times.

**Why it must stay public:** 988 Lifeline guidance for community spaces is
that crisis resources have to be reachable without registering, because the
person who needs them most is frequently the one who never made an account.
Putting this behind a signup wall is a safety bug, not a product decision.

It is in the main nav as "Safety" and it stays there permanently.

## /onboarding - after signup

Requires an account. Sits between registration and the feed.

Three numbered steps: know the boundary, keep the circle kind, choose your
privacy pace. Two required checkboxes plus two privacy choices, then
"I understand - enter the circle."

**Why it exists separately:** this is a consent gate, and a consent gate only
means anything if it is attached to a person and a moment in time. The
timestamp is the artifact. It records that this specific member was told
peer support is not professional care *before* they posted anything.

It is linked from the footer as "What you agree to" so people can read it
before deciding to join. Reading it early is good. It is still enforced at
signup.

## Phase 3 implementation

```sql
alter table profiles
  add column consented_at timestamptz,
  add column allow_dms boolean default false,
  add column profile_visible boolean default true;
```

1. Wrap `/onboarding` in `<ProtectedRoute>`.
2. Both required checkboxes must be ticked before the button enables.
3. On submit, write `consented_at = now()` plus the two privacy booleans.
4. Redirect to the feed. On later visits, if `consented_at` is set, skip it.
5. Keep `consented_at` forever, even if the member deletes their posts.
6. Both privacy choices must be editable in settings afterwards.

## Note the asymmetric defaults

DMs default to **off**. Profile visibility defaults to **on**.

That is intentional. Someone clicking through a form quickly should land on
the safer option for the choice that can actually hurt them, and a stranger
being able to message you directly is the one with teeth. A visible profile
with no identifying details in it is comparatively harmless.

## The crisis banner

`src/components/CrisisBanner.jsx` renders outside the router in
`src/App.jsx`, above the nav, on every single page.

Not dismissible. Not conditional. Not behind auth. If you are ever tempted
to add a close button, the reason it does not have one is that the moment
someone needs it is the moment they are least likely to go looking.

## Resource maintenance

`src/data/resources.js` carries a `reviewed` date on every entry.

Re-check the numbers and links every few months and bump the dates. Stale
crisis information is worse than none, because it is trusted. A resource you
have not verified in a year should either be checked or removed.

Every entry also carries a `caveat`. Never ship one without it. The most
important sentence in the whole library is "This library cannot contact
emergency responders for you," because it stops someone from assuming help
is already on the way.
