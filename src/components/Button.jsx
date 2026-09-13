import { Link } from "react-router-dom";

// One button, three looks.
//   variant="solid"  filled crimson (default)
//   variant="ghost"  crimson outline
//   variant="quiet"  grey outline, for secondary actions
//
// Pass `to` for an internal route, `href` for an external link, or neither
// for a real <button>.
export default function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  ...rest
}) {
  const classes = ["btn", variant !== "solid" && `btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
