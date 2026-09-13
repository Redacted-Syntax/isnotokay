import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";
import SignOff from "../components/SignOff.jsx";
import Whisper from "../components/Whisper.jsx";
import NotFound from "./NotFound.jsx";
import { GHOSTS } from "../data/ghosts.js";

// ---------- GHOST ROUTE ----------
//
// /idkreally, /sadsquad, /iiclout, /cult
//
// The dead sites answer from the living one. Someone reads the names on
// /archive and tries them as paths; this is what they get.
//
// Not in the nav, not in the sitemap. If the slug is not a known ghost it
// falls through to the normal 404.

export default function Ghost() {
  const { slug } = useParams();
  const ghost = GHOSTS[slug];

  if (!ghost) return <NotFound />;

  return (
    <>
      <PageHeader
        label="Gone"
        title={ghost.domain}
        lede={ghost.role}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote
            code="HOST_UNREACHABLE"
            status={`last seen ${ghost.died}`}
            variant="classified"
          >
            <p>
              This one is not here any more. The domain lapsed and somebody
              else owns it now, or nobody does.
            </p>
            <p>
              Cause of death: {ghost.cause}
            </p>
            <SignOff note="kept anyway" />
          </SystemNote>

          <div style={{ maxWidth: "var(--max-read)", marginInline: "auto" }}>
            <article className="fragment fragment--lost">
              <div className="fragment__meta">
                <span>recovered text</span>
                <span>via wayback</span>
              </div>
              <p className="fragment__quote">{ghost.epitaph}</p>
            </article>
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>You typed a dead address</h2>
            <p>
              And it answered, which is more than the real one does. Every
              name on <Link to="/archive">the archive</Link> works like this.{" "}
              <Whisper>four of them. try the last one.</Whisper>
            </p>
            <p>
              Nothing here is a puzzle you have to solve. If tonight is bad,{" "}
              <Link to="/welcome">this is the page</Link> instead.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
