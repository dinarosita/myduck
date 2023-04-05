import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [openChat, setOpenChat] = useState(false);
  let [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    { name: "MyDuck", path: "/myduck" },
    { name: "SleekDuck", path: "/myduck/sleekduck" },
    { name: "Tailwind", path: "/myduck/tailwind" },
    { name: "Sandbox", path: "/myduck/sandbox" },
  ];

  return (
    <header className="fixed top-0 right-0 flex w-full flex-row items-center justify-between bg-gradient-to-b from-sol-50 to-white px-4 py-2">
      <div
        id="left"
        className="title flex flex-row items-center gap-2  lowercase"
      >
        <div onClick={() => setOpenChat(!openChat)} className="title text-2xl">
          <ion-icon name="chatbubbles-outline"></ion-icon>
        </div>
        {/* <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
        </ul> */}

        <div id="logo">
          <Link to="/myduck" className="text-xl uppercase focus:ring-0 hover:text-sol-900">
            MyDuck
          </Link>
        </div>
      </div>
      <nav>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="title cursor-pointer text-2xl sm:hidden"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>

        <ul
          className={`duration-500s absolute left-0 bottom-0 z-[-1] flex h-screen w-full flex-col gap-2   transition-all duration-500 ease-in-out
          sm:flex sm:flex-row
          sm:static sm:bg-transparent
          sm:h-fit
          ${openMenu ? "top-12 bg-white" : "top-[-490px]"}`}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className=" text-right font-bold text-sol hover:bg-sol-50 hover:bg-opacity-50 sm:hover:bg-opacity-0 "
            >
              <Link
                to={item.path}
                onClick={() => setOpenMenu(!openMenu)}
                className="block w-full p-2 pr-4 duration-300  hover:text-sol-m focus:ring-0 sm:transition-none sm:hover:text-sol-900"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
