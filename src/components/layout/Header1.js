import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo128.png";

export default function Header1() {
  return (
    <header className="border-b border-sol-ml bg-gradient-to-b from-sol-50 to-white p-2">
      <div className="flex flex-row items-center justify-between">
        <Link
          to="/myduck"
          className="btn group flex flex-row items-center gap-2 border-0 text-3xl uppercase"
        >
          <img
            className="h-10 w-10 group-hover:rounded-full group-hover:bg-white"
            src={logo}
            alt="MyDuck logo"
          />
          MyDuck
        </Link>

        <nav className="flex flex-row gap-2">
          <Link to="/myduck/sleekduck" className="btn">
            SleekDuck
          </Link>

          <Link to="/myduck/tailwind" className="btn">
            Tailwind
          </Link>
          <Link to="/myduck/sandbox" className="btn">
            Sandbox
          </Link>
        </nav>
      </div>
    </header>
  );
}
