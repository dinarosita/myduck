import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatHistory from "../navigation/ChatHistory";
import AddChat from "../navigation/AddChat";

export default function Heading() {
  const [chatNav, setChatNav] = useState(false);
  return (
    <div className="border-screen flex-none border-b h-fit bg-opacity-50">
      <div className="w-effective flex items-center justify-between leading-none">
        <div id="headingLeft" className="flex items-center gap-1">
          <div className="title cursor-pointer items-center text-3xl">
            <button onClick={
                () => setChatNav(true)
            }>
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </button>
            <nav
              id="chatNav"
              className={`absolute top-0 z-10 h-screen w-full bg-white bg-opacity-90 transition-all duration-300 ${chatNav ? "left-0 opacity-100" : "-left-full opacity-0"}`}
              onClick={() => setChatNav(false)}
            >
              <div
                className={`scrollbar flex h-full w-full flex-col gap-4 overflow-auto px-4 pt-14 pb-4`}
              >
                <ChatHistory />
                <AddChat />
              </div>
            </nav>
            {/* <nav id="useChatNav" className="hidden">
              Chat Nav
            </nav> */}
          </div>

          <div>
            <Link to="/myduck" className=" title text-xl lowercase " exact>
              MyDuck
            </Link>
          </div>
        </div>

        <div id="headingRight" className="flex items-center gap-2 ">
          <div>
            <Link
              to="/myduck/about"
              className=" title cursor-pointer text-2xl  "
              exact
            >
              <ion-icon name="bulb-outline"></ion-icon>
            </Link>
          </div>

          <div className="title cursor-pointer text-3xl ">
            <ion-icon name="add-outline"></ion-icon>
          </div>
          <div className="title pointer-events-none cursor-pointer text-3xl opacity-50 ">
            <ion-icon name="person-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
