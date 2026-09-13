// ---------- SIGN OFF ----------
//
// The stamp at the bottom of anything redacted or unfinished. Reads like a
// censor's initials on a declassified document.
//
//   <SignOff />                     -> // signed, [REDACTED]
//   <SignOff note="sorry" />        -> // sorry - [REDACTED]
//   <SignOff by="management" />     -> // signed, [MANAGEMENT]
//
// Use it to close out a SystemNote or a section that admits something is
// missing. It turns "this is broken" into "this was withheld on purpose,"
// which is the whole trick.

export default function SignOff({ note, by = "redacted" }) {
  return (
    <p className="signoff">
      <span className="signoff__slashes">//</span>{" "}
      {note ? `${note} - ` : "signed, "}
      <span className="signoff__name">[{by.toUpperCase()}]</span>
    </p>
  );
}
