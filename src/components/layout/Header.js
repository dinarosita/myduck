import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo128.png";

export default function Header() {
  return (
    <header className="border-b border-gold-ml p        -2 ">
      <div className="flex flex-row items-center justify-between">
        <Link to="/myduck" className="btn border-0 flex flex-row items-center gap-2">
          <img className="h-10 w-10 " src={logo} alt="MyDuck logo" />
          <h1>MyDuck</h1>
        </Link>

        <nav className="flex flex-row gap-2">
          <Link to="/myduck/sleekduck" className="btn">
            SleekDuck
          </Link>

          <Link to="/myduck/tailwind" className="btn">
            Tailwind
          </Link>
        </nav>
      </div>
    </header>
  );
}
