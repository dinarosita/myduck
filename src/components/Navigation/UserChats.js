import React, { useContext, useEffect, useState } from "react";
import UserChatsContext from "../../contexts/UserChatsContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function UserChats() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { setIsFlapOpen } = useContext(FlapContext);
  const { isLoading, isNewUser, userChats, activeChatId, updateActiveChatId } =
    useContext(UserChatsContext);
  const [content, setContent] = useState();

  useEffect(() => {
    function generateContent() {
      if (isLoading || isNewUser) {
        return (
          <li key={isLoading ? "id-loading" : "id-newUser"}>
            <button
              className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
            >
              {isLoading ? "Loading..." : "Hello Duckies!"}
            </button>
          </li>
        );
      } else {
        return userChats
          .map((chat) => (
            <li key={chat.id}>
            <button
              
              onClick={() => {
                updateActiveChatId(chat.id);
                if (windowSize.width < 480) {
                  setIsFlapOpen(false);
                }
                navigate("/myduck");
              }}
              className={`chat-button smooth break-words transition hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none
                  ${activeChatId === chat.id && "bg-vincent-950/20 "}`}
            >
              {chat.title || "Untitled"}
            </button></li>
          ))
          .reverse();
      }
    }
    setContent(generateContent());
  }, [
    isLoading,
    isNewUser,
    activeChatId,
    navigate,
    setIsFlapOpen,
    updateActiveChatId,
    userChats,
    windowSize.width,
  ]);

//   To inlude all or jsut the essential: From the dependencies listed above, the decision maker is only isLoading, isNewUser, and activeChatId. But the rest of the variable values does needed to be in. Even though will not change or the change doesn't matter to refresh. 

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
        {content}
      </ul>
    </div>
  );
}
