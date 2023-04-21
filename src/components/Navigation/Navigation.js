import React from "react";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import NavButton from "../Common/NavButton";

export default function Navigation() {
  return (
    <nav className="pass-overflow blush-frame relative flex flex-col rounded-l-none bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700 ">

        <div className="flex flex-row justify-between items-center p-2 pl-3 ">
            <div className="font-bold text-petal text-lg leading-none">Chat History</div>
            <NavButton close addClass="lg:hidden" />
        </div>
        <hr className="blush-separator" />

      <ChatHistory />
      <hr className="blush-separator" />
      <AddChat />
    </nav>
  );
}
