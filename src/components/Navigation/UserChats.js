import React, { useContext, useEffect, useState } from "react";
import UserChatsContext from "../../contexts/UserChatsContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function UserChats() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { setIsFlapOpen } = useContext(FlapContext);
  const {
    isLoading,
    isNewUser,
    userChats,
    activeChatId,
    updateActiveChatId,
  } = useContext(UserChatsContext);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isLoading || isNewUser) {
      setContent(
        <button
          className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
        >
          {isLoading ? "Loading..." : "Hello Duckies!"}
        </button>
      );
    } else {
      setContent(
        userChats
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
              className={`chat-button smooth transition hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none break-words
            ${activeChatId === chat.id && "bg-vincent-950/20 "}`}
            >
              {chat.title || "Untitled"}
            </button>
          ))
          .reverse()
      );
    }
  }, [isLoading, isNewUser, activeChatId]);

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
        {content}
      </ul>
    </div>
  );
}
