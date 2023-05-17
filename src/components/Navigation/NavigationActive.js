import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatList from "./ChatList";

export default function NavigationActive() {
  const { isPageLoading, isNewUser } = useContext(ChatContext);

  return (
    // <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4 h-full">
        {isPageLoading || isNewUser ? (
          <li key={isPageLoading ? "id-loading" : "id-newUser"}>
            <button
              className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
              aria-label={isPageLoading ? "Loading chats" : "Welcome message"}
            >
              {isPageLoading ? "Loading..." : "Hello Duckies!"}
            </button>
          </li>
        ) : (
          <ChatList />
        )}
      </ul>
    // </div>
  );
}
