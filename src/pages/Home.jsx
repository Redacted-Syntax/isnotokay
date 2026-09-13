import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import WaitlistForm from "../components/WaitlistForm.jsx";
import Redacted from "../components/Redacted.jsx";
import { ROOMS } from "../data/rooms.js";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__glow" />

        <div className="wrap hero__content center">
          <span className="label anim-up-1" style={{ marginBottom: "2rem" }}>
            isnotokay.org
          </span>

          <div
            className="anim-up-2"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            <div className="line-expand" />
          </div>

          {/* data-text feeds the glitch layers. Keep it identical to the */}
          {/* visible words or the effect smears. */}
          <h1
            className="anim-up-2 glitch h-glitch"
            data-text="For the beautifully unhinged"
          >
            For the beautifully unhinged
          </h1>

          <p className="lede anim-up-3" style={{ marginTop: "1.5rem" }}>
            You found us. Or maybe we found you. Either way, welcome to the
            mess. A digital fever dream stitched together with caffeine,
            late-night overthinking, internet trauma, and some genuinely solid
            code.
          </p>

          <div className="row anim-up-4" style={{ marginTop: "2.5rem" }}>
            <Button to="/about">What even is this</Button>
            <Button to="/welcome" variant="ghost">
              Safety first
            </Button>
          </div>

          <p className="strip anim-up-5" style={{ marginTop: "3rem" }}>
            <span>
              status <b>under construction</b>
            </span>
            <span>
              members <b>[redacted]</b>
            </span>
            <span>
              launch <b>soon-ish</b>
            </span>
            <span>
              uptime <b>optimistic</b>
            </span>
          </p>
        </div>
      </section>

      {/* ---------- WHAT EVEN IS THIS ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="label">What even is this</span>
            <h2>You can be smart, funny, online, and still not be okay.</h2>
            <p className="lede">
              A network. A project. A club. A cry for help in the form of HTML.
              Pick your poison. Think internet dive bar rather than wellness
              app: the lights are low, nobody is going to ask if you have tried
              yoga, and the merch is genuinely good.
            </p>
          </div>

          <div className="grid">
            <Card title="No highlight reel">
              <p>
                Nobody here needs you to perform recovery to be allowed in.
                &ldquo;Today was bad and I have no insight about it&rdquo; is a
                complete sentence and a complete post.
              </p>
            </Card>

            <Card title="Dark humor, actual rules">
              <p>
                Gallows humor about your own life is the house language.
                Encouraging someone else toward the edge is what gets you gone.
                There is a difference and this place will hold it.
              </p>
            </Card>

            <Card title="Not a clinic, not pretending">
              <p>
                No professionals on staff. No algorithm deciding what you need.
                No chatbot doing a therapist impression with a{" "}
                <code>try/catch</code> around your feelings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- ROOMS ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Ways in</span>
            <h2>Four rooms, one house</h2>
            <p className="lede">
              Doors, not diagnoses. Entry points, not clinical products
              pretending to know you better than you do.
            </p>
          </div>

          <div className="grid">
            {ROOMS.map((room) => (
              <Card key={room.slug} title={room.name} tag={room.status}>
                <p>{room.blurb}</p>
              </Card>
            ))}
          </div>

          <div
            className="row"
            style={{ marginTop: "2rem", justifyContent: "center" }}
          >
            <Button to="/rooms" variant="quiet">
              More about the rooms
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER ---------- */}
      {/* The only quote on this site is hers, because she is the only member */}
      {/* so far. No testimonials until there are real people to quote. */}
      <section className="section">
        <div className="wrap center">
          <div className="section-head">
            <span className="label">Why this exists</span>
          </div>

          <blockquote className="callout callout--center">
            <p style={{ fontSize: "1.05rem", color: "var(--text)" }}>
              &ldquo;I got tired of pretending to be okay, and more tired of
              the places that wanted me to perform being fine before they would
              let me in.&rdquo;
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
              Redacted, founder &middot; real name{" "}
              <Redacted>not your business</Redacted>
            </p>
          </blockquote>

          <p className="lede">
            Being self-aware is not the same as being rescued. You are allowed
            to be a work in progress in public.
          </p>
        </div>
      </section>

      {/* ---------- WAITLIST ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="label">The list</span>
            <h2>Get on the list</h2>
            <p className="lede">
              No countdown timer, no fake urgency, no launch date invented to
              make you feel something. Get updates, existential thoughts, and
              early access. We promise to only email when we are having a
              crisis, which is often.
            </p>
          </div>

          <WaitlistForm source="isnotokay.org" />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Questions</span>
            <h2>Things people ask</h2>
          </div>

          <div className="prose">
            <h2>So what is it, actually?</h2>
            <p>
              A message board for people who are not okay. Rooms for different
              flavors of not okay, a shop that pays the bills, and a rule set
              designed so that being honest does not get you piled on or fixed
              at.
            </p>

            <h2>Is this therapy?</h2>
            <p>
              No, and it is not a crisis line either. It is peer support, which
              is the thing where other people who have been there say so out
              loud. Good for feeling less alone. Bad for emergencies. Use both.
            </p>

            <h2>Who is behind it?</h2>
            <p>
              One person with the diagnoses to prove it, building this in public
              and learning the backend as she goes.{" "}
              <Link to="/about">More on that here.</Link>
            </p>

            <h2>What happens to what I post?</h2>
            <p>
              It stays here. Nothing gets sold, nothing gets handed to
              advertisers, no pixel is watching which room you opened.{" "}
              <Link to="/health-data">The specifics are here</Link> and they are
              written in English.
            </p>

            <h2>When does it open?</h2>
            <p>
              <Redacted reveal hint="nice try">
                when the report button works
              </Redacted>
              . The tools that keep people safe have to exist before anyone gets
              invited to be vulnerable here. That is the whole holdup and it is
              the right one.
            </p>

            <h2>Is this a cult?</h2>
            <p>Legally, no.</p>

            <h2>Can I ask something else?</h2>
            <p>
              <Link to="/contact">Yes.</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
