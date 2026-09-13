// ---------- WAITLIST API ----------
//
// This is a Cloudflare Pages Function. The folder structure IS the route:
//   functions/api/waitlist.js  ->  https://isnotokay.org/api/waitlist
//
// It deploys automatically with the site. No separate worker, no wrangler,
// no extra dashboard project.
//
// WHY THIS FILE EXISTS AT ALL:
// The Airtable key must never appear in frontend code. Anything in src/ gets
// bundled and shipped to the browser, which means anyone can read it and
// write to your base. This file runs on Cloudflare's server instead, so the
// key stays secret and the browser only ever talks to your own domain.
//
// SECRETS (set these in the Cloudflare dashboard, never in this repo):
//   Pages project -> Settings -> Variables and secrets
//     AIRTABLE_TOKEN   your Airtable personal access token (mark as Secret)
//     AIRTABLE_BASE    appgdJPjWXPGgfF2E
//     AIRTABLE_TABLE   Waitlist

const JSON_HEADERS = { "Content-Type": "application/json" };

function reply(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

// Deliberately loose. Real validation is Airtable's job and a bounced email
// is not worth rejecting a real person over a regex.
function looksLikeEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function onRequestPost({ request, env }) {
  // If the secrets are missing, say so clearly instead of failing silently.
  if (!env.AIRTABLE_TOKEN || !env.AIRTABLE_BASE) {
    console.error("Waitlist: AIRTABLE_TOKEN or AIRTABLE_BASE not set");
    return reply(500, { error: "The waitlist is not configured yet." });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return reply(400, { error: "Could not read that submission." });
  }

  const email = (payload.email || "").trim().toLowerCase();
  const name = (payload.name || "").trim();
  const source = payload.source || "isnotokay.org";
  const consent = payload.consent === true;

  if (!looksLikeEmail(email)) {
    return reply(400, { error: "That email address does not look right." });
  }

  // No consent, no record. We do not keep an address we are not allowed to
  // use, and for a mental health project that is the whole ballgame.
  if (!consent) {
    return reply(400, { error: "Please tick the box so we can email you." });
  }

  const table = encodeURIComponent(env.AIRTABLE_TABLE || "Waitlist");
  const url = `https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${table}`;

  const fields = {
    Email: email,
    Source: source,
    Status: "new",
    Consent: true,
    "Signed up": new Date().toISOString(),
  };

  // Only send Name if they actually gave one, so we do not write empty cells.
  if (name) fields.Name = name;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
    });

    if (!res.ok) {
      // Log the detail server-side. Never show Airtable's error to the user:
      // it can leak field and table names.
      console.error("Airtable rejected the write:", res.status, await res.text());
      return reply(502, { error: "Could not save that. Try again in a bit?" });
    }

    return reply(200, { ok: true });
  } catch (err) {
    console.error("Waitlist request failed:", err);
    return reply(502, { error: "Could not save that. Try again in a bit?" });
  }
}

// Anything other than POST gets a clear answer instead of a confusing 404.
export async function onRequestGet() {
  return reply(405, { error: "POST only." });
}
