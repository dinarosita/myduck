import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../App";
import ChatHistory from "../navigation/ChatHistory";
import AddChat from "../navigation/AddChat";

function Header() {
  const [chatNav, setChatNav] = useState(false);
  const [pageNav, setPageNav] = useState(false);

  return (
    <div>
      <header className="to-none absolute z-20 flex h-12 w-full flex-row items-center justify-between bg-gradient-to-b from-sol-50 px-4">
        <div left className="flex flex-row items-center gap-2">
          <div
            onClick={() => {
              setChatNav(!chatNav);
              setPageNav(false);
            }}
            className="title cursor-pointer text-3xl"
          >
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
          <div logo>
            <Link
              to="/myduck"
              className=" title text-xl lowercase"
              exact
              onClick={() => {
                setPageNav(false);
                setChatNav(false);
              }}
            >
              MyDuck
            </Link>
          </div>
        </div>
        <div
          right
          onClick={() => {
            setPageNav(!pageNav);
            setChatNav(false);
          }}
          className="title cursor-pointer text-3xl sm:hidden"
        >
          <ion-icon
            name={pageNav ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>
      </header>

      <nav
        id="chatNav"
        className={`absolute top-0 z-10 h-screen w-full bg-white bg-opacity-90 transition-all duration-300 ${
          chatNav ? "left-0 opacity-100" : "-left-full opacity-0"
        }`}
        onClick={() => setChatNav(false)}
      >
        <div
          className={`scrollbar flex h-full w-full flex-col gap-4 overflow-auto px-4 pt-14 pb-4 sm:flex-row`}
        >
          <ChatHistory />
          <AddChat />
        </div>
      </nav>

      <nav
        id="pageNav"
        className={`absolute top-0 z-10 h-screen w-full bg-white bg-opacity-90 transition-all duration-300  sm:right-0 sm:flex sm:h-fit sm:flex-row sm:justify-end sm:opacity-100 ${
          pageNav ? "right-0 opacity-100" : "-right-full opacity-0"
        }`}
        onClick={() => setPageNav(false)}
      >
        <ul
          className={`scrollbar flex h-full flex-col gap-2 overflow-auto pt-12 pb-4 sm:flex-row sm:flex-row `}
        >
          {PAGES.map((page) => (
            <li className=" to-none sm: bg-gradient-to-l bg-none from-sol-50">
              <Link
                key={page.name}
                to={page.path}
                onClick={() => setPageNav(false)}
                exact
                className="title block h-full w-full py-2 px-6 text-right "
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Header;
