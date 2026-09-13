import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";

// SEPARATE from the privacy policy, and legally required to be separate.
//
// Washington's My Health My Data Act reaches nationwide and carries a
// private right of action. Nevada NRS 603A applies at home. Both treat
// mental health content as consumer health data, with no revenue
// threshold: they apply from the first user.
//
// Needs: separate opt-in consent to collect, a second separate consent
// before any sharing, withdrawal and deletion rights, a named contact.

export default function HealthData() {
  return (
    <>
      <PageHeader
        label="The boring bits"
        title="Consumer health data"
        lede="What happens to the most sensitive thing you will ever type here: what you say about your own mind."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="HEALTH_DATA_SCOPE" status="currently: none">
            <p>
              No posts exist, so no health data exists. This page is here early
              on purpose, so the rules are written before there is anything to
              be tempted by
            </p>
          </SystemNote>

          <div className="prose">
            <h2>Why this is its own page</h2>
            <p>
              Because what you say about your mental health counts as consumer
              health data under Washington&apos;s My Health My Data Act and
              Nevada&apos;s NRS 603A, and both of them require this notice to be
              separate from the normal privacy policy. Neither has a revenue
              threshold. They apply to a site with one user and no money, which
              is this site.
            </p>

            <h2>The commitments</h2>
            <ul className="dots">
              <li>Posts about your mental health are treated as health data. Not content, not engagement.</li>
              <li>Collected only with your explicit yes, given separately from signing up.</li>
              <li>
                Never shared or sold. If that ever changes it requires a second,
                separate yes from you, which means it is not going to change.
              </li>
              <li>You can withdraw consent and have it deleted. Just ask.</li>
              <li>
                The list of third parties that touch it is kept as close to
                empty as technically possible.
              </li>
            </ul>

            <h2>The architecture is the promise</h2>
            <p>
              Every tracker, pixel, embed, and analytics script is a liability
              on a page like this. The safest design is the one with almost
              nothing loaded from anywhere else, which is why this site is
              deliberately boring under the hood.
            </p>

            <p>
              Questions, or a deletion request:{" "}
              <Link to="/contact">say something</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
