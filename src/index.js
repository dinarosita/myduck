import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ChatCollectionContextProvider } from "./context/ChatCollectionContext";
import { MainChatContextProvider } from "./context/MainChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatCollectionContextProvider>
    <MainChatContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainChatContextProvider>
  </ChatCollectionContextProvider>
);
