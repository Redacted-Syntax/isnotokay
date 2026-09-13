// ---------- CRISIS BANNER ----------
// Renders on every page. Not behind auth. Not dismissible.
//
// Why: 988 Lifeline guidance for community spaces says resources must be
// reachable without an account, because the person who needs them most is
// often the one who has not signed up.
//
// Numbers are US. Add international lines before promoting outside the US.

export default function CrisisBanner() {
  return (
    <aside className="crisis" aria-label="Crisis resources">
      <div className="wrap crisis__inner">
        In crisis right now? Call or text <a href="tel:988">988</a> (Suicide &amp;
        Crisis Lifeline) or text HOME to{" "}
        <a href="sms:741741">741741</a>. If someone is in immediate danger, call
        911. This site is not a crisis service.
      </div>
    </aside>
  );
}
