import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="A cry for help in the form of HTML"
        lede="Connect with people who understand that sometimes not being okay is just Tuesday."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose prose--center">
          <h2>The short version</h2>
          <p>
            IsNotOkay is a community for people navigating mental health stuff,
            isolation, and the general experience of being a person on the
            internet in 2026. It is built for the terminally online, the
            overthinking, the self-deprecating, and the painfully self-aware.
          </p>
          <p>
            Club meets forum, for people with ironic tattoos and imposter
            syndrome. No judgment, questionable coping mechanisms, genuine
            emotional depth.
          </p>

          <h2>Who built it</h2>
          <p>
            One person. Founded by Redacted, who has Borderline Personality
            Disorder and is not especially subtle about it. Not a wellness
            company, not a startup with a mental health vertical, not a team of
            marketers who workshopped the word &ldquo;journey.&rdquo;
          </p>
          <p>
            Which means the voice here is specific instead of neutral. It also
            means the limits are real. There is no night shift. There is no
            24/7 anything. Those limits are printed on the wall rather than
            buried, because a support space that quietly overpromises is worse
            than one that tells you exactly what it can do.
          </p>

          <h2>Built in public, badly, on purpose</h2>
          <p>
            This is the fourth attempt. The first three got prettier and less
            honest every time, picked up fake testimonials from people who do
            not exist, and quoted member counts that were invented. All of that
            is gone and it is not coming back.
          </p>
          <p>
            So instead: it is unfinished, that is visible, and it will say so
            until it is not. Under construction, just like us.
          </p>

          <h2>What it is not</h2>
          <ul className="dots" style={{ textAlign: "left" }}>
            <li>Not therapy, treatment, or a diagnosis.</li>
            <li>Not a crisis line. If it is urgent, 988.</li>
            <li>Not watched around the clock. Nobody is on call.</li>
            <li>Not a place where your posts become someone&apos;s data set.</li>
            <li>Not a cult. Legally.</li>
          </ul>

          <p>
            The full boundaries and the crisis resources live on the{" "}
            <Link to="/welcome">safety page</Link>, and the house rules are in
            the <Link to="/guidelines">guidelines</Link>. Anything else,{" "}
            <Link to="/contact">ask</Link>.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="label">The point of it</span>
          </div>

          <div className="grid">
            <Card title="People who get it">
              <p>
                The specific relief of not having to explain from scratch.
                Others who know the texture of being unwell and funny about it
                at the same time.
              </p>
            </Card>
            <Card title="Rooms with rules">
              <p>
                Moderated, so that vulnerability is protected instead of
                harvested. Nobody gets to treat your bad week as content.
              </p>
            </Card>
            <Card title="Somewhere to put it">
              <p>
                Writing, art, playlists, whatever you make at 3am.
                Self-expression without a follower count attached.
              </p>
            </Card>
            <Card title="Merch with meaning">
              <p>
                Wear your truth. The shop pays for the room, which is how the
                room stays free.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
