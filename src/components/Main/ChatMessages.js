import React, { useContext, useEffect, useRef, useState } from "react";
import ActiveChatContext from "../../contexts/ActiveChatContext";
import UserChatsContext from "../../contexts/UserChatsContext";
import NewChat from "../Navigation/NewChat";

export default function ChatMessages() {
  const { isLoading, isNewUser } = useContext(UserChatsContext);
  const [content, setContent] = useState(null);

  const { chatMessages } = useContext(ActiveChatContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    if (isLoading) {
      setContent(null);
    } else {
      if (isNewUser) {
        setContent(
          <div className="mx-auto flex h-full w-3/4 min-w-fit pt-8">
            <NewChat welcome />
          </div>
        );
      } else {
        setContent(
          <div
            ref={containerRef}
            className={`
                 skyscroll
                flex h-full min-h-80 flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap bg-transparent pr-8 `}
          >
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className="flex w-fit max-w-full flex-col  break-words rounded-r-3xl bg-petal/80 py-2 pl-2 pr-4 leading-tight"
              >
                {msg.message}
              </div>
            ))}
          </div>
        );
      }
    }
  }, [isLoading, isNewUser, chatMessages]);

  return (
    <section className="pass-overflow h-full flex-auto bg-transparent/20 p-2 ">
      {content}
    </section>
  );
}
