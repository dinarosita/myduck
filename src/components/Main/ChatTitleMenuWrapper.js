import React from "react";
import ChatTitle from "./ChatTitle";

export default function ChatTitleMenuWrapper({ title, children }) {
  return (
    <>
      <ChatTitle title={title} />
    </>
  );
}
