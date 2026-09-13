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
        lede="There is no signup because there is nothing to sign up to. Leave an email and you will hear when there is."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <WaitlistForm source="isnotokay.org" />

          <div className="prose" style={{ marginTop: "3.5rem" }}>
            <h2>Why so slow</h2>
            <p>
              Inviting people into an empty room is how communities die, and
              the moderation tools have to exist before anyone is asked to be
              vulnerable here. Safety first, members second.
            </p>

            <h2>What happens when it opens</h2>
            <ul>
              <li>A small first group, invited by hand, not a public launch.</li>
              <li>Accounts with a chosen handle, not your real name.</li>
              <li>Rooms, posts, comments, and a working report button.</li>
            </ul>

            <h2>Before you decide</h2>
            <p>
              Read the <Link to="/welcome">safety page</Link>. It says plainly
              what this place can and cannot do, including the fact that nobody
              is watching overnight.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
