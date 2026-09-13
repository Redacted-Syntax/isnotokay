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
//     AIRTABLE_BASE    appgdJPjWXPGgfF2E                   (type: Text)
//     AIRTABLE_TABLE   Waitlist                            (type: Text)

import { handleWaitlist } from "./waitlist.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ---------- ROUTES ----------
    // Add new endpoints here. Keep each one in its own file under worker/
    // and import it, the same way waitlist works.

    if (url.pathname === "/api/waitlist") {
      if (request.method !== "POST") {
        return Response.json({ error: "POST only." }, { status: 405 });
      }
      return handleWaitlist(request, env);
    }

    // Unknown /api/ path. A clear 404 beats a confusing one.
    return Response.json({ error: "Not found." }, { status: 404 });
  },
};
