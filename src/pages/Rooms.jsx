import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
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
          <div className="grid">
            {ROOMS.map((room) => (
              <Card key={room.slug} title={room.name} tag="Concept">
                <p>{room.blurb}</p>
              </Card>
            ))}
          </div>

          <div className="prose" style={{ marginTop: "3rem" }}>
            <h2>Why they all say &ldquo;concept&rdquo;</h2>
            <p>
              Because none of them exist yet, and a badge that says &ldquo;coming
              soon&rdquo; for two years straight is just a lie with better
              manners.
            </p>
            <p>
              When a room actually opens, this page changes. Until then the
              honest label stays on.
            </p>

            <h2>You do not have to pick one</h2>
            <p>
              Nobody gets sorted. Nobody gets assigned a lane based on what they
              posted once at 4am. These are doors, and you can use all of them
              or none of them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
