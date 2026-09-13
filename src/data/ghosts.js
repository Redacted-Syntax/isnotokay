// ---------- GHOST ROUTES ----------
//
// The dead sites, reachable as paths on the live one. Someone reads
// /archive, sees that sadsquad.org used to exist, tries
// isnotokay.org/sadsquad, and gets a page rather than a 404.
//
// All of this is real history. Add an entry and the route exists.

export const GHOSTS = {
  idkreally: {
    domain: "idkreally.com",
    role: "Ground Zero. The nucleus. The main character.",
    died: "2024",
    epitaph:
      "A network. A project. A club. A cry for help in the form of HTML. Pick your poison.",
    cause: "renewal email, unopened",
  },
  sadsquad: {
    domain: "sadsquad.org",
    role: "The Mothership.",
    died: "2024",
    epitaph:
      "For people who text 'lol' while crying. It's not a phase - it's a group project.",
    cause: "renewal email, unopened",
  },
  iiclout: {
    domain: "iiclout.com",
    role: "The Creator Hub.",
    died: "2024",
    epitaph:
      "Internet clout with a conscience. No gatekeeping, just gaslighting (lovingly).",
    cause: "renewal email, unopened",
  },
  cult: {
    domain: "isnotokay.com",
    role: "The Cult. A full-on therapy spiral, but sexy.",
    died: "July 2026",
    epitaph:
      "All of it's under construction, just like us. But your presence here is already a form of support.",
    cause: "expired. still inside the window. for now.",
  },
};
