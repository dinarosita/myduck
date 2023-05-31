import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { MessageContextProvider } from "../../contexts/MessageContext";
import MainHeader from "./MainHeader";
import MainBody from "./MainBody";
import MainFooter from "./MainFooter";

export default function Main() {
  const { isArchiveMode } = useContext(ChatContext);
  return (
    <MessageContextProvider>
      <main
        className={`pass-overflow main-frame flex flex-auto flex-col justify-between ${
          isArchiveMode && "archive-mode"
        }`}
      >
        <MainHeader />
        <MainBody />
        <hr className="main-separator" />
        <MainFooter />
      </main>
    </MessageContextProvider>
  );
}
