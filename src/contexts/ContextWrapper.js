import React from "react";
import { ChatHistoryContextProvider } from "./ChatHistoryContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { AutofocusContextProvider } from "./AutofocusContext";

export default function ContextWrapper({ children }) {
  return (
    <FlapContextProvider>
      <ChatHistoryContextProvider>
        <MainChatContextProvider>
          <AutofocusContextProvider>{children}</AutofocusContextProvider>
        </MainChatContextProvider>
      </ChatHistoryContextProvider>
    </FlapContextProvider>
  );
}
