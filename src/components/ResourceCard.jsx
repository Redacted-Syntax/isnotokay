// One crisis resource. Reads a single entry from src/data/resources.js.
//
// The `reviewed` date and the source link are not decoration. They tell
// someone in a bad moment that this information was checked by a human and
// where it came from.
export default function ResourceCard({ resource }) {
  const {
    kind,
    name,
    blurb,
    caveat,
    actionLabel,
    actionHref,
    sourceLabel,
    sourceHref,
    reviewed,
  } = resource;

  return (
    <article className="resource">
      <div className="resource__meta">
        <span className="resource__kind">{kind}</span>
        <span className="resource__reviewed">Reviewed {reviewed}</span>
      </div>

      <h3 className="resource__name">{name}</h3>
      <p className="resource__blurb">{blurb}</p>

      <p className="resource__caveat">{caveat}</p>

      <a className="btn resource__action" href={actionHref} target="_blank" rel="noreferrer">
        {actionLabel}
      </a>

      <p className="resource__source">
        Source:{" "}
        <a href={sourceHref} target="_blank" rel="noreferrer">
          {sourceLabel}
        </a>
      </p>
    </article>
  );
}
