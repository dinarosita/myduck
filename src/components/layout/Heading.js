import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBox from "../sections/NavBox";
import IconWrapper from "../ui/IconWrapper";

export default function Heading() {
  const [chatNav, setChatNav] = useState(false);
  return (
    <div className="border-screen title relative z-20 h-fit  flex-none border-b-2 bg-opacity-50">
      <div className="w-effective flex items-center justify-between leading-none ">
        <div id="headingLeft" className="flex items-center gap-1 ">
          <div className="">
            <IconWrapper
              iconType="chatbubbles"
              onClick={() => setChatNav((prev) => !prev)}
              addClass="relative z-10"
            />

            <div
              className={`
                 fixed top-0 h-full w-64 
                rounded-3xl rounded-l border-4 border-l-0 border-sol-200 bg-gradient-to-r from-white to-sol-50/90 transition-all duration-500 lg:hidden ${
                  chatNav ? "left-0 opacity-100" : "-left-64 opacity-100"
                } flex flex-col px-1 pt-20 pb-12`}
            >
              <div className="flex flex-1 flex-col gap-4 overflow-auto">
                <NavBox />
              </div>
            </div>
          </div>

          <div>
            <Link
              to="/myduck"
              className=" title relative z-30 text-xl lowercase"
              exact
            >
              MyDuck
            </Link>
          </div>
        </div>

        <div id="headingRight" className="flex items-center gap-2 ">
          <IconWrapper iconType="information-circle" to="/myduck/about" />
          <IconWrapper iconType="add-circle" />
          <IconWrapper iconType="person-circle" />
        </div>
      </div>
    </div>
  );
}
