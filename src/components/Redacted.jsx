// ---------- REDACTED ----------
//
// A blackout bar over text. The house style for anything unfinished,
// unsaid, or deliberately withheld.
//
//   <Redacted>the actual launch date</Redacted>
//   <Redacted reveal>the part she will not admit</Redacted>
//
// With `reveal`, hovering or tapping uncovers it. Without, it stays
// blacked out forever and the text underneath is a joke only people who
// open devtools get to read. Both are correct uses.
//
// Screen readers are told it is redacted rather than being handed the
// hidden text, because otherwise the joke breaks and the page reads as
// nonsense.

export default function Redacted({ children, reveal = false, hint }) {
  return (
    <span
      className={`redacted ${reveal ? "is-revealable" : ""}`}
      title={reveal ? hint || "go on then" : undefined}
      role="mark"
      aria-label="redacted"
    >
      <span className="redacted__inner" aria-hidden={!reveal}>
        {children}
      </span>
    </span>
  );
}
