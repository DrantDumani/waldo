import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppContainer />
    </Router>
  </React.StrictMode>
);
