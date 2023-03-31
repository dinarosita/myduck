import React, { useContext } from "react";
import MainChatContext from "../../contexts/MainChatContext";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div className="flex grow flex-col gap-2 py-2 pr-8 whitespace-pre-wrap">
      {messageList.map((msg) => (
        <div
          key={msg.id}
          className="w-fit border border-gold-ml  px-2 py-1 pr-8 rounded-r-3xl"
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
}
