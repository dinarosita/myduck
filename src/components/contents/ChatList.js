import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useNavigate } from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const { ChatAvailable, chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  return (
    <div className="items-left flex w-full flex-col gap-2 overflow-auto pb-4 pt-8">
      <p className="title text-center text-lg">Chat List</p>
      <ul className="scroll-cbox flex flex-col items-start gap-0.5 overflow-y-scroll border-y-4 border-l-4 border-cboxcolor pr-4 leading-tight">
        {!ChatAvailable && (
        <button key="noChat"
        className={`chat-item pointer-events-none bg-sol-25 text-sol-300 border-transparent 
      }`}
      >{"Waiting for your first chat"}</button>
        )}


        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setMainChatId(chat.id);
                navigate("/myduck");
              }}
              className={`chat-item 
              transition hover:border-hovercolor hover:text-textcolor
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
