import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBox from "../sections/NavBox";

export default function Heading() {
  const [chatNav, setChatNav] = useState(false);
  return (
    <div className="border-screen h-fit flex-none border-b bg-opacity-50">
      <div className="w-effective flex items-center justify-between leading-none">
        <div id="headingLeft" className="flex items-center gap-1">
          <div className=" cursor-pointer">
            <button
              onClick={() => setChatNav(prev => !prev)}
              className="relative z-20 lg:opacity-30 lg:pointer-events-none"
            >
              <ion-icon size="large" name="chatbubbles-outline"></ion-icon>
            </button>
            <div
              className={`absolute top-0 z-10 h-screen w-68  bg-gradient-to-r from-white/80  to-sol-50/80 transition-all duration-300 lg:hidden ${
                chatNav ? "left-0 opacity-100" : "-left-full opacity-0"
              }`}
              onClick={() => setChatNav(false)}
            >
              <div
                className={`scrollbar flex h-full w-full flex-col gap-4 overflow-auto px-4 pt-14 pb-4`}
              >
                <div className="h-full w-60 flex-col  p-1 pt-8 pb-10 flex">
                  <NavBox />
                </div>
              </div>
            </div>
 
          </div>

          <div>
            <Link to="/myduck" className=" title text-xl lowercase relative z-10" exact>
              MyDuck
            </Link>
          </div>
        </div>

        <div id="headingRight" className="flex items-center gap-2 ">
          <div>
            <Link to="/myduck/about" className=" cursor-pointer" exact>
              <ion-icon size="large" name="information-circle-outline"></ion-icon>
            </Link>
          </div>

          <div className=" cursor-pointer  opacity-30">
            <ion-icon size="large" name="add-outline"></ion-icon>
          </div>
          <div className="pointer-events-none cursor-pointer  opacity-30 ">
            <ion-icon size="large" name="person-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
