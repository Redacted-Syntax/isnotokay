import { Link } from "react-router-dom";

const KOFI_URL = "https://ko-fi.com/redactedbae";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        {/* Support call-out sits above the columns so it is the last real */}
        {/* thing on the page. */}
        <div className="footer__support">
          <p>
            This place runs on about eleven dollars a year and one
            person&apos;s free time.
          </p>
          <a
            className="btn btn--ghost footer__support-btn"
            href={KOFI_URL}
            target="_blank"
            rel="noreferrer"
          >
            Buy me a coffee
          </a>
        </div>

        <div className="footer__cols">
          <div>
            <h4>The site</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/join">Get on the list</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Safety</h4>
            <ul>
              <li>
                <Link to="/welcome">Safety &amp; resources</Link>
              </li>
              <li>
                <Link to="/guidelines">House rules</Link>
              </li>
              <li>
                <Link to="/onboarding">What you agree to</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Reach out</h4>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href={KOFI_URL} target="_blank" rel="noreferrer">
                  Ko-fi
                </a>
              </li>
              <li>
                <Link to="/support">Support the site</Link>
              </li>
              <li>
                <Link to="/terms">Terms</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/health-data">Health data</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>If it is bad right now</h4>
            <ul>
              <li>
                <a href="tel:988">988 - call or text</a>
              </li>
              <li>
                <a href="sms:741741">Text HOME to 741741</a>
              </li>
              <li>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find a helpline
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="strip footer__strip">
          <span>
            build <b>0.1.0</b>
          </span>
          <span>
            tests <b>zero</b>
          </span>
          <span>
            ships <b>anyway</b>
          </span>
          <span>
            maintained by <b>[REDACTED]</b>
          </span>
        </p>

        <p className="footer__base">
          &copy; {year} IsNotOkay &middot; Peer support, not treatment &middot;
          All rights reserved (or whatever)
        </p>
      </div>
    </footer>
  );
}
