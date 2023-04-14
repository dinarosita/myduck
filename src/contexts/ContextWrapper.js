import React from "react";
import { ChatHistoryContextProvider } from "./ChatHistoryContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { FocusContextProvider } from "./FocusContext";
import { GlobalConfigContextProvider } from "./GlobalConfigContext";

export default function ContextWrapper({ children }) {
  return (
    <GlobalConfigContextProvider>
      <FlapContextProvider>
        <ChatHistoryContextProvider>
          <MainChatContextProvider>
            <FocusContextProvider>{children}</FocusContextProvider>
          </MainChatContextProvider>
        </ChatHistoryContextProvider>
      </FlapContextProvider>
    </GlobalConfigContextProvider>
  );
}
