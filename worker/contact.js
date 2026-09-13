// ---------- CONTACT HANDLER ----------
//
// Writes one row to the Messages table in Airtable.
//
// Same pattern as the waitlist: runs server-side so the Airtable token
// never reaches the browser. To add another endpoint later, copy this file,
// change the fields, and add a route in worker/index.js.

function looksLikeEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function handleContact(request, env) {
  if (!env.AIRTABLE_TOKEN || !env.AIRTABLE_BASE) {
    console.error("Contact: AIRTABLE_TOKEN or AIRTABLE_BASE is not set");
    return Response.json(
      { error: "The contact form is not configured yet." },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Could not read that message." },
      { status: 400 }
    );
  }

  const email = (payload.email || "").trim().toLowerCase();
  const name = (payload.name || "").trim();
  const topic = (payload.topic || "Something else").trim();
  const message = (payload.message || "").trim();

  if (!looksLikeEmail(email)) {
    return Response.json(
      { error: "Need an email address to reply to." },
      { status: 400 }
    );
  }

  if (message.length < 2) {
    return Response.json({ error: "The message is empty." }, { status: 400 });
  }

  // Cap the length so nobody can post a novel into your Airtable.
  const trimmed = message.slice(0, 5000);

  const table = encodeURIComponent(env.AIRTABLE_CONTACT_TABLE || "Messages");
  const endpoint = `https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${table}`;

  const fields = {
    Email: email,
    Topic: topic,
    Message: trimmed,
    Status: "new",
    Received: new Date().toISOString(),
  };

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
      console.error("Airtable rejected the message:", res.status, await res.text());
      return Response.json(
        { error: "Could not send that. Try again in a bit?" },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact request failed:", err);
    return Response.json(
      { error: "Could not send that. Try again in a bit?" },
      { status: 502 }
    );
  }
}
