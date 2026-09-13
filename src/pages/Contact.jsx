import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

// ---------- CONTACT ----------
// Posts to /api/contact, which is worker/contact.js, which writes to the
// Messages table in Airtable.
//
// The "not monitored for emergencies" notice is not optional. A contact
// form on a mental health site WILL receive crisis messages, and someone
// sending one needs to know nobody may read it for days.

const TOPICS = [
  "Just saying hi",
  "Something is broken",
  "Reporting a problem",
  "Press or collab",
  "Merch or order",
  "Something else",
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, topic, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong.");
        return;
      }

      setStatus("done");
      setEmail("");
      setName("");
      setMessage("");
    } catch {
      setStatus("error");
      setError("Could not reach the server. Check your connection?");
    }
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title="Say something"
        lede="One person reads these. Not instantly, and not overnight, but they do get read."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="callout callout--center">
            This inbox is <strong>not</strong> monitored for emergencies. If it
            is urgent right now, call or text 988, or text HOME to 741741.{" "}
            <Link to="/welcome">More resources here.</Link>
          </p>

          {status === "done" ? (
            <p className="callout callout--center" role="status">
              Sent. You will hear back when you hear back, which is honest if
              not impressive.
            </p>
          ) : (
            <form className="form form--center" onSubmit={handleSubmit}>
              <label className="form__label" htmlFor="contact-email">
                Your email
              </label>
              <input
                id="contact-email"
                className="form__input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="so there is somewhere to reply"
                autoComplete="email"
                required
              />

              <label className="form__label" htmlFor="contact-name">
                Name or handle <span className="form__optional">optional</span>
              </label>
              <input
                id="contact-name"
                className="form__input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="whatever you want to be called"
              />

              <label className="form__label" htmlFor="contact-topic">
                What is this about
              </label>
              <select
                id="contact-topic"
                className="form__input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                {TOPICS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <label className="form__label" htmlFor="contact-message">
                The message
              </label>
              <textarea
                id="contact-message"
                className="form__input form__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="go ahead"
                rows={6}
                required
              />

              <button
                className="btn"
                type="submit"
                disabled={status === "sending"}
                style={{ marginTop: "1rem" }}
              >
                {status === "sending" ? "Sending..." : "Send it"}
              </button>

              {status === "error" && (
                <p className="form__error" role="alert">
                  {error}
                </p>
              )}

              <p className="form__fine">
                Your message and email land in a private spreadsheet only one
                person can see. Not sold, not shared, not wired to anything.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
