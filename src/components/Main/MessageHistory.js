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
    <section className="flex-auto pass-overflow">
      <div
        ref={containerRef}
        className="scroll-mbox flex flex-auto flex-col  gap-1 h-full overflow-y-scroll whitespace-pre-wrap  rounded border-8 border-r-0 border-mboxcolor pr-2 md:pr-4 min-h-80"
      >
        {messageList.map((msg) => (
          <div
            key={msg.id}
            className="flex  flex-col rounded-r-3xl border-2 border-l-0 border-hovercolor border-opacity-50 py-2 pl-2 pr-4 first:mt-1 last:mb-1 break-words"
          >
            {msg.message}
          </div>
        ))}
      </div>
    </section>
  );
}
