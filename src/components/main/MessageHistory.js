import React, { useContext } from "react";
import MainChatContext from "../../contexts/MainChatContext";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div className="flex flex-col-reverse whitespace-pre-wrap gap-2 pr-8 py-2">
      {messageList
        .map((msg) => (
          <div
            key={msg.id}
            className="w-fit rounded-r-3xl border border-l-0 border-opacity-50 border-sol pl-2 pr-4 py-2 leading-tight"
          >
            {msg.message}
          </div>
        ))
        .reverse()}
    </div>
  );
}
