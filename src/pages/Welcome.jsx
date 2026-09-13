import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

// ---------- WELCOME / START HERE ----------
// This is the safety page and it is intentionally reachable without an
// account. Modelled on 988 Lifeline guidance for community spaces plus the
// Samaritans guidelines for online communities.

export default function Welcome() {
  return (
    <>
      <PageHeader
        label="Start here"
        title="Before you post anything"
        lede="What this place can do, what it cannot, and how to use it without it making things worse."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2>If it is bad right now</h2>
          <p>
            Call or text <strong>988</strong> for the Suicide &amp; Crisis
            Lifeline, or text <strong>HOME</strong> to <strong>741741</strong>{" "}
            for the Crisis Text Line. Both are free, 24/7, and staffed by people
            trained for exactly this. If someone is in immediate physical danger,
            call 911.
          </p>
          <p>
            Posting here is not a substitute for that. Nobody on this site is
            trained to intervene, and a post might sit for hours before another
            human sees it.
          </p>

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
            <li>
              No encouraging anyone toward harm, including as a joke.
            </li>
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
        </div>
      </section>
    </>
  );
}
