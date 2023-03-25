import React, { useContext } from "react";
import { MainChatIdContext } from "../layout/Content";
import { AllChatsContext } from "../layout/Layout";
import classes from "./ChatHistory.module.css";


export default function ChatHistory(props) {

  const allChats = useContext(AllChatsContext);
  const { mainChatId, setMainChatId } = useContext(MainChatIdContext);
  
  const mainChatStyle = {
    fontWeight: "bold",
    color: "ivory",
    backgroundColor: "orange",
  };

  function styleMainChat(id) {
    if (id === mainChatId) {
      return mainChatStyle;
    }
  }  


  return (
      <div className={classes.chatButtons}>
        {allChats
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
