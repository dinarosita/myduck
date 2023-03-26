import React, { useContext } from "react";
import ChatCollectionContext from "../../context/ChatCollectionContext";
// import classes from "./ChatHistory.module.css";

export default function ChatHistory() {
  const { chatList, mainChatId, setMainChatId } = useContext(ChatCollectionContext);

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
    <div>
      {chatList
        .map((chat) => (
          <button
            key={chat.id}
            style={styleMainChat(chat.id)}
            onClick={() => setMainChatId(chat.id)}
          >
            {chat.title ? chat.title : "Untitled Quacks"}
          </button>
        ))
        .reverse()}
    </div>
  );
}
