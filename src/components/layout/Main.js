import React, { useContext } from "react";
import ChatTitle from "../sections/ChatTitle";
import MessageHistory from "../sections/MessageHistory";
import AddMessage from "../sections/AddMessage";
import ChatListContext from "../../contexts/ChatListContext";
import AddChat from "../sections/AddChat";

export default function Main() {
  const { mainChatId } = useContext(ChatListContext);

  if (!mainChatId)
    return (
      <main className="flex flex-1 flex-col p-1">
        <div className="flex flex-col items-center justify-center  border-sol pb-2 gap-2">
      <h2>Welcome to MyDuck</h2>
      <AddChat />
    </div>
        
      </main>
    );

  return (
    <main className="flex flex-1 flex-col p-1">
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
