import React from "react";
import Navigation from "./Navigation";
import AddChat from "./AddChat";

export default function NavBox() {
  return (
    <>
      <h2 className="flex-none pl-1 text-olive-600">Chatrooms</h2>
      <div className="scrollnav flex-1 overflow-auto pt-2 ">
        <Navigation />
      </div>
      <div className="w-full flex-none pt-4">
        <AddChat />
      </div>
    </>
  );
}
