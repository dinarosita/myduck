import React, { useContext } from "react";
import ChatTitle from "./ChatTitle";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import FlapContext from "../../contexts/FlapContext";

export default function Main() {
  const { setIsFlapOpen } = useContext(FlapContext);

  return (
    <main
      className={`flex justify-between h-full flex-auto flex-col gap-2 overflow-auto 
      `}
      onClick={() => setIsFlapOpen(false)}
    >
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
