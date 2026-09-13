import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";
import SignOff from "../components/SignOff.jsx";
import Whisper from "../components/Whisper.jsx";
import { FRAGMENTS } from "../data/fragments.js";

// ---------- /archive ----------
//
// Not in the nav. Reachable by anyone who reads robots.txt, opens the
// console, or hovers the footer stamp.
//
// Everything on this page is factually true - four real sites, three real
// dead domains, real quotes from the real dead pages. That is what makes
// it work as lore rather than as a bit.
//
// See docs/ARG.md. The one rule: nothing anybody needs is hidden here.

const STATUS_LABEL = {
  lost: "status: gone",
  expiring: "status: in redemption",
  alive: "status: online",
};

export default function Archive() {
  return (
    <>
      <PageHeader
        label="Recovered"
        title="The archive"
        lede="There were other sites before this one. Four of them. Three are gone and one is this. Everything on this page actually existed."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote
            code="ARCHIVE_PARTIAL"
            status="3 of 5 unrecoverable"
            variant="classified"
          >
            <p>
              Domains expire. Whole websites go quiet because one person forgot
              a renewal email, and there is no appeal and nobody to call. What
              is below is what could be pulled back out of the{" "}
              <Redacted glitch>Wayback Machine</Redacted> before it went for
              good.
            </p>
            <p>
              Cause of loss, in every case: <Redacted>money</Redacted>
            </p>
            <SignOff note="recovered by" />
          </SystemNote>

          <div style={{ maxWidth: "var(--max-read)", marginInline: "auto" }}>
            {FRAGMENTS.map((f) => (
              <article
                key={f.domain}
                className={`fragment ${
                  f.state === "lost" ? "fragment--lost" : ""
                }`}
              >
                <div className="fragment__meta">
                  <span>{STATUS_LABEL[f.state]}</span>
                  <span>last seen: {f.lastSeen}</span>
                </div>

                <p className="fragment__domain">{f.domain}</p>
                <p
                  className="mono"
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.role}
                </p>
                <p className="fragment__quote">{f.quote}</p>
              </article>
            ))}
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>Why keep a graveyard on the website</h2>
            <p>
              Because the alternative is pretending this is the first attempt,
              and it is the fourth. Every previous version got prettier and
              less honest, invented members it did not have, and then went dark
              anyway.
            </p>
            <p>
              This page is the receipt. If this one goes quiet too, at least
              the record says what it was for.{" "}
              <Whisper>it is not going quiet this time</Whisper>
            </p>

            <h2>Nothing here is required</h2>
            <p>
              You found a hidden page. There are a couple more and they are all
              like this one: old text, real history, no puzzle you have to
              solve. Nothing that matters is ever behind a riddle. If tonight is
              bad, the <Link to="/welcome">safety page</Link> is the one to read
              instead.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
