import React, { useContext } from "react";
import AddChat from "../navigation/AddChat";
import ChatHistory from "../navigation/ChatHistory";
import { AllChatsContext } from "../layout/Layout";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const {allChats} = useContext(AllChatsContext);

  return (
    <nav className={classes.navigation}>
      <h2>{allChats.length ? "Chat history" : "Let's quack"}</h2>
      {allChats.length ? (
        <>
          <ChatHistory 
          />
          <h3>New topic?</h3>
        </>
      ) : (
        <></>
      )}
      <AddChat />
    </nav>
  );
}
