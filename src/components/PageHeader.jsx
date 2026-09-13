// Every page opens the same way: mono label, expanding hairline, big title,
// mono lede. Staggered entrance. Keeps the site feeling like one thing.
//
// Centered by default. Pass center={false} for a left-aligned header.
export default function PageHeader({ label, title, lede, center = true }) {
  return (
    <header className={`section ${center ? "center" : ""}`}>
      <div className="wrap">
        {label && (
          <span className="label anim-up-1" style={{ marginBottom: "1.5rem" }}>
            {label}
          </span>
        )}

        <div
          className="anim-up-2"
          style={{
            display: "flex",
            justifyContent: center ? "center" : "flex-start",
            marginBottom: "2rem",
          }}
        >
          <div className="line-expand" />
        </div>

        <h1 className="anim-up-2">{title}</h1>

        {lede && (
          <p className="lede anim-up-3" style={{ marginTop: "1.25rem" }}>
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}
