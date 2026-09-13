import { createContext, useContext, useEffect, useState } from "react";

// ---------- THEME ----------
// Holds which theme is active and writes it to the <html> element as
// data-theme="dark" or data-theme="light". CSS in theme.css does the rest.
//
// Order of preference on first visit:
//   1. whatever they picked last time (localStorage)
//   2. their operating system setting
//   3. dark

const ThemeContext = createContext(null);

function getInitialTheme() {
  // Their saved choice always wins.
  const saved = localStorage.getItem("isnotokay-theme");
  if (saved === "dark" || saved === "light") return saved;

  // Otherwise follow the OS.
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }

  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Runs on mount and every time `theme` changes.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("isnotokay-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use this in any component that needs the theme:
//   const { theme, toggleTheme } = useTheme();
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme has to be used inside <ThemeProvider>");
  }
  return context;
}
