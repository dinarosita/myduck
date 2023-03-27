import React, { useContext } from "react";
import ChatCollectionContext from "../../context/ChatCollectionContext";
// import classes from "./ChatHistory.module.css";

export default function ChatHistory() {
  const { chatList, mainChatId, setMainChatId } = useContext(
    ChatCollectionContext
  );

  const mainChatStyle = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "orange",
  };

  function styleMainChat(id) {
    if (id === mainChatId) {
      return mainChatStyle;
    }
  }

  return (
    <div className="flex flex-col gap-1 justify-start">
      {chatList
        .map((chat) => (
          <button
            key={chat.id}
            style={styleMainChat(chat.id)}
            onClick={() => setMainChatId(chat.id)}
            className="inline-block bg-orange-100 text-orange-500 border border-orange-500 rounded-r-md hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white px-2 py-1 text-left"
          >
            {chat.title ? chat.title : "Untitled Quacks"}
          </button>
          
        ))
        .reverse()}
      </div>
  );
}
