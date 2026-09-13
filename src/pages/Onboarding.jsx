import { Link } from "react-router-dom";
import SystemNote from "../components/SystemNote.jsx";

// ---------- ONBOARDING CONSENT GATE ----------
//
// This is the POST-SIGNUP page, not the same thing as /welcome.
//
//   /welcome     public. No account. Crisis resources for anyone.
//   /onboarding  requires an account. Blocks the feed until consent given.
//
// PHASE 3 NOTES (December/January):
//   1. Wrap this route in <ProtectedRoute>.
//   2. Both required checkboxes gate the submit button.
//   3. Store the result with a timestamp:
//        alter table profiles
//          add column consented_at timestamptz,
//          add column allow_dms boolean default false,
//          add column profile_visible boolean default true;
//      That timestamp is the point of the page. It records that this person
//      was told peer support is not professional care BEFORE they posted.
//      Keep it forever.
//   4. After saving, redirect to the feed. Skip this page if consented_at
//      is already set.
//   5. Both privacy choices must stay editable in settings.
//   6. Note the asymmetric defaults: DMs OFF, profile visible. Someone
//      rushing the form should land on the safer option for the choice that
//      can actually hurt them.

export default function Onboarding() {
  return (
    <>
      <section className="section">
        <div className="wrap center">
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Before you enter the circle
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="SIM_MODE" status="dress rehearsal" variant="classified">
            <p>
              Nothing on this page saves. There are no accounts to attach it
              to. Every box is inert and every radio is decorative.
            </p>
            <p>
              It is public early on purpose, so you can read the terms of
              entry long before anyone asks you to accept them
            </p>
          </SystemNote>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap welcome__layout">
          {/* Stays on screen while you read the steps. The boundary should */}
          {/* never scroll out of sight while someone agrees to things. */}
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
              Posts and messages are not monitored for emergencies. Crisis
              links are offered as starting points only; they do not promise
              monitoring, a reply, or intervention.
            </p>
            <p className="clearline__urgent">
              If you may be in immediate danger, contact local emergency
              services or a crisis service now.
            </p>

            <ul className="clearline__notes">
              <li>Be human with one another. Listening is a contribution.</li>
              <li>
                Share only what you are comfortable having other members see.
              </li>
            </ul>

            <p style={{ marginTop: "1.5rem" }}>
              <Link to="/welcome">Crisis resources</Link>
            </p>
          </aside>

          <div className="welcome__steps">
            {/* ---------- 01 ---------- */}
            <article className="step">
              <span className="step__num">01 - Know the boundary</span>
              <h2 className="mono-display step__title">
                What this space is for
              </h2>
              <p className="step__body">
                The circle is for connection between peers. Not diagnosis, not
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
                A few practices help this remain a safer place for people in
                many different moments.
              </p>

              <ul className="step__rules">
                <li>
                  Lead with care. Do not shame, threaten, harass, or pressure
                  another member.
                </li>
                <li>
                  Speak from your own experience. Do not diagnose, prescribe,
                  or promise an outcome.
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
                <Link to="/guidelines">house rules</Link>.
              </p>
            </article>

            {/* ---------- 03 ---------- */}
            <article className="step">
              <span className="step__num">03 - Choose your privacy pace</span>
              <h2 className="mono-display step__title">
                You decide how reachable to be
              </h2>
              <p className="step__body">
                Posts in the circle are visible to members. Avoid names,
                contact details, exact locations, or anything identifying when
                you share.
              </p>

              <label className="consent">
                <input type="checkbox" disabled />
                <span>
                  I understand that community posts are member-visible and I
                  will avoid sharing identifying details.
                </span>
              </label>

              <fieldset className="choice" disabled>
                <legend>Allow member message requests?</legend>
                <label className="choice__opt">
                  <input type="radio" name="dm" disabled defaultChecked />
                  <span>
                    No, keep message requests off. I can still participate in
                    the circle.
                  </span>
                </label>
                <label className="choice__opt">
                  <input type="radio" name="dm" disabled />
                  <span>
                    Yes, allow members to send me a message request. I can
                    change this later.
                  </span>
                </label>
              </fieldset>

              <fieldset className="choice" disabled>
                <legend>Profile visibility</legend>
                <label className="choice__opt">
                  <input type="radio" name="profile" disabled defaultChecked />
                  <span>Let members see my profile.</span>
                </label>
                <label className="choice__opt">
                  <input type="radio" name="profile" disabled />
                  <span>Keep my profile hidden from members.</span>
                </label>
              </fieldset>
            </article>

            <div className="gate">
              <p className="gate__note">
                You can change either privacy choice later in privacy settings.
                Your safety boundaries stay visible whenever you need to
                revisit them.
              </p>
              <button className="btn" type="button" disabled>
                I understand - enter the circle
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
