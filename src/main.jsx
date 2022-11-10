import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { MetaContextProvider } from "./Contexts/MetaContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaContextProvider>
      <Router>
        <App />
      </Router>
    </MetaContextProvider>
  </React.StrictMode>
);
