import React, { useContext, useEffect, useRef } from "react";
import MessageContext from "../../contexts/MessageContext";
import Message from "./Message";

export default function MessageHistory() {
  const { messageList } = useContext(MessageContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <div
      ref={containerRef}
      className={`main-scroll flex h-full flex-auto flex-col gap-2 overflow-y-scroll whitespace-pre-wrap bg-transparent pr-6`}
    >
      {messageList.map((msg) => (
        <Message key={msg.id} id={msg.id} message={msg.message} />
      ))}
    </div>
  );
}
