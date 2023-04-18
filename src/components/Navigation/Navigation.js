import React from "react";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import NavButton from "../Common/NavButton";

export default function Navigation() {
  return (
    <nav className="pass-overflow white-frame relative flex flex-col rounded-l-none bg-gradient-to-br from-vincent-400/80 via-vincent-400 to-vincent-600 ">

        <div className="flex flex-row justify-between items-center p-2 pl-3 ">
            <div className="font-bold text-petal text-lg leading-none">Chat History</div>
            <NavButton close addClass="lg:hidden" />
        </div>
        <hr className="white-separator" />

      <ChatHistory />
      <hr className="white-separator" />
      <AddChat />
    </nav>
  );
}
