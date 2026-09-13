import { Link } from "react-router-dom";
import ResourceCard from "../components/ResourceCard.jsx";
import { CRISIS_RESOURCES } from "../data/resources.js";

// ---------- WELCOME / SAFETY & RESOURCES ----------
//
// PUBLIC. No account, no login, no gate. This is deliberate and it is the
// one rule on this page that must never change.
//
// 988 Lifeline guidance for community spaces: crisis resources have to be
// reachable without signing up, because the person who needs them most is
// often the one who never made an account.
//
// The post-signup consent gate is a different page: /onboarding.

export default function Welcome() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <section className="section">
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Safety and resources
          </span>

          <div style={{ marginBottom: "2rem" }}>
            <div className="line-expand" />
          </div>

          <h1 className="mono-display">Start with immediate support.</h1>

          <p className="lede" style={{ marginTop: "1.25rem" }}>
            No account needed to read this page. These resources are here to make
            the next step easier. They do not imply that this community is
            monitoring or responding to a crisis.
          </p>
        </div>
      </section>

      {/* ---------- THE CLEAR LINE ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="clearline" style={{ maxWidth: "var(--max-read)" }}>
            <span className="label">The clear line</span>
            <h2 className="clearline__title">
              Peer support is not professional care.
            </h2>

            <p>
              IsNotOkay is peer support. It is not a clinic, therapy service,
              medical service, or emergency service. Online peers cannot assess
              risk or provide urgent help.
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
          </div>
        </div>
      </section>

      {/* ---------- CRISIS SUPPORT ---------- */}
      <section className="section" id="crisis" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1rem" }}>
            Start here if safety cannot wait
          </span>
          <h2 className="mono-display">Crisis support</h2>
          <p className="lede" style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
            For immediate danger, suicidal thoughts, or urgent emotional
            distress.
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
          <h2>What this site actually is</h2>
          <p>
            Peer support. People with lived experience talking to each other. It
            is good for feeling less alone, for being understood without
            explaining from scratch, and for the specific relief of saying a true
            thing out loud.
          </p>
          <p>It is not good for emergencies. Please use both.</p>

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

          <h2>Talking about the hard stuff</h2>
          <p>You can say you are struggling. You can say it bluntly. What we ask:</p>
          <ul>
            <li>
              No methods, no specifics, no instructions. Not because your
              experience is shameful, but because detail is the part that
              measurably hurts other readers.
            </li>
            <li>No encouraging anyone toward harm, including as a joke.</li>
            <li>
              Content warnings on the heavy stuff, so people can choose when to
              read it.
            </li>
            <li>
              When responding: witness first. &ldquo;That sounds awful&rdquo;
              beats &ldquo;have you tried journaling.&rdquo;
            </li>
          </ul>
          <p>
            The full version lives in the{" "}
            <Link to="/guidelines">community guidelines</Link>.
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

          <h2>What you will see when you join</h2>
          <p>
            Right after signing up there is a short{" "}
            <Link to="/onboarding">boundaries and privacy step</Link>. You can
            read it now if you want to know what you are agreeing to before you
            decide.
          </p>
        </div>
      </section>
    </>
  );
}
