import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";

// NOT A REAL POLICY YET. Must be in place before collecting anything
// beyond the waitlist email. See docs/ for the legal research.
//
// Never claim HIPAA compliance. HIPAA does not apply to a community
// platform and the FTC has treated that claim as deceptive.

export default function Privacy() {
  return (
    <>
      <PageHeader
        label="The boring bits"
        title="Privacy"
        lede="What gets collected, which is almost nothing, and what happens to it, which is almost nothing."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="POLICY_PENDING" status="draft" variant="classified">
            <p>
              The formal document is still being written. The behaviour it will
              describe is already true, and it is short enough to fit here
            </p>
          </SystemNote>

          <div className="prose">
            <h2>Right now, today</h2>
            <ul className="dots">
              <li>
                If you joined the list, there is an email address and whatever
                name you typed. That is the entire database.
              </li>
              <li>
                If you sent a message, there is that too, in a private
                spreadsheet one person can open.
              </li>
              <li>
                No advertising pixels. No Meta, no Google Ads, no tracking
                scripts of any kind. Not as a favor, as a policy.
              </li>
              <li>Nothing is sold. Nothing is shared. There is nobody to share it with.</li>
            </ul>

            <h2>The thing most sites will not tell you</h2>
            <p>
              Trackers on a mental health page are the actual danger, not some
              hypothetical breach. An ad network learning which room you opened
              is how &ldquo;anonymous&rdquo; stops being true. So there are
              none, and there will not be any, and that is a structural choice
              rather than a promise.
            </p>

            <h2>Want out?</h2>
            <p>
              <Link to="/contact">Ask</Link> and the row gets deleted. No form,
              no retention window, no &ldquo;we are sorry to see you go&rdquo;
              email sequence.
            </p>

            <h2>Also</h2>
            <p>
              This site is not HIPAA anything. HIPAA covers doctors and
              insurers, not message boards, and any wellness app waving a HIPAA
              badge at you is doing marketing. The laws that actually apply here
              are about <Link to="/health-data">consumer health data</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
