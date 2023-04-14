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
    <section className="h-full flex-auto overflow-auto">
      <div
        ref={containerRef}
        className="scrollbar flex h-full flex-auto flex-col  gap-1 overflow-y-scroll whitespace-pre-wrap  rounded border-mboxborderw border-r-0 border-mboxcolor pr-8 min-h-80"
      >
        {messageList.map((msg) => (
          <div
            key={msg.id}
            className="flex w-fit flex-col rounded-r-3xl border border-l-0 border-sol border-opacity-50 py-2 pl-2 pr-4 first:mt-1 last:mb-1"
          >
            {msg.message}
          </div>
        ))}
      </div>
    </section>
  );
}
