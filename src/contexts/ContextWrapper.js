import React from "react";
import { ChatHistoryContextProvider } from "./ChatHistoryContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { FocusContextProvider } from "./FocusContext";
import { GlobalConfigContextProvider } from "./GlobalConfigContext";

export default function ContextWrapper({ children }) {
  return (
    <GlobalConfigContextProvider>
      <FocusContextProvider>
        <FlapContextProvider>
          <ChatHistoryContextProvider>
            <MainChatContextProvider>
                {children}
            </MainChatContextProvider>
          </ChatHistoryContextProvider>
        </FlapContextProvider>
      </FocusContextProvider>
    </GlobalConfigContextProvider>
  );
}
