import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";

// ---------- SUPPORT / DONATE ----------
//
// Nothing here takes money yet, deliberately. Before it can:
//   1. a Ko-fi or Stripe payment link that actually exists
//   2. real terms and a refund policy
//   3. a decision on the business entity (Nevada LLC is ~$425)
//
// When the Ko-fi page exists, drop the URL into KOFI_URL below and flip
// LIVE to true. That is the only change needed.
//
// Why Ko-fi over Patreon: Ko-fi takes 0% on one-off tips where Patreon
// takes a flat 10%.

const KOFI_URL = null;
const LIVE = false;

export default function Support() {
  return (
    <>
      <PageHeader
        label="Support"
        title="Keeping the lights on"
        lede="This runs on about eleven dollars a year and one person's free time. Here is the honest version of where money goes."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid">
            <Card title="What it actually costs">
              <p>
                A domain, and hosting that is currently free. That is the whole
                budget. There is no office, no team, and no investor expecting
                a return.
              </p>
            </Card>

            <Card title="What money would buy">
              <p>
                Getting the first merch designs printed, the business filing
                paperwork, and eventually a database that costs real money once
                there are enough people in here to need one.
              </p>
            </Card>

            <Card title="What it will never buy">
              <p>
                Access. Support here is free and stays free. Paying gets you a
                sticker and a warm feeling, never a place in the room, and
                never a faster reply.
              </p>
            </Card>
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>Ways to help that cost nothing</h2>
            <p>
              Being here counts. So does telling one person who would get it,
              and so does <Link to="/contact">telling me when something is
              broken</Link>. Your presence is already a form of support, your
              clicks are appreciated, and your emotional damage will be
              monetized eventually.
            </p>

            <h2>Ways to help that cost money</h2>
            {LIVE && KOFI_URL ? (
              <p>
                <a className="btn" href={KOFI_URL} target="_blank" rel="noreferrer">
                  Buy me a coffee
                </a>
              </p>
            ) : (
              <p className="callout">
                Nothing to click yet. There is no donation link and no store
                checkout, because taking money before the terms and the
                paperwork exist would be doing it backwards. When there is, it
                will be here.
              </p>
            )}

            <p>
              When the <Link to="/store">shop</Link> opens, buying something is
              the best version of this: you get a hoodie, the site gets paid,
              and nobody had to donate to a stranger on the internet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
