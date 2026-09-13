import PageHeader from "../components/PageHeader.jsx";

// PLACEHOLDER. This is a SEPARATE document from the privacy policy and it is
// legally required to be separate.
//
// Washington My Health My Data Act reaches nationwide and carries a private
// right of action. Nevada NRS 603A applies at home. Both treat mental health
// content as consumer health data, with no revenue threshold: they apply from
// the first user.

export default function HealthData() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Consumer health data"
        lede="What happens to the most sensitive thing you will put on this site: what you say about your own mind."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p className="callout">
            Placeholder. Must be a real, separate published policy before
            launch.
          </p>

          <h2>Must cover</h2>
          <ul>
            <li>
              That posts about mental health are treated as consumer health
              data.
            </li>
            <li>
              Separate opt-in consent to collect it, and a second separate
              consent before any sharing.
            </li>
            <li>No sharing and no sale. That is the whole point.</li>
            <li>The right to withdraw consent and have data deleted.</li>
            <li>Which third parties touch it. Keep this list as short as possible.</li>
            <li>A named contact for requests.</li>
          </ul>

          <h2>The practical rule</h2>
          <p>
            Every tracker, pixel, embed, and analytics script is a liability on
            these pages. The safest architecture is the one with almost nothing
            loaded from anywhere else.
          </p>
        </div>
      </section>
    </>
  );
}
