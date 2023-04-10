import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "../ui/IconButton";
import NavFlap from "./NavFlap";

export default function Heading() {
  const [openFlap, setOpenFlap] = useState(false);
  return (
    <div className="border-main relative z-20 h-fit   flex-none border-t-0 border-l-0  border-r-0 bg-opacity-50 ">
      <div className="w-effective flex items-center justify-between leading-none ">
        <div id="headingLeft" className="flex items-center gap-2 ">
          <div>
            <IconButton
              ionic="chatbubbles"
              onClick={() => setOpenFlap((prev) => !prev)}
              addClass="relative z-10"
            />

              <NavFlap openFlap={openFlap}/>
          </div>

          <div>
            <Link
              to="/myduck"
              className=" title relative z-30 text-lg font-bold uppercase tracking-wide"
              exact
            >
              MyDuck
            </Link>
          </div>
        </div>

        <div id="headingRight" className="flex items-center gap-2 ">
          <IconButton ionic="fish" linkto="/myduck/sandbox" />
          <IconButton ionic="information-circle" linkto="/myduck/about" />
          <IconButton ionic="add-circle" />
          <IconButton ionic="person-circle" />
          <IconButton ionic="skull" linkto="/myduck/old" />
        </div>
      </div>
    </div>
  );
}
