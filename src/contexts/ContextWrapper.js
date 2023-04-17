import React from "react";
import { ChatHistoryContextProvider } from "./ChatHistoryContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { GlobalConfigContextProvider } from "./GlobalConfigContext";

export default function ContextWrapper({ children }) {
  return (
    <GlobalConfigContextProvider>
        <FlapContextProvider>
          <ChatHistoryContextProvider>
            <MainChatContextProvider>
                {children}
            </MainChatContextProvider>
          </ChatHistoryContextProvider>
        </FlapContextProvider>
    </GlobalConfigContextProvider>
  );
}
