import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import WaitlistForm from "../components/WaitlistForm.jsx";
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

          <h1 className="anim-up-2">
            For the beautifully unhinged
            <span className="cursor-blink" />
          </h1>

          <p className="lede anim-up-3" style={{ marginTop: "1.5rem" }}>
            A space for people who are not okay and need a space to find their
            okay. Painfully self-aware, terminally online, and just trying to
            navigate this mess called life.
          </p>

          <div className="row anim-up-4" style={{ marginTop: "2.5rem" }}>
            <Button to="/welcome">Start here</Button>
            <Button to="/about" variant="ghost">
              What this is
            </Button>
          </div>

          <p
            className="mono anim-up-5"
            style={{
              marginTop: "3rem",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Being built in public &middot; Not open yet
          </p>
        </div>
      </section>

      {/* ---------- WHAT MAKES US DIFFERENT ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1rem" }}>
            What makes us different
          </span>
          <h2 style={{ marginBottom: "2.5rem" }}>
            You can be smart, funny, online, and still not be okay.
          </h2>

          <div className="grid">
            <Card title="Authenticity first">
              <p>
                No filters, no highlight reels, no toxic positivity. Just real
                people sharing real experiences in a space where vulnerability
                is valued.
              </p>
            </Card>

            <Card title="Mental health focus">
              <p>
                We acknowledge the reality of mental health challenges and
                create spaces where discussing them isn&apos;t taboo. It&apos;s
                encouraged.
              </p>
            </Card>

            <Card title="Guardrails, not vibes">
              <p>
                Dark humor is welcome. Encouraging anyone to hurt themselves is
                not. There is a difference and this place will hold it.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- ROOMS ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1rem" }}>
            Ways in
          </span>
          <h2 style={{ marginBottom: "1rem" }}>Four rooms, one house</h2>
          <p className="lede" style={{ marginBottom: "2.5rem" }}>
            Entry points, not clinical products pretending to know you better
            than you do. None of them are open yet and this page will say so
            until they are.
          </p>

          <div className="grid">
            {ROOMS.map((room) => (
              <Card key={room.slug} title={room.name} tag="Concept">
                <p>{room.blurb}</p>
              </Card>
            ))}
          </div>

          <div className="row" style={{ marginTop: "2rem" }}>
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
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Why this exists
          </span>

          <blockquote className="callout" style={{ maxWidth: "var(--max-read)" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--text)" }}>
              &ldquo;I built this because I was tired of pretending to be okay
              when I wasn&apos;t, and tired of the places that wanted me to
              perform recovery to be allowed in.&rdquo;
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
              Founder, IsNotOkay
            </p>
          </blockquote>

          <p className="lede" style={{ marginTop: "2rem" }}>
            Self-awareness is not the same thing as self-rescue. You are allowed
            to be a work in progress in public.
          </p>
        </div>
      </section>

      {/* ---------- WAITLIST ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1rem" }}>
            The list
          </span>
          <h2 style={{ marginBottom: "1rem" }}>Want to know when it opens?</h2>
          <p className="lede" style={{ marginBottom: "2rem" }}>
            No launch date, no countdown timer, no fake urgency. Leave an email
            and you will hear from an actual person when there is an actual
            room to walk into.
          </p>

          <WaitlistForm source="isnotokay.org" />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="wrap prose">
          <span className="label" style={{ marginBottom: "1rem" }}>
            Questions
          </span>
          <h2>Frequently asked</h2>

          <h2>What exactly is IsNotOkay?</h2>
          <p>
            A community platform built around mental health, authentic
            self-expression, and genuine connection. It is a space for people who
            feel isolated, misunderstood, or are navigating mental health
            challenges.
          </p>

          <h2>Is this a mental health service?</h2>
          <p>
            No. We are not a substitute for professional mental health services.
            We are a community that acknowledges and normalizes mental health
            challenges, but we always encourage members to seek professional help
            when needed. We aim to provide connection and a sense of belonging
            alongside professional support, not instead of it.
          </p>

          <h2>Is my information private?</h2>
          <p>
            We take privacy seriously. You will be able to participate with as
            much or as little personal information as you are comfortable
            sharing. We do not and will not sell user data.{" "}
            <Link to="/health-data">Read how health data is handled.</Link>
          </p>

          <h2>When does it open?</h2>
          <p>
            No date yet, and you will not get a fake one. The moderation tools
            have to exist before anyone is invited to be vulnerable here.
          </p>
        </div>
      </section>
    </>
  );
}
