import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBox from "../sections/NavBox";

export default function Heading() {
  const [chatNav, setChatNav] = useState(false);
  return (
    <div className="border-screen relative z-20 h-fit flex-none  border-b bg-opacity-50 title-red">
      <div className="w-effective flex items-center justify-between leading-none ">
        <div id="headingLeft" className="flex items-center gap-1 ">
          <div className=" cursor-pointer ">
            <button
              onClick={() => setChatNav((prev) => !prev)}
              className="relative  z-30 text-red-400 lg:pointer-events-none "
            >
              <ion-icon
                size="large"
                color="red"
                bg="red"
                name="chatbubbles-outline"
              ></ion-icon>
            </button>

            <div
              className={`
                 fixed top-0 h-full w-64 
                rounded-3xl rounded-l border-4 border-red-200 bg-gradient-to-r from-white to-red-50 transition-all duration-500 lg:hidden ${
                  chatNav ? "left-0 opacity-100" : "-left-64 opacity-100"
                } flex flex-col pt-20 pb-12 px-1`}
            >
              <div className="flex-1 flex flex-col overflow-auto gap-4">
                <NavBox />
              </div>
            </div>

          </div>

          <div>
            <Link
              to="/myduck"
              className="font-bold relative z-30 text-xl text-red-400 lowercase"
              exact
            >
              MyDuck
            </Link>
          </div>
        </div>

        <div id="headingRight" className="flex items-center gap-2 ">
          <div>
            <Link to="/myduck/about" className=" cursor-pointer" exact>
              <ion-icon
                size="large"
                name="information-circle-outline"
              ></ion-icon>
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
