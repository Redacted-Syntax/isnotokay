// Carried over from the-final-project and trimmed down.
// Used for rooms, values, shop items, anything in a .grid.
//
// `tag` renders the small terminal-style status chip at the bottom.
export default function Card({ title, children, tag, className = "" }) {
  return (
    <article className={`card ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
      {tag && <span className="tag-status">{tag}</span>}
    </article>
  );
}
