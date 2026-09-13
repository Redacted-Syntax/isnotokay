// ---------- SYSTEM NOTE ----------
//
// A fake terminal block. This is how the site admits something is
// unfinished, instead of a grey box that says "placeholder."
//
//   <SystemNote code="ERR_NO_INVENTORY" status="pending">
//     the drop does not exist yet
//   </SystemNote>
//
// Variants:
//   "error"       red, for things that are broken or missing
//   "pending"     default, for things still being built
//   "classified"  for things deliberately withheld
//
// Do NOT use this for anything safety-critical. Crisis information has to
// read as plain and true, and a fake error box around a real phone number
// is exactly the wrong joke.

export default function SystemNote({
  code = "UNKNOWN",
  status = "pending",
  variant = "pending",
  children,
}) {
  return (
    <aside className={`sysnote sysnote--${variant}`}>
      <div className="sysnote__bar">
        <span className="sysnote__dot" aria-hidden="true" />
        <code className="sysnote__code">{code}</code>
        <span className="sysnote__status">{status}</span>
      </div>
      <div className="sysnote__body">{children}</div>
    </aside>
  );
}
