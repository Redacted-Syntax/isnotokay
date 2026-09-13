import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

// ---------- SHOP ----------
// Do NOT build a cart here. When the shop is real, this page links out to
// Big Cartel or Payhip and they handle payment, tax, and fulfilment.
//
// Product names are from the original Cult Shop. Prices are targets, kept
// because the print-on-demand margins work at these numbers.

const ITEMS = [
  { name: "Emotionally Unavailable Hoodie", price: "$65" },
  { name: "Dissociation Tee", price: "$35" },
  { name: "BPD Favorite Person Tee", price: "$32" },
  { name: "Not Okay Pin Set", price: "$15" },
  { name: "Sticker Pack", price: "$12" },
  { name: "Anxiety Playlist (digital)", price: "$9.99" },
];

export default function Store() {
  return (
    <>
      <PageHeader
        label="The Cult Shop"
        title="Darkly stylish drops you will pretend you did not impulse buy"
        lede="Apparel and small things for the beautifully unhinged and terminally online. Your emotional damage, monetized (eventually). The shop pays for the room so the room never has to charge for support."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="callout" style={{ marginBottom: "2.5rem" }}>
            Nothing is for sale yet. These are the first pieces, still at the
            &ldquo;exists in my head&rdquo; stage.
          </p>

          <div className="grid">
            {ITEMS.map((item) => (
              <Card key={item.name} title={item.name} tag="Not yet">
                <p className="mono">{item.price}</p>
              </Card>
            ))}
          </div>

          <div className="prose" style={{ marginTop: "3rem" }}>
            <h2>Where the money goes</h2>
            <p>
              Hosting, the domain, and the deeply unglamorous costs of keeping a
              website alive. That is it. There is no investor and there is no
              growth target.
            </p>
            <p>
              Support itself stays free, permanently. Nobody should have to pay
              to be heard, and any place that charges you for that is selling
              something else.
            </p>
          </div>

          <div className="row" style={{ marginTop: "2rem" }}>
            <Button to="/about" variant="quiet">
              More about the project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
