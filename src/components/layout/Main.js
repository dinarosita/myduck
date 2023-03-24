import React, { useContext } from "react";
import { AllChatsContext, MainChatIdContext } from "./Layout";

import classes from "./Main.module.css";
import ChatTitle from "./main/ChatTitle";
import Messages from "./main/Messages";
import AddMessage from "./main/AddMessage";


import WelcomeMessage from "./specialPages/WelcomeMessage";

export default function Main() {
  const allChats = useContext(AllChatsContext);
  const mainChatId = useContext(MainChatIdContext);

  if (!allChats.length) {
    return (
      <WelcomeMessage />
    );
  }
  return <main>
    <ChatTitle />
    <Messages />
    <AddMessage />
  </main>;
}
