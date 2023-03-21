import React from "react";
import AddChat from "../chatList/AddChat";
import ChatList from "../chatList/ChatList";
import classes from "./Navigation.module.css";


export default function Navigation() {
  return (
    <nav>
      <ChatList />
      <AddChat />
    </nav>
  );
}
