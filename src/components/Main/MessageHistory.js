import React, { useContext, useEffect, useRef, useState } from "react";
import MainChatContext from "../../contexts/MainChatContext";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import AddChat from "../Navigation/AddChat";
import IconButton from "../Common/IconButton";

export default function MessageHistory() {
  const { isPageLoading, isNewUser } = useContext(ChatIndexContext);
  const [content, setContent] = useState(null);

  const { messageList } = useContext(MainChatContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  useEffect(() => {
    if (isPageLoading) {
      setContent(null);
    } else {
      if (isNewUser) {
        setContent(
          <div className="mx-auto flex h-full w-3/4 min-w-fit pt-8">
            <AddChat welcome />
          </div>
        );
      } else {
        setContent(
          <div
            ref={containerRef}
            className={`
                 skyscroll
                flex h-full min-h-80 flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap bg-transparent pr-6 `}
          >
            {messageList.map((msg) => (
              <div className="flex flex-row items-end gap-1 align-center">
                <div
                  key={msg.id}
                  className="flex w-fit max-w-full flex-col  break-words rounded-r-3xl bg-petal/80 py-2 pl-2 pr-4 leading-tight min-h-8"
                >
                  {msg.message}
                </div>
                <div className="flex-col-center gap-0 h-9">
                  <IconButton
                    task="editItem" addButtonClass="h-4 w-4"
                    addIconClass="icon-msg align-bottom"
                  />
                  <IconButton
                    task="archiveItem" addButtonClass="h-4 w-4"
                    addIconClass="icon-msg"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  }, [isPageLoading, isNewUser, messageList]);

  return (
    <section className="pass-overflow h-full flex-auto bg-transparent/20 p-2 ">
      {content}
    </section>
  );
}
