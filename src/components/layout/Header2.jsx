import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 w-full border-b border-sol-50 ">
      <div className="title items-center justify-between bg-gradient-to-b from-sol-l to-white py-2 px-4  sm:flex ">
        <Link
          to="/myduck"
          className="flex w-fit cursor-pointer items-center space-x-2 text-3xl font-bold focus:ring-0
 "
        >
          <span>MyDuck</span>
          <span>
            <ion-icon name="chatbubble-outline"></ion-icon>
          </span>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-4 cursor-pointer text-3xl sm:hidden"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>

        <ul
          className={`absolute right-0 z-[-1] w-full bg-white pr-4 text-right font-bold text-sol-m shadow-lg shadow-sol-50 transition-all duration-300 ease-in sm:static sm:z-auto sm:flex sm:w-auto sm:items-center sm:bg-transparent sm:pb-0 sm:pl-0 sm:shadow-none ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <li className="my-2  sm:my-0 sm:ml-8">
            <Link
              to="/myduck/sleekduck"
              className="duration-300 hover:text-sol-md focus:ring-0"
              onClick={() => setOpen(!open)}
            >
              SleekDuck
            </Link>
          </li>
          <li className="my-2  sm:my-0 sm:ml-8">
            <Link
              to="/myduck/tailwind"
              className="duration-300 hover:text-sol-md focus:ring-0"
              onClick={() => setOpen(!open)}
            >
              Tailwind
            </Link>
          </li>
          <li className="my-2  sm:my-0 sm:ml-8">
            <Link
              to="/myduck/sandbox"
              className="duration-300 hover:text-sol-md focus:ring-0"
              onClick={() => setOpen(!open)}
            >
              Sandbox
            </Link>
          </li>
          <li className="my-2 opacity-70  sm:my-0 sm:ml-8">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header2;
