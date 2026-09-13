import PageHeader from "../components/PageHeader.jsx";
import SystemNote from "../components/SystemNote.jsx";

// ---------- HOUSE RULES ----------
// The most important document on the site. Structure adapted from #chatsafe
// (Orygen) and the Samaritans guidelines for online communities.
//
// Rules 2, 3, and 4 are the safety-critical ones. Rewrite the wording all
// you like; do not soften what they actually require.

export default function Guidelines() {
  return (
    <>
      <PageHeader
        label="House rules"
        title="The rules, and why they exist"
        lede="Short version: be honest, be funny if you want, do not hand anyone a loaded gun."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="RULES_V0.9" status="pre-release">
            <p>
              These will change once actual humans start breaking them in ways
              nobody has thought of yet. The three safety ones are not going
              anywhere
            </p>
          </SystemNote>

          <div className="prose">
            <h2>1. You do not have to be okay to be here</h2>
            <p>
              No performing recovery, no gratitude tax, no proving you are
              trying hard enough. &ldquo;Today was bad and I have no insight
              about it&rdquo; is a complete and welcome post.
            </p>

            <h2>2. Dark humor yes, encouragement no</h2>
            <p>
              Gallows humor about your own life is the native language here.
              Telling another person that giving up is the right answer is not
              humor, and it is the one thing that gets you removed fastest.
            </p>

            <h2>3. No methods, no specifics, no how-to</h2>
            <p>
              You can say you are in danger. You cannot describe how. This is
              not squeamishness. Specific detail is the part that measurably
              raises risk for other people reading, which is why every published
              safe-messaging guideline draws the line in exactly the same place.
            </p>

            <h2>4. Warn before the heavy stuff</h2>
            <p>
              Tag posts that go hard so people can decide when to open them.
              Choosing when to read something is most of what makes a space
              survivable.
            </p>

            <h2>5. Witness before you fix</h2>
            <p>
              Unsolicited advice is the fastest way to make someone feel
              unheard. Start with &ldquo;that sounds unbearable.&rdquo; Ask
              before suggesting. Nobody here needs to be told about breathing
              exercises.
            </p>

            <h2>6. No comparing wounds</h2>
            <p>
              No ranking whose situation is worse, in either direction. Not as a
              flex, not as self-erasure. Your thing counts even if someone else
              has it worse, which someone always does.
            </p>

            <h2>7. What happens in here stays in here</h2>
            <p>
              No screenshots out. No reposting anyone&apos;s words anywhere,
              ever, including the funny ones. Pseudonyms are the default and
              nobody has to explain why.
            </p>

            <h2>8. Adults only</h2>
            <p>
              18+. Not because teenagers do not deserve support, but because
              this is one person&apos;s small project and it cannot safely hold
              minors.
            </p>

            <h2>9. Do not sell anything to people in pain</h2>
            <p>
              No recruiting, no promoting your coaching practice, no funneling
              anyone anywhere. Support here is free and stays free, and anyone
              treating this room as a lead list is gone.
            </p>

            <h2>If something goes wrong</h2>
            <p>
              Report it. A human looks at it, though not instantly and not
              overnight. If your post gets removed you will be told why, and how
              to say the thing in a way that can stay up.
            </p>
            <p>
              Removing a post is never a statement that you do not belong here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
