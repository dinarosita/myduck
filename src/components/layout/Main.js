import React, { useContext } from "react";
import ChatTitle from "../contents/ChatTitle";
import MessageHistory from "../contents/MessageHistory";
import AddMessage from "../contents/AddMessage";
import FlapContext from "../../contexts/FlapContext";

export default function Main() {
  const { setFlapOpen } = useContext(FlapContext);

  return (
    <main
      className="flex h-full w-full flex-auto flex-col gap-2 overflow-auto pt-4"
      onClick={() => setFlapOpen(false)}
    >
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
