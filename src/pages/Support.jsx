import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";

// ---------- SUPPORT / DONATE ----------
//
// Nothing here takes money yet, deliberately. Before it can:
//   1. a Ko-fi or Stripe link that actually exists
//   2. real terms and a refund policy
//   3. a decision on the business entity (Nevada LLC is ~$425)
//
// When the Ko-fi page exists, paste the URL into KOFI_URL and flip LIVE to
// true. That is the only change needed.
//
// Ko-fi over Patreon: Ko-fi takes 0% on one-off tips, Patreon takes a flat
// 10%.

const KOFI_URL = null;
const LIVE = false;

export default function Support() {
  return (
    <>
      <PageHeader
        label="Support"
        title="Keeping the lights on"
        lede="This runs on about eleven dollars a year and one person's free time. Here is the honest accounting."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid">
            <Card title="What it costs" tag="$11 / yr">
              <p>
                A domain, and hosting that is currently free. That is the whole
                budget. No office, no team, no investor expecting a return.
              </p>
            </Card>

            <Card title="What money buys" tag="aspirational">
              <p>
                The first merch run, the business filing, and eventually a
                database that costs real money once enough people are in here
                to need one.
              </p>
            </Card>

            <Card title="What it never buys" tag="non-negotiable">
              <p>
                Access. Support here is free and stays free. Paying gets you a
                sticker and a warm feeling, never a place in the room and never
                a faster reply.
              </p>
            </Card>
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>Ways to help that cost nothing</h2>
            <p>
              Being here counts. So does telling one person who would get it,
              and so does{" "}
              <Link to="/contact">telling me when something is broken</Link>.
              Your presence is already a form of support. Your love is seen.
              Your clicks are appreciated. Your emotional damage will be
              monetized (eventually).
            </p>

            <h2>Ways to help that cost money</h2>
          </div>

          {LIVE && KOFI_URL ? (
            <div className="row" style={{ justifyContent: "center" }}>
              <a className="btn" href={KOFI_URL} target="_blank" rel="noreferrer">
                Buy me a coffee
              </a>
            </div>
          ) : (
            <SystemNote code="ERR_NO_PAYMENT_METHOD" status="by choice" variant="error">
              <p>
                There is no donate button. Taking money before the terms and the
                paperwork exist would be doing it backwards, and doing things
                backwards is how the last three versions of this site went.
              </p>
              <p>
                Progress on that: <Redacted reveal hint="a Nevada LLC is $425">
                  blocked on $425
                </Redacted>
              </p>
            </SystemNote>
          )}

          <div className="prose prose--center">
            <p>
              When the <Link to="/store">shop</Link> opens, buying something is
              the better version of this anyway: you get a hoodie, the site gets
              paid, and nobody had to donate to a stranger on the internet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
