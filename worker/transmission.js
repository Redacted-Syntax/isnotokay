// ---------- TRANSMISSION ----------
//
// GET /api/transmission
//
// A lore endpoint. Returns JSON, holds nothing sensitive, and exists so
// that anyone poking at /api/ finds something instead of a wall.
//
// Discoverable via: the X-See-Also response header, or by trying /api/
// paths after finding /api/waitlist in the page source.
//
// Edit the payload freely - it is the easiest place to drop a new clue
// without touching a component. Nothing here should ever be a puzzle a
// person needs to solve.

export async function handleTransmission(request, env) {
  const payload = {
    from: "[REDACTED]",
    build: "0.1.0",
    status: "under construction, just like us",

    note: [
      "you went looking through the api. good.",
      "nothing in here is required. no puzzle gates anything that matters.",
      "if tonight is bad: /welcome, or 988.",
    ],

    attempt: 4,
    attempts_lost: 3,

    // Real history. Every date here actually happened.
    timeline: [
      { when: "2024-03", what: "idkreally network goes up on joomla. four sites promised." },
      { when: "2024-2025", what: "idkreally.com, sadsquad.org, iiclout.com all lapse." },
      { when: "2026-05", what: "isnotokay.com rebuilt. fake testimonials. archived, then abandoned." },
      { when: "2026-07-17", what: "isnotokay.com expires. nobody notices for weeks." },
      { when: "2026-09-13", what: "isnotokay.org registered at 1am. this one." },
    ],

    known_unknowns: {
      launch_date: "[REDACTED]",
      member_count: 0,
      how_many_more_attempts: "[REDACTED]",
    },

    // Ghost routes. They resolve, in character.
    see_also: [
      "/archive",
      "/humans.txt",
      "/robots.txt",
      "/.well-known/security.txt",
    ],

    signed: "[REDACTED]",
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store",
      "X-Note": "you found the transmission. there is no prize. sorry.",
    },
  });
}
