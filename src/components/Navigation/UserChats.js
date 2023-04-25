import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import UserChatsContext from "../../contexts/UserChatsContext";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function UserChats() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { setIsFlapOpen } = useContext(FlapContext);
  const {
    isLoading,
    isNewUser,
    userChatsData,
    activeChatId,
    updateActiveChatId,
  } = useContext(UserChatsContext);

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
        {isLoading || isNewUser ? (
          <li key={isLoading ? "id-loading" : "id-newUser"}>
            <button
              className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
              aria-label={isLoading ? "Loading chats" : "Welcome message"}
            >
              {isLoading ? "Loading..." : "Hello Duckies!"}
            </button>
          </li>
        ) : (
          userChatsData
            .map((chat) => (
              <li key={chat.id} className="max-w-full">
                <button
                  onClick={() => {
                    updateActiveChatId(chat.id);
                    if (windowSize.width < 480) {
                      setIsFlapOpen(false);
                    }
                    navigate("/myduck");
                  }}
                  className={`chat-button smooth break-words transition hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none
                            ${
                              activeChatId === chat.id && "bg-vincent-950/20 "
                            }`}
                  aria-label={`Open chat: ${chat.title || "Untitled"}`}
                >
                  {chat.title || "Untitled"}
                </button>
              </li>
            ))
            .reverse()
        )}
      </ul>
    </div>
  );
}
