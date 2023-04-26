import React, { useContext } from "react";
import ChatMeta from "./ChatMeta";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { ActiveChatContextProvider } from "../../contexts/ActiveChatContext";
import ChatListContext from "../../contexts/ChatListContext";
import AddChat from "../Navigation/AddChat";

export default function Main() {
  const { isNewUser } = useContext(ChatListContext);
  return (
    <div className="text-petal text-3xl">Under Construction</div>
    // <ActiveChatContextProvider>
    //   <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
    //     <ChatMeta />
    //     {isNewUser ? (
    //       <div className="mx-auto flex h-full w-3/4 min-w-fit pt-8">
    //         <AddChat welcome />
    //       </div>
    //     ) : (
    //       <MessageHistory />
    //     )}
    //     <hr className="blush-separator" />
    //     <AddMessage />
    //   </main>
    // </ActiveChatContextProvider>
  );
}
