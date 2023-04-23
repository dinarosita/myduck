import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function ChatList() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { isLoading } = useContext(ChatListContext);
  const { setIsFlapOpen } = useContext(FlapContext);
  const { chatAvailable, chatList, activeChatId, updateActiveChatId } =
    useContext(ChatListContext);

  function getChatButtons() {
    if (isLoading) {
      return [
        <button
          key="chatIsLoading"
          className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
        >
          Loading...
        </button>,
      ];
    } else if (!chatAvailable) {
      return [
        <button
          key="noChat"
          className={`chat-button pointer-events-none bg-vincent-950/20`}
        >
          Enter your first chat
        </button>,
      ];
    } else {
      return chatList
        .map((chat) => (
          <button
            key={chat.id}
            onClick={() => {
              updateActiveChatId(chat.id);
              if (windowSize.width < 480) {
                setIsFlapOpen(false);
              }
              navigate("/myduck");
            }}
            className={`chat-button hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none transition smooth
            ${activeChatId === chat.id && "bg-vincent-950/20 "}`}
          >
            {chat.title || "Untitled"}
          </button>
        ))
        .reverse();
    }
  }

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
        {getChatButtons()}
      </ul>
    </div>
  );
}
