import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="Error 404"
        title="This page is also not okay"
        lede="Relatable, honestly."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="404_NOT_FOUND" status="same" variant="error">
            <p>
              <code>GET</code> that page returned nothing. Could be a typo,
              could be something that has not been built yet, could be a thing
              that existed on a previous version of this site before it got{" "}
              <Redacted reveal hint="three times">rebuilt from scratch</Redacted>.
            </p>
            <p>Either way: not your fault</p>
          </SystemNote>

          <div className="row" style={{ justifyContent: "center" }}>
            <Button to="/">Go home</Button>
            <Button to="/welcome" variant="ghost">
              Safety page
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
