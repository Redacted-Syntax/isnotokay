import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="Error 404"
        title="This page is also not okay"
        lede="It is not here. Could be a typo, could be something that has not been built yet. Either way, not your fault."
        center
      />

      <section className="section center" style={{ paddingTop: 0 }}>
        <div className="wrap row">
          <Button to="/">Go home</Button>
          <Button to="/welcome" variant="ghost">
            Start here instead
          </Button>
        </div>
      </section>
    </>
  );
}
