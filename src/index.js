import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./mobile.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.unregister();
