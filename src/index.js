import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ChatListContextProvider } from "./context/ChatListContext";
import { MainChatContextProvider } from "./context/MainChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatListContextProvider>
    <MainChatContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MainChatContextProvider>
  </ChatListContextProvider>
);
