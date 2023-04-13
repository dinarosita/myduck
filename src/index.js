import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ContextWrapper from "./contexts/ContextWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextWrapper>
);
