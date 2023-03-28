import React, { useContext } from "react";
import MainChatContext from "../../context/MainChatContext";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div className="flex flex-col items-end gap-1 p-1 border-b border-orange-500">
      {messageList.map((msg) => (
        <div
          key={msg.id}
          className="inline-block border border-orange-200  px-2 py-1 rounded-l-2xl"
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
}
