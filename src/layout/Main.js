import React, { useContext } from "react";
// import classes from "./Main.module.css";
import ChatTitle from "../components/mainChat/ChatTitle";
import MessageHistory from "../components/mainChat/MessageHistory";
import AddMessage from "../components/mainChat/AddMessage";
import ChatCollectionContext from "../context/ChatCollectionContext";

export default function Main() {


  return (
    <main>
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
