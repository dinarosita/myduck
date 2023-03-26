import React, { useContext } from "react";
import AddChat from "../components/chatCollection/AddChat";
import ChatHistory from "../components/chatCollection/ChatHistory";
import ChatCollectionContext from "../context/ChatCollectionContext";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const { mainChatId } = useContext(ChatCollectionContext);

  if (!mainChatId)
    return (
      <nav className={classes.navigation} >
        <h2>Let's quack!</h2>
        <AddChat />
      </nav>
    );

  return (
    <nav className={classes.navigation}>
      <h2>Chat history</h2>
      <ChatHistory />
      <h3>New topic?</h3>
      <AddChat />
    </nav>
  );
}
