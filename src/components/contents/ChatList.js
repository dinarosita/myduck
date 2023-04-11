import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useHistory } from "react-router-dom";

export default function ChatList() {
  const history = useHistory();
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  return (
    <div className="items-left flex w-full flex-col gap-2 overflow-auto pb-4 pt-8">
      <p className="title text-center text-lg">Chat List</p>
      <ul className="scroll-cbox flex flex-col items-start gap-0.5 overflow-y-scroll border-y-4 border-l-4 border-cboxcolor pr-4 leading-tight">
        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setMainChatId(chat.id);
                history.replace("/myduck");
              }}
              className={`transi w-full rounded-r-full border-y-2 border-r-2 px-1 py-0.5 text-left ring-0 transition hover:border-hovercolor hover:text-textcolor first:mt-1 last:mb-1
            focus:border-maincolor focus:outline-none ${
              mainChatId === chat.id
                ? "border-cboxcolor bg-sol-50"
                : "border-transparent"
            }`}
            >
              {chat.title ? chat.title : "Untitled Quacks"}
            </button>
          ))
          .reverse()}
          
      </ul>
    </div>
  );
}
