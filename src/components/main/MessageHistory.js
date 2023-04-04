import React, { useContext } from "react";
import MainChatContext from "../../contexts/MainChatContext";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div className="scrollbar flex  flex-1 flex-col-reverse gap-2  overflow-y-auto overflow-y-auto whitespace-pre-wrap border-2   border-sol  border-b-sol-m py-2 pr-8">
      {messageList
        .map((msg) => (
          <div
            key={msg.id}
            className="w-fit rounded-r-3xl border border-l-0 border-opacity-50 border-sol px-2 py-1 pr-8"
          >
            {msg.message}
          </div>
        ))
        .reverse()}
    </div>
  );
}
