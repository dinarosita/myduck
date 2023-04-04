import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo128.png";

export default function Header() {
  return (
    <header className="border-b border-sol-ml p-2 ">
      <div className="flex flex-row items-center justify-between">
        <Link to="/myduck" className="group btn border-0 flex flex-row items-center gap-2 text-3xl uppercase">
          <img className="h-10 w-10 group-hover:bg-white group-hover:rounded-full" src={logo} alt="MyDuck logo" />
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
