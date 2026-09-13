import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";

// ---------- JOIN ----------
// Phase 1: there is no signup. This page says so honestly.
// Phase 2 (Nov): swap the placeholder for a real email form pointing at
// Buttondown or beehiiv. No custom backend, no database.
// Phase 3 (Dec/Jan): this becomes real account creation with Supabase.
//
// When the email form goes in, remember: collect date of birth, not a
// "I am 18" checkbox.

export default function Join() {
  return (
    <>
      <PageHeader
        label="Join"
        title="Not open yet"
        lede="There is no signup because there is nothing to sign up to. When there is, it will be a small first group, invited by hand."
        center
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2>Why so slow</h2>
          <p>
            Because inviting people into an empty room is how communities die,
            and because the moderation tools have to exist before anyone is
            asked to be vulnerable here. Safety first, members second.
          </p>

          <h2>What is coming</h2>
          <ul>
            <li>A list you can join, so you hear when it opens.</li>
            <li>Accounts with a chosen handle, not your real name.</li>
            <li>Rooms, posts, comments, and a working report button.</li>
          </ul>

          <div className="row" style={{ marginTop: "2rem" }}>
            <Button to="/welcome">Read the safety page</Button>
          </div>
        </div>
      </section>
    </>
  );
}
