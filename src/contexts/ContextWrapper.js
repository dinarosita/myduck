import React from "react";
import { ChatListContextProvider } from "./ChatListContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { RefContextProvider } from "./RefContext";

export default function ContextWrapper({ children }) {
  return (
    <FlapContextProvider>
      <ChatListContextProvider>
        <MainChatContextProvider>
          <RefContextProvider>{children}</RefContextProvider>
        </MainChatContextProvider>
      </ChatListContextProvider>
    </FlapContextProvider>
  );
}
