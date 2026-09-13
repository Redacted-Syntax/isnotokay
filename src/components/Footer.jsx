import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
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
                <Link to="/store">Shop</Link>
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
            <h4>The boring bits</h4>
            <ul>
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
                <a href="https://findahelpline.com" target="_blank" rel="noreferrer">
                  Find a helpline
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__base">
          &copy; {year} IsNotOkay &middot; Peer support, not treatment &middot;
          Built by one person who is also under construction
        </p>
      </div>
    </footer>
  );
}
