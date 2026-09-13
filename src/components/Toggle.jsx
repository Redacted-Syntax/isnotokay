import { useTheme } from "../context/ThemeContext.jsx";

// ---------- THEME TOGGLE ----------
// Same idea as the Toggle in the-final-project, minus the react-switch
// dependency. One less package, and the colors come from the theme tokens
// instead of being passed in as props.
//
// It is a real <button> so the keyboard and screen readers get it for free.

export default function Toggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="toggle__track">
        <span className="toggle__thumb">{isDark ? "\u263D" : "\u2600"}</span>
      </span>
    </button>
  );
}
