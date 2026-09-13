// ---------- WHISPER ----------
//
// Text that is invisible until you highlight it with your cursor. It is
// really in the page, selectable, and findable by anyone who drags across
// a suspiciously empty gap.
//
//   <Whisper>i am still here</Whisper>
//
// Part of the ARG layer. See docs/ARG.md for the rules, the most
// important of which is: never hide anything a person actually needs.
// Whispers are for flavour only.

export default function Whisper({ children }) {
  return (
    <span className="whisper" aria-hidden="true">
      {children}
    </span>
  );
}
