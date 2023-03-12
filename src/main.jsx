import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";

// BOOTSTRAP JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// OVERRIDE CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
