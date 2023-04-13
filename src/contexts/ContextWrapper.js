import React from "react";
import { ChatListContextProvider } from "./ChatListContext";
import { MainChatContextProvider } from "./MainChatContext";
import { FlapContextProvider } from "./FlapContext";
import { AutofocusContextProvider } from "./AutofocusContext";

export default function ContextWrapper({ children }) {
  return (
    <FlapContextProvider>
      <ChatListContextProvider>
        <MainChatContextProvider>
          <AutofocusContextProvider>{children}</AutofocusContextProvider>
        </MainChatContextProvider>
      </ChatListContextProvider>
    </FlapContextProvider>
  );
}
