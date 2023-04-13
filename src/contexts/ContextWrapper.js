import React from "react";
import { ChatHistoryContextProvider } from "./ChatHistoryContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { FocusContextProvider } from "./FocusContext";

export default function ContextWrapper({ children }) {
  return (
    <FlapContextProvider>
      <ChatHistoryContextProvider>
        <MainChatContextProvider>
          <FocusContextProvider>{children}</FocusContextProvider>
        </MainChatContextProvider>
      </ChatHistoryContextProvider>
    </FlapContextProvider>
  );
}
