import React from "react";
import AddChat from "../chatList/AddChat";
import ChatHistory from "../chatList/ChatHistory";
import classes from "./Navigation.module.css";


export default function Navigation(props) {
    if (props.isLoading) {
        return (
            <nav>
                <h2>Loading chats...</h2>
            </nav>
        )
    }

    if (!props.loadedChats.length) {
        return (
            <nav>
                <AddChat noChat="true" />
            </nav>
        )
    }

  return (
    <nav>        
      <ChatHistory loadedChats={props.loadedChats} />
      <AddChat />
    </nav>
  );
}
