import PageHeader from "../components/PageHeader.jsx";
import WaitlistForm from "../components/WaitlistForm.jsx";
import { Link } from "react-router-dom";

// ---------- JOIN ----------
// Phase 2: a waitlist, not a login. No accounts, no passwords, no database
// of posts to protect yet. Just "tell me when."
//
// Phase 3 (Dec/Jan) is when this becomes real account creation with Supabase.
// When that happens: collect date of birth, not an "I am 18" checkbox.

export default function Join() {
  return (
    <>
      <PageHeader
        label="Join"
        title="Not open yet"
        lede="There is nothing to sign up to, so there is no signup. Leave an email and you will hear when that changes."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <WaitlistForm source="isnotokay.org" />

          <div className="prose" style={{ marginTop: "3.5rem" }}>
            <h2>Why it is taking so long</h2>
            <p>
              Because walking people into an empty room is how these places
              die, and because the report button and the moderation queue have
              to work before anyone is asked to be honest here. Safety first,
              members second. It is slower and it is correct.
            </p>

            <h2>What it looks like when it opens</h2>
            <ul>
              <li>A small first group, invited by hand. No public launch.</li>
              <li>A handle you pick, not your real name.</li>
              <li>Rooms, posts, comments, and a report button that works.</li>
            </ul>

            <h2>Before you decide</h2>
            <p>
              Read the <Link to="/welcome">safety page</Link>. It says plainly
              what this place can and cannot do, including the part where nobody
              is watching overnight. And{" "}
              <Link to="/onboarding">this is what you will agree to</Link> when
              you join, available now so it is not a surprise later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
