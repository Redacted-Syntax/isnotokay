import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

// PLACEHOLDER. Do not launch on this text.

export default function Privacy() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy policy" />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p className="callout">
            Placeholder. Real policy goes here before the site collects a single
            email address.
          </p>

          <h2>Must cover</h2>
          <ul>
            <li>What is collected, why, and how long it is kept.</li>
            <li>No sale of user data. Ever. Say it plainly.</li>
            <li>
              No advertising or analytics trackers on pages where a
              member&apos;s mental health could be inferred.
            </li>
            <li>How to delete an account and what happens to old posts.</li>
            <li>Cookies, and consent for anything beyond strictly necessary.</li>
            <li>Contact route for privacy requests.</li>
          </ul>

          <h2>Also required</h2>
          <p>
            A separate <Link to="/health-data">consumer health data policy</Link>
            . Mental health content counts as consumer health data under
            Washington&apos;s My Health My Data Act and Nevada NRS 603A, and both
            require their own notice and consent.
          </p>

          <h2>Never claim</h2>
          <p>
            That this site is HIPAA compliant or HIPAA protected. HIPAA does not
            apply to a community platform, and saying otherwise is the kind of
            claim the FTC has treated as deceptive.
          </p>
        </div>
      </section>
    </>
  );
}
