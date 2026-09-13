// ---------- THE WORKER ----------
//
// Server-side code. Runs on Cloudflare, not in the browser.
//
// Only requests matching "run_worker_first" in wrangler.jsonc reach this
// file. Right now that is /api/*. Everything else is served straight from
// dist/ as a static file, which is why the site stays fast.
//
// This is where secrets are safe to use. Nothing in src/ is, because src/
// gets bundled and shipped to the browser.
//
// SECRETS (set in the dashboard, never in this repo):
//   Worker -> Settings -> Variables and Secrets
//     AIRTABLE_TOKEN   your Airtable personal access token (type: Secret)
//
// Non-secret config lives in wrangler.jsonc under "vars".

import { handleWaitlist } from "./waitlist.js";
import { handleContact } from "./contact.js";
import { handleTransmission } from "./transmission.js";

// ---------- ROUTES ----------
// path -> { method, handler }
// To add an endpoint: write the handler in its own file, import it above,
// and add a line here.
const ROUTES = {
  "/api/waitlist": { method: "POST", handler: handleWaitlist },
  "/api/contact": { method: "POST", handler: handleContact },
  "/api/transmission": { method: "GET", handler: handleTransmission },
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const route = ROUTES[url.pathname];

    if (!route) {
      // Unknown /api/ path. In character, but still a real 404.
      return Response.json(
        {
          error: "Not found.",
          note: "no such endpoint. /api/transmission is the one you want.",
        },
        { status: 404 }
      );
    }

    if (request.method !== route.method) {
      return Response.json({ error: `${route.method} only.` }, { status: 405 });
    }

    return route.handler(request, env);
  },
};
