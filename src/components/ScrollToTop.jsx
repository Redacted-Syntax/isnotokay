import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps your scroll position when you change pages, which feels
// broken. This snaps to the top on every navigation.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
