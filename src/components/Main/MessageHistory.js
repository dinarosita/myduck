import React, { useContext, useEffect, useRef, useState } from "react";
import MessageContext from "../../contexts/MessageContext";
import AddChat from "../Modules/AddChat";
import Message from "./Message";
import ChatContext from "../../contexts/ChatContext";

export default function MessageHistory() {
  const { isLoading, isArchiveMode, mainId } = useContext(ChatContext);
  const [content, setContent] = useState(null);

  const { messageList } = useContext(MessageContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    if (isLoading) {
      setContent(null);
    } else {
      if (!mainId) {

        setContent(
          <div className="mx-auto flex h-full w-3/4 min-w-fit pt-8">
            <AddChat welcome  />
          </div>
        );
      } else {
        setContent(
          <div
            ref={containerRef}
            className={`
                 main-scroll
                flex h-full flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap bg-transparent pr-6 `}
          >
            {messageList.map((msg) => (
              <Message key={msg.id} id={msg.id} message={msg.message} />
            ))}
          </div>
        );
      }
    }
  }, [isLoading, mainId, messageList]);

  return (
    <section className={`pass-overflow h-full flex-auto  p-2  ${isArchiveMode ? "opacity-50" : "bg-transparent/20"} `}>
      {content}
    </section>
  );
}
