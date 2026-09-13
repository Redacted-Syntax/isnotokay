// ---------- REDACTED ----------
//
// The house style for anything unfinished, unsaid, or withheld. Three ways
// to do it:
//
//   <Redacted>the launch date</Redacted>
//     Solid black bar. Classic. The text is really there in the HTML, so
//     it is a joke for anyone who opens devtools.
//
//   <Redacted glitch>the launch date</Redacted>
//     Text stays readable but comes apart - RGB split, occasional flicker.
//     Use when you want people to actually read it and still feel the
//     interference.
//
//   <Redacted reveal hint="nice try">the launch date</Redacted>
//     Blacked out until hovered or focused.
//
// Screen readers are told it is redacted rather than handed the hidden
// text, otherwise the joke breaks and the page reads as nonsense.

export default function Redacted({
  children,
  glitch = false,
  reveal = false,
  hint,
}) {
  const classes = [
    "redacted",
    glitch && "redacted--glitch",
    reveal && "is-revealable",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      title={reveal ? hint || "go on then" : undefined}
      role="mark"
      aria-label={glitch ? undefined : "redacted"}
      data-text={glitch ? String(children) : undefined}
    >
      <span className="redacted__inner" aria-hidden={!reveal && !glitch}>
        {children}
      </span>
    </span>
  );
}
