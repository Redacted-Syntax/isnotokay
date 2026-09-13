// Carried over from the-final-project and trimmed down.
// Used for rooms, values, shop items, anything in a .grid.
export default function Card({ title, children, tag }) {
  return (
    <article className="card">
      {title && <h3>{title}</h3>}
      {children}
      {tag && <span className="card__tag">{tag}</span>}
    </article>
  );
}
