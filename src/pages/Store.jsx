import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";

// ---------- SHOP ----------
// Do NOT build a cart here. When the shop is real, this page links out to
// Big Cartel or Payhip and they handle payment, tax, and fulfilment.
//
// Product names are from the original Cult Shop. Prices are targets, kept
// because the print-on-demand margins work at these numbers.

const ITEMS = [
  { name: "Emotionally Unavailable Hoodie", price: "$65", status: "unprinted" },
  { name: "Dissociation Tee", price: "$35", status: "unprinted" },
  { name: "BPD Favorite Person Tee", price: "$32", status: "unprinted" },
  { name: "Not Okay Pin Set", price: "$15", status: "no mold yet" },
  { name: "Sticker Pack", price: "$12", status: "undrawn" },
  { name: "Anxiety Playlist", price: "$9.99", status: "unsequenced" },
];

export default function Store() {
  return (
    <>
      <PageHeader
        label="The Cult Shop"
        title="Darkly stylish drops you will pretend you did not impulse buy"
        lede="Existential merch for the beautifully unhinged and terminally online. Your emotional damage, monetized (eventually). The shop pays for the room so the room never has to charge for support."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="ERR_NO_INVENTORY" status="cart disabled" variant="error">
            <p>
              Nothing here is for sale. Zero units exist in physical space. The
              designs live entirely inside one person&apos;s head and a Canva
              file named <code>final_FINAL_v3.canva</code>.
            </p>
            <p>
              Estimated ship date: <Redacted>lol</Redacted>
            </p>
          </SystemNote>

          <div className="grid">
            {ITEMS.map((item) => (
              <Card key={item.name} title={item.name} tag={item.status}>
                <p className="mono">{item.price}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>Where the money goes</h2>
            <p>
              Hosting, the domain, and the deeply unglamorous costs of keeping a
              website alive. That is the whole budget. There is no investor and
              no growth target.
            </p>
            <p>
              Support itself stays free, permanently. Nobody should have to pay
              to be heard, and any place that charges you for that is selling
              something else.
            </p>
          </div>

          <div
            className="row"
            style={{ marginTop: "2rem", justifyContent: "center" }}
          >
            <Button to="/support" variant="quiet">
              Other ways to help
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
