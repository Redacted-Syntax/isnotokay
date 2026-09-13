import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import CrisisBanner from "./components/CrisisBanner.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Welcome from "./pages/Welcome.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Rooms from "./pages/Rooms.jsx";
import Guidelines from "./pages/Guidelines.jsx";
import Store from "./pages/Store.jsx";
import Join from "./pages/Join.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import HealthData from "./pages/HealthData.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="shell">
      <ScrollToTop />

      {/* Crisis info sits ABOVE the nav and outside the router on purpose. */}
      {/* It renders on every page, logged in or not. Do not make it dismissible. */}
      <CrisisBanner />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* PUBLIC safety page. Never gate this. */}
          <Route path="/welcome" element={<Welcome />} />

          {/* POST-SIGNUP consent gate. In Phase 3 this gets wrapped in */}
          {/* <ProtectedRoute> and blocks the feed until consent is saved. */}
          <Route path="/onboarding" element={<Onboarding />} />

          <Route path="/rooms" element={<Rooms />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/store" element={<Store />} />
          <Route path="/join" element={<Join />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/health-data" element={<HealthData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
