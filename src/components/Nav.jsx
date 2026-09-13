import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/welcome", label: "Welcome" },
  { to: "/rooms", label: "Rooms" },
  { to: "/guidelines", label: "Guidelines" },
  { to: "/store", label: "Shop" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand">
          isnotokay<span style={{ color: "var(--accent)" }}>.org</span>
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
