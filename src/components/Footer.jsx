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
                <Link to="/welcome">Start here</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/store">Shop</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>The rules</h4>
            <ul>
              <li>
                <Link to="/guidelines">Community guidelines</Link>
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
                <a href="https://988lifeline.org" target="_blank" rel="noreferrer">
                  988lifeline.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__base">
          &copy; {year} IsNotOkay &middot; Peer support, not treatment &middot;
          Built by one person who is also a work in progress
        </p>
      </div>
    </footer>
  );
}
