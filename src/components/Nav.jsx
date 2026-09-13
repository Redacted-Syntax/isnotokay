import { NavLink, Link } from "react-router-dom";

// Nav items. Order here is order on screen.
// "Safety" points at /welcome and stays in the nav permanently.
const LINKS = [
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/guidelines", label: "House rules" },
  { to: "/welcome", label: "Safety" },
  { to: "/store", label: "Store" },
  { to: "/join", label: "Join" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand">
          <span className="grad-text--brand nav__wordmark">IsNotOkay.org</span>
          <span className="badge">Beta</span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
