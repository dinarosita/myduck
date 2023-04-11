import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChatListContextProvider } from "./contexts/ChatListContext";
import { MainChatContextProvider } from "./contexts/MainChatContext";
import { FlapContextProvider } from "./contexts/FlapContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FlapContextProvider>
    <ChatListContextProvider>
      <MainChatContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainChatContextProvider>
    </ChatListContextProvider>
  </FlapContextProvider>
);
