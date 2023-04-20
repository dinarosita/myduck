import React from "react";
import { ChatroomContextProvider } from "./ChatroomContext";
import { ActiveChatContextProvider } from "./ActiveChatContext";
import { FlapContextProvider } from "./FlapContext";
import { GlobalConfigContextProvider } from "./GlobalConfigContext";

export default function ContextWrapper({ children }) {
  return (
    <GlobalConfigContextProvider>
        <FlapContextProvider>
          <ChatroomContextProvider>
            <ActiveChatContextProvider>
                {children}
            </ActiveChatContextProvider>
          </ChatroomContextProvider>
        </FlapContextProvider>
    </GlobalConfigContextProvider>
  );
}
