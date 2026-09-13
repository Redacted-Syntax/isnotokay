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
import "./styles/toggle.css";
import "./styles/forms.css";
import "./styles/welcome.css";
import "./styles/gate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
