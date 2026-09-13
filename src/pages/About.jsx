import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title="A space for the beautifully unhinged"
        lede="Connect with others who understand that sometimes, not being okay is perfectly normal."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2>What this is</h2>
          <p>
            IsNotOkay is a peer support community for people navigating mental
            health challenges, social isolation, and the general complexity of
            being a person right now. It is built for the chronically online, the
            overthinking, the self-deprecating, and the painfully self-aware.
          </p>
          <p>
            It is not a clinic. There are no professionals on staff. What is here
            is other people who get it, and a structure designed so that
            honesty does not get punished.
          </p>

          <h2>Who built it</h2>
          <p>
            One person, with lived experience of the thing this site is about.
            Not a wellness company, not a startup with a mental health vertical.
          </p>
          <p>
            That means the voice here is specific rather than neutral, and it
            also means the limits are real. There is no overnight staff. There is
            no 24/7 anything. Those limits are published rather than hidden,
            because a support space that quietly overpromises is worse than one
            that tells you exactly what it can do.
          </p>

          <h2>What it is not</h2>
          <ul>
            <li>Not therapy, treatment, or a diagnosis.</li>
            <li>Not a crisis line. If it is urgent, call or text 988.</li>
            <li>Not monitored around the clock.</li>
            <li>Not a place where your posts get sold to anyone.</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            What we&apos;re for
          </span>

          <div className="grid">
            <Card title="Community">
              <p>
                People who understand the specific texture of being unwell and
                witty about it at the same time.
              </p>
            </Card>
            <Card title="Safe spaces">
              <p>
                Rooms with actual rules, so that being honest does not mean
                getting piled on or fixed at.
              </p>
            </Card>
            <Card title="Self-expression">
              <p>
                Writing, art, playlists, whatever you make instead of sleeping.
              </p>
            </Card>
            <Card title="Merch with meaning">
              <p>
                The shop funds the space. Support itself stays free, always.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
