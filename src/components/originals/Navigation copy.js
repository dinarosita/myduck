import React, { useState } from "react";
import AddChat from "../layout/navigation/AddChat";
import ChatHistory from "../layout/navigation/ChatHistory";
import classes from "./Navigation.module.css";


export default function Navigation(props) {
    const [mainchatid, setMainChatId] = useState("0000")
    if (props.isLoading) {
        return (
            <nav>
                <h2>Loading chats...</h2>
            </nav>
        )
    }

    if (!props.chats.length) {
        return (
            <nav>
                <AddChat noChat="true" />
            </nav>
        )
    }

    
  function Callback (childData) {
    return setMainChatId(childData)
  }

    
  return (
    <nav>        
        {props.handleCallback(mainchatid)}
      <ChatHistory chats={props.chats} handleCallback={Callback}/>
      <AddChat />
    </nav>
  );
}
