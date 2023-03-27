import React, { useContext } from "react";
import MainChatContext from "../../context/MainChatContext";
// import classes from "./MessageHistory.module.css";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div className="flex flex-col gap-1 items-end">
      {messageList.map((msg) => (
        <div key={msg.id} className="border border-orange-300 p-4 text-brown inline-block">
          {msg.message}
        </div>
      ))}
    </div>
  );
}
