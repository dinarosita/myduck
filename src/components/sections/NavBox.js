import React from "react";
import Navigation from "./Navigation";
import AddChat from "./AddChat";

export default function NavBox() {
  return (
    <>
      <p className="title text-lg flex-none pl-1 text-sol">Chatrooms</p>
      <div className="scrollmsg flex-1 overflow-auto pt-2 ">
        <Navigation />
      </div>
      <div className="w-full flex-none pt-4">
        <AddChat />
      </div>
    </>
  );
}
