import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";
import SignOff from "../components/SignOff.jsx";

// ---------- SUPPORT / DONATE ----------
// Ko-fi rather than Patreon: Ko-fi takes 0% on one-off tips where Patreon
// takes a flat 10%.

const KOFI_URL = "https://ko-fi.com/redactedbae";

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
          <div className="row" style={{ justifyContent: "center" }}>
            <a className="btn" href={KOFI_URL} target="_blank" rel="noreferrer">
              Buy me a coffee on Ko-fi
            </a>
          </div>

          <p
            className="strip"
            style={{ marginTop: "1.25rem", marginBottom: "3rem" }}
          >
            <span>
              platform <b>ko-fi</b>
            </span>
            <span>
              their cut <b>0%</b>
            </span>
            <span>
              obligation <b>none</b>
            </span>
          </p>

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

            <h2>Where the money actually goes</h2>
            <p>
              Straight into the boring pile: the domain renewal, the eventual
              database bill, and{" "}
              <Redacted glitch>the $425 business filing</Redacted> that has to
              happen before this can legally sell a t-shirt.
            </p>
          </div>

          <SystemNote code="LEDGER_PUBLIC" status="nothing to hide" variant="classified">
            <p>
              Total raised to date: <Redacted>zero dollars</Redacted>
            </p>
            <p>
              Total spent to date: about eleven dollars, on a domain name, by
              one person, at 1am
            </p>
            <SignOff note="audited by nobody" />
          </SystemNote>

          <div className="prose prose--center">
            <p>
              When the <Link to="/store">shop</Link> opens, buying something is
              the better version of this anyway: you get a hoodie, the site
              gets paid, and nobody had to donate to a stranger on the
              internet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
