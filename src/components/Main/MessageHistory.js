import React, { useContext, useEffect, useRef } from "react";
import MainChatContext from "../../contexts/MainChatContext";

export default function MessageHistory() {
  const { messageList, id } = useContext(MainChatContext);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  if (!id) {
    return <div></div>;
  }
  return (
    <section className="flex-auto pass-overflow p-2 bg-transparent/20 ">
      <div
        ref={containerRef}
        className="
         bg-transparent
        scroll-vince flex flex-auto flex-col  gap-2  h-full overflow-y-scroll whitespace-pre-wrap   pr-8 min-h-80 "
      >
        {messageList.map((msg) => (
          <div
            key={msg.id}
            className="flex bg-petal/80 flex-col rounded-r-3xl  py-2 pl-2 pr-4 break-words leading-tight w-fit"
          >
            {msg.message}
          </div>
        ))}
      </div>
    </section>
  );
}
