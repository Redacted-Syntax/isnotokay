// ---------- WAITLIST HANDLER ----------
//
// Takes a form submission and writes one row to Airtable.
//
// WHY THIS RUNS ON THE SERVER:
// The Airtable token must never appear in frontend code. Anything in src/
// gets bundled and sent to the browser, where anyone can read it and write
// to your base. This file runs on Cloudflare instead, so the token stays
// secret and the browser only ever talks to your own domain.
//
// The old idkreally page did the opposite and put the token straight in the
// HTML. That is now structurally impossible here.

// Deliberately loose. Airtable does the real validation, and a bounced
// address is not worth rejecting a real person over a clever regex.
function looksLikeEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function handleWaitlist(request, env) {
  // If the secrets are missing, say so plainly instead of failing silently.
  if (!env.AIRTABLE_TOKEN || !env.AIRTABLE_BASE) {
    console.error("Waitlist: AIRTABLE_TOKEN or AIRTABLE_BASE is not set");
    return Response.json(
      { error: "The waitlist is not configured yet." },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Could not read that submission." },
      { status: 400 }
    );
  }

  const email = (payload.email || "").trim().toLowerCase();
  const name = (payload.name || "").trim();
  const source = payload.source || "isnotokay.org";
  const consent = payload.consent === true;

  if (!looksLikeEmail(email)) {
    return Response.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }

  // No consent, no record. We do not store an address we are not allowed to
  // use, and for a mental health project that is the whole ballgame.
  if (!consent) {
    return Response.json(
      { error: "Please tick the box so we can email you." },
      { status: 400 }
    );
  }

  const table = encodeURIComponent(env.AIRTABLE_TABLE || "Waitlist");
  const endpoint = `https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${table}`;

  const fields = {
    Email: email,
    Source: source,
    Status: "new",
    Consent: true,
    "Signed up": new Date().toISOString(),
  };

  // Only send Name if they gave one, so we do not write empty cells.
  if (name) fields.Name = name;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
    });

    if (!res.ok) {
      // Log the detail server-side. Never show Airtable's own error to the
      // visitor: it can leak table and field names.
      console.error("Airtable rejected the write:", res.status, await res.text());
      return Response.json(
        { error: "Could not save that. Try again in a bit?" },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Waitlist request failed:", err);
    return Response.json(
      { error: "Could not save that. Try again in a bit?" },
      { status: 502 }
    );
  }
}
