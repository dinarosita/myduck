import React, { useContext } from "react";
import MainChatContext from "../../context/MainChatContext";
// import classes from "./MessageHistory.module.css";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  if (!id) {
    return <div></div>;
  }
  return (
    <div>
      {messageList.map((msg) => (
        <div key={msg.id}>
          {msg.message}
        </div>
      ))}
    </div>
  );
}
