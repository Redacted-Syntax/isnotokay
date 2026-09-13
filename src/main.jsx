import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./styles/theme.css";
import "./styles/base.css";
import "./styles/center.css";
import "./styles/gradients.css";
import "./styles/glitch.css";
import "./styles/redacted.css";
import "./styles/arg.css";
import "./styles/toggle.css";
import "./styles/forms.css";
import "./styles/welcome.css";
import "./styles/gate.css";

// ---------- CONSOLE NOTE ----------
// For the people who open devtools. Part of the ARG layer, and also a
// genuine signpost: the console is a fine place to be nosy, and the site
// has nothing to hide in it.
console.log(
  "%c[REDACTED]",
  "color:#e94b8a;font-weight:700;font-size:13px;letter-spacing:.2em",
  "\nyou opened the console. of course you did.\n" +
    "nothing in here is required. no puzzle gates anything that matters.\n" +
    "if tonight is bad, go to /welcome instead. 988 works too.\n" +
    "otherwise: robots.txt, and then /archive.\n"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
