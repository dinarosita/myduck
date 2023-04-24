import React, { useContext, useEffect, useRef, useState } from "react";
import ActiveChatContext from "../../contexts/ActiveChatContext";
import ChatListContext from "../../contexts/ChatListContext";
import AddChat from "../Navigation/AddChat";

export default function MessageList() {
  const { isLoading, chatAvailable } = useContext(ChatListContext);
  const [sectionContent, setSectionContent] = useState(<></>);

  const { messageList, id } = useContext(ActiveChatContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    if (isLoading) {
      setSectionContent(<></>);
    } else {
      if (!chatAvailable) {
        setSectionContent(<div className="flex pt-8 w-3/4 min-w-fit h-full mx-auto"><AddChat welcome /></div>);
      } else {
        setSectionContent(
          <div
            ref={containerRef}
            className={`
                 skyscroll
                flex h-full min-h-80 flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap bg-transparent pr-8 ${
                  (isLoading || !chatAvailable) && "hidden"
                }`}
          >
            {messageList.map((msg) => (
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
  }, [isLoading, chatAvailable]);

  return (
    <section className="pass-overflow h-full flex-auto bg-transparent/20 p-2 ">{sectionContent}</section>
  );
}
