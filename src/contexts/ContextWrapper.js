import React from "react";
import { ChatListContextProvider } from "./ChatListContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { FocusContextProvider } from "./FocusContext";

export default function ContextWrapper({ children }) {
  return (
    <FlapContextProvider>
      <ChatListContextProvider>
        <MainChatContextProvider>
          <FocusContextProvider>{children}</FocusContextProvider>
        </MainChatContextProvider>
      </ChatListContextProvider>
    </FlapContextProvider>
  );
}
