import PageHeader from "../components/PageHeader.jsx";

// PLACEHOLDER. Do not launch on this text.
// Generate real policies (Termageddon ~$119/yr auto-updates as laws change,
// or Termly) and have a human review the crisis + health data language.

export default function Terms() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of service" />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <p className="callout">
            Placeholder. Real terms go here before the site accepts a single
            signup.
          </p>

          <h2>Must cover</h2>
          <ul>
            <li>18+ only, and how an account gets removed if a minor is found.</li>
            <li>
              Not a medical or crisis service. No professional relationship is
              created by using this site.
            </li>
            <li>
              Members own their posts and grant a limited license to display
              them here.
            </li>
            <li>Acceptable use, and what gets an account suspended.</li>
            <li>
              Moderation is discretionary and not continuous. No promised
              response times.
            </li>
            <li>Liability limits, dispute terms, governing law (Nevada).</li>
          </ul>
        </div>
      </section>
    </>
  );
}
