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
    <div ref={containerRef} className="flex flex-col h-full overflow-y-scroll flex-auto  whitespace-pre-wrap gap-1 pr-8  rounded border-mboxborderw border-r-0 border-mboxcolor scrollbar">
      {messageList
        .map((msg) => (
          <div
            key={msg.id}
            className="flex flex-col
            
            w-fit rounded-r-3xl border border-l-0 border-opacity-50 border-sol pl-2 pr-4 py-2 first:mt-1 last:mb-1"
            
          >
            {msg.message}
          </div>
        ))}
    </div>
  );
}
