import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";
import SignOff from "../components/SignOff.jsx";

// NOT REAL TERMS YET. The in-world framing is fun, but it must stay
// unmistakable that nothing here is binding. Generate real policies
// (Termageddon ~$119/yr auto-updates as laws change) and have a human
// review the crisis and health-data language before anyone signs up.
//
// Must eventually cover: 18+ and minor removal, not a medical or crisis
// service, members own their posts, acceptable use, discretionary and
// non-continuous moderation, liability limits, Nevada governing law.

export default function Terms() {
  return (
    <>
      <PageHeader
        label="The boring bits"
        title="Terms of service"
        lede="The part where a website tells you what it is allowed to do to you."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote
            code="DOC_UNSIGNED"
            status="not binding"
            variant="classified"
          >
            <p>
              There are no terms yet, because there is nothing to agree to
              yet. No accounts, no checkout, no data beyond an email you typed
              in on purpose.
            </p>
            <p>
              Real ones arrive before the doors do. Currently blocked on{" "}
              <Redacted glitch>money for a lawyer</Redacted>
            </p>
            <SignOff note="legally meaningless" />
          </SystemNote>

          <div className="prose">
            <h2>What they will say, in plain terms</h2>
            <ul className="dots">
              <li>Adults only. 18+, and minors get removed when found.</li>
              <li>
                This is not a medical service, not therapy, and not a crisis
                line. Using it does not make anyone your clinician.
              </li>
              <li>
                Your words stay yours. The site gets permission to display them
                here and nothing more.
              </li>
              <li>
                Moderation happens when a human is awake. No promised response
                times, ever.
              </li>
              <li>
                Be a person. Harassment, doxxing, and selling things to people
                in pain end your account.
              </li>
              <li>
                Governed by Nevada law, because that is where the founder is.
              </li>
            </ul>

            <p>
              That list is the intent. The enforceable version will be longer
              and worse to read, which is unfortunately the point of a
              contract.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
