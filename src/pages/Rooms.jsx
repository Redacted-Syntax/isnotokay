import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import SystemNote from "../components/SystemNote.jsx";
import Redacted from "../components/Redacted.jsx";
import { ROOMS } from "../data/rooms.js";

export default function Rooms() {
  return (
    <>
      <PageHeader
        label="Rooms"
        title="Four rooms, one house"
        lede="These were once four separate websites with four separate roadmaps. Now they are rooms. Fewer promises, more finished things."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SystemNote code="ERR_ROOM_NOT_FOUND" status="4 of 4 missing" variant="error">
            <p>
              None of these rooms exist. The names are real, the ideas are real,
              the database they would live in is <Redacted>vapor</Redacted>.
            </p>
            <p>
              A badge that says &ldquo;coming soon&rdquo; for two years straight
              is just a lie with better manners, so it says this instead
            </p>
          </SystemNote>

          <div className="grid">
            {ROOMS.map((room) => (
              <Card key={room.slug} title={room.name} tag={room.status}>
                <p>{room.blurb}</p>
              </Card>
            ))}
          </div>

          <div className="prose prose--center" style={{ marginTop: "3rem" }}>
            <h2>You do not have to pick one</h2>
            <p>
              Nobody gets sorted. Nobody gets assigned a lane based on what they
              posted once at 4am. These are doors, and you can use all of them
              or none of them.
            </p>

            <h2>What happens when one opens</h2>
            <p>
              This page changes and the little status tag stops being a joke.
              Best guess on timing: <Redacted reveal hint="honestly">after the
              backend class in December</Redacted>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
