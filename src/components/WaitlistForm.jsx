import { useState } from "react";

// ---------- WAITLIST FORM ----------
// Controlled inputs: every field's value comes from state, and state is the
// single source of truth. Same pattern as the React forms unit.
//
// Posts to /api/waitlist, which is functions/api/waitlist.js. No keys here.
// Nothing in this file is secret, which is exactly the point.

export default function WaitlistForm({ source = "isnotokay.org" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);

  // "idle" | "sending" | "done" | "error"
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, consent, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("done");
      setEmail("");
      setName("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("Could not reach the server. Check your connection?");
    }
  }

  // Success replaces the form entirely. Nothing left to do here.
  if (status === "done") {
    return (
      <p className="callout" role="status">
        You&apos;re on the list. You&apos;ll hear from a person, not a
        newsletter robot, and not that often.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="waitlist-email">
        Email
      </label>
      <input
        id="waitlist-email"
        className="form__input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@wherever.com"
        autoComplete="email"
        required
      />

      <label className="form__label" htmlFor="waitlist-name">
        Name or handle <span className="form__optional">optional</span>
      </label>
      <input
        id="waitlist-name"
        className="form__input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="whatever you want to be called"
      />

      <label className="form__check">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>
          Email me when there is something real to tell. Nothing else, no
          sharing, unsubscribe whenever.
        </span>
      </label>

      <button
        className="btn"
        type="submit"
        disabled={status === "sending"}
        style={{ marginTop: "0.5rem" }}
      >
        {status === "sending" ? "Adding you..." : "Keep me posted"}
      </button>

      {status === "error" && (
        <p className="form__error" role="alert">
          {message}
        </p>
      )}

      <p className="form__fine">
        Your email is stored so we can tell you when the doors open. It is not
        sold, shared, or connected to any ad tool. Ever.
      </p>
    </form>
  );
}
