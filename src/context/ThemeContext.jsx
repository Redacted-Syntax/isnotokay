import { createContext, useContext, useEffect, useState } from "react";

// ---------- THEME ----------
// Holds which theme is active and writes it to the <html> element as
// data-theme="light" or data-theme="dark". CSS in theme.css does the rest.
//
// LIGHT IS THE DEFAULT. Cream and pink. Dark mode is red, black, glitchy,
// and available to anyone who wants it, but a mental health site opening in
// pitch black at 3am is a mood decision the visitor should get to make.
//
// Order of preference on first visit:
//   1. whatever they picked last time (localStorage)
//   2. their operating system setting, if it says dark
//   3. light

const ThemeContext = createContext(null);

function getInitialTheme() {
  // Their saved choice always wins.
  const saved = localStorage.getItem("isnotokay-theme");
  if (saved === "dark" || saved === "light") return saved;

  // Respect an explicit OS preference for dark.
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
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
