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
        title="Merch that pays for the room"
        lede="Apparel and small things for the beautifully unhinged, painfully self-aware, and terminally online. The shop funds the community so that the community never has to charge for support."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="callout" style={{ marginBottom: "2.5rem" }}>
            Nothing is for sale yet. These are the planned first pieces.
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
              Hosting, the domain, and the boring costs of keeping a site alive.
              Peer support itself is free and will stay free. Nobody should have
              to pay to be heard.
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
