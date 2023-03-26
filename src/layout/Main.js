import React from "react";
import classes from "./Main.module.css";
import ChatTitle from "../components/mainChat/ChatTitle";
import MessageHistory from "../components/mainChat/MessageHistory";
import AddMessage from "../components/mainChat/AddMessage";

export default function Main() {
  return (
    <main className={classes.main}>
      <ChatTitle />
      <AddMessage />
      <MessageHistory />
    </main>
  );
}
