import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ChatListContextProvider } from "./contexts/ChatListContext";
import { MainChatContextProvider } from "./contexts/MainChatContext";

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
