// ---------- CRISIS RESOURCES ----------
//
// Edit this file to change what appears on /welcome and /resources.
// Both pages read from here, so you only update it once.
//
// Every entry carries a `reviewed` date and a `source`. That is deliberate:
// stale crisis information is dangerous, and an unsourced phone number asks
// people to trust it for no reason. Re-check these every few months and bump
// the date.
//
// `caveat` is the honest limitation. Never omit it. "This library cannot
// contact emergency responders for you" is the most important sentence on
// the page, because it prevents someone from assuming help is already on the
// way.

export const CRISIS_RESOURCES = [
  {
    kind: "Emergency help",
    name: "Local emergency services",
    blurb:
      "If you or someone else is in immediate danger, call your local emergency number now. In the United States, that is 911.",
    caveat:
      "Emergency numbers and response options vary by location. This library cannot contact emergency responders for you.",
    actionLabel: "Find local crisis support",
    actionHref: "https://findahelpline.com",
    sourceLabel: "Find A Helpline directory",
    sourceHref: "https://findahelpline.com",
    reviewed: "September 2026",
  },
  {
    kind: "Crisis line",
    name: "988 Suicide & Crisis Lifeline",
    blurb:
      "In the United States and its territories, call or text 988 for free, confidential support during a mental health or suicide crisis.",
    caveat:
      "988 is for people in the United States and its territories. If there is immediate physical danger, call local emergency services.",
    actionLabel: "Call or text 988",
    actionHref: "tel:988",
    sourceLabel: "988 Lifeline",
    sourceHref: "https://988lifeline.org",
    reviewed: "September 2026",
  },
  {
    kind: "Crisis line",
    name: "Crisis Text Line",
    blurb:
      "Text HOME to 741741 to reach a trained volunteer crisis counselor by text message, free, 24/7.",
    caveat:
      "Available in the US, UK, Canada, and Ireland. Numbers differ by country.",
    actionLabel: "Text HOME to 741741",
    actionHref: "sms:741741",
    sourceLabel: "Crisis Text Line",
    sourceHref: "https://www.crisistextline.org",
    reviewed: "September 2026",
  },
  {
    kind: "Crisis line directory",
    name: "Find a Helpline",
    blurb:
      "Search for a crisis line, text service, or chat in your country when you need a more local option.",
    caveat:
      "Listings, languages, eligibility, and hours differ by country. Check the listing before relying on a service.",
    actionLabel: "Find a helpline",
    actionHref: "https://findahelpline.com",
    sourceLabel: "Find A Helpline",
    sourceHref: "https://findahelpline.com",
    reviewed: "September 2026",
  },
];
