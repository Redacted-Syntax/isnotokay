import { Link } from "react-router-dom";
import ResourceCard from "../components/ResourceCard.jsx";
import { CRISIS_RESOURCES } from "../data/resources.js";

// ---------- WELCOME / BEFORE YOU ENTER ----------
//
// Structure ported from the Polsia build, which got this page right. Three
// numbered boundary sections, a standing "clear line" panel, then crisis
// resources at the bottom.
//
// In Phase 1 this is a readable page. In Phase 3, when accounts exist, the
// three sections become a real consent gate: the checkboxes must be ticked
// before an account can post, and the privacy answers get saved to the
// profile. The inputs below are disabled placeholders so the shape is already
// visible and nothing pretends to save.
//
// Do not put this page behind a login. Someone who needs the crisis
// resources is often someone who has not signed up.

export default function Welcome() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Before you enter
          </span>

          <div style={{ marginBottom: "2rem" }}>
            <div className="line-expand" />
          </div>

          <h1 className="mono-display">Make room for care, with boundaries.</h1>

          <p className="lede" style={{ marginTop: "1.25rem" }}>
            IsNotOkay is a place for honest peer connection. Take a moment to
            understand what this space can offer, what it cannot, and how to
            protect your privacy here.
          </p>
        </div>
      </section>

      {/* ---------- THE CLEAR LINE + NUMBERED SECTIONS ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap welcome__layout">
          {/* Standing panel. Stays visible while you read the rest. */}
          <aside className="clearline">
            <span className="label">The clear line</span>
            <h2 className="clearline__title">
              Peer support is not professional care.
            </h2>

            <p>
              This community is not a clinic, therapy service, medical service,
              or emergency service. Members cannot assess risk or provide urgent
              help.
            </p>
            <p>
              Posts and messages are not monitored for emergencies. Crisis links
              are offered as starting points only; they do not promise
              monitoring, a reply, or intervention.
            </p>
            <p className="clearline__urgent">
              If you may be in immediate danger, contact local emergency services
              or a crisis service now.
            </p>

            <ul className="clearline__notes">
              <li>Be human with one another. Listening is a contribution.</li>
              <li>
                Share only what you are comfortable having other members see.
              </li>
            </ul>
          </aside>

          <div className="welcome__steps">
            {/* ---------- 01 ---------- */}
            <article className="step">
              <span className="step__num">01 - Know the boundary</span>
              <h2 className="mono-display step__title">What this space is for</h2>
              <p className="step__body">
                This is for connection between peers. Not diagnosis, not
                treatment, not rescue.
              </p>

              <label className="consent">
                <input type="checkbox" disabled />
                <span>
                  I understand that IsNotOkay is peer support, not professional
                  or medical care, and not an emergency service.
                </span>
              </label>
            </article>

            {/* ---------- 02 ---------- */}
            <article className="step">
              <span className="step__num">02 - Keep the circle kind</span>
              <h2 className="mono-display step__title">Community guidelines</h2>
              <p className="step__body">
                A few practices help this remain a safer place for people in many
                different moments.
              </p>

              <ul className="step__rules">
                <li>
                  Lead with care. Do not shame, threaten, harass, or pressure
                  another member.
                </li>
                <li>
                  Speak from your own experience. Do not diagnose, prescribe, or
                  promise an outcome.
                </li>
                <li>
                  Respect a pause or a no. Report content that feels unsafe
                  instead of escalating in public.
                </li>
              </ul>

              <label className="consent">
                <input type="checkbox" disabled />
                <span>
                  I will treat members with care and follow these guidelines.
                </span>
              </label>

              <p className="step__more">
                The full version lives in the{" "}
                <Link to="/guidelines">community guidelines</Link>.
              </p>
            </article>

            {/* ---------- 03 ---------- */}
            <article className="step">
              <span className="step__num">03 - Choose your privacy pace</span>
              <h2 className="mono-display step__title">
                You decide how reachable to be
              </h2>
              <p className="step__body">
                Posts are visible to members. Avoid names, contact details, exact
                locations, or anything identifying when you share.
              </p>

              <label className="consent">
                <input type="checkbox" disabled />
                <span>
                  I understand that community posts are member-visible and I will
                  avoid sharing identifying details.
                </span>
              </label>

              <fieldset className="choice" disabled>
                <legend>Allow member message requests?</legend>
                <label className="choice__opt">
                  <input type="radio" name="dm" disabled />
                  <span>
                    No, keep message requests off. I can still participate.
                  </span>
                </label>
                <label className="choice__opt">
                  <input type="radio" name="dm" disabled />
                  <span>
                    Yes, allow members to send me a message request. I can change
                    this later.
                  </span>
                </label>
              </fieldset>

              <fieldset className="choice" disabled>
                <legend>Profile visibility</legend>
                <label className="choice__opt">
                  <input type="radio" name="profile" disabled />
                  <span>Let members see my profile.</span>
                </label>
                <label className="choice__opt">
                  <input type="radio" name="profile" disabled />
                  <span>Keep my profile hidden from members.</span>
                </label>
              </fieldset>

              <p className="step__more">
                You will be able to change either choice later in privacy
                settings. Your safety boundaries stay visible whenever you need
                to revisit them.
              </p>
            </article>

            <p className="callout">
              These choices are not active yet. There are no accounts, so there
              is nothing to consent to. This is what the flow will look like when
              the doors open. <Link to="/join">Get told when that happens.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CRISIS SUPPORT ---------- */}
      <section className="section" id="crisis">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1rem" }}>
            Start here if safety cannot wait
          </span>
          <h2 className="mono-display">Crisis support</h2>
          <p className="lede" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            For immediate danger, suicidal thoughts, or urgent emotional
            distress. These resources are here to make the next step easier. They
            do not imply that this community is monitoring or responding to a
            crisis.
          </p>

          <p className="callout" style={{ marginBottom: "2.5rem" }}>
            Local availability, eligibility, language access, and response times
            vary. Check each provider&apos;s current information for the most
            accurate details.
          </p>

          <div className="grid">
            {CRISIS_RESOURCES.map((resource) => (
              <ResourceCard key={resource.name} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- USING THIS PLACE ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2>How fast you will hear back</h2>
          <p>
            There is no overnight moderation and no guaranteed response time.
            This is a small community run by one person, not a service with
            shifts. Reports get reviewed, but not instantly.
          </p>
          <p>
            We would rather say that plainly than let you believe someone is
            always watching.
          </p>

          <h2>If a post of yours gets removed</h2>
          <p>
            You will hear why, from a person, and you will get help reposting it
            in a way that works. Removal here is about the content, not about
            deciding you do not belong.
          </p>

          <h2>Taking care of yourself while you are here</h2>
          <p>
            Reading other people&apos;s pain is not always support. If you are
            already at your limit, it is fine to close the tab. Nobody is keeping
            score, and there will be no streaks to break.
          </p>
        </div>
      </section>
    </>
  );
}
