import React from "react";
import AddChat from "../Navigation/AddChat";
import NavTitle from "./NavTitle";
import NavBody from "./NavBody";
export default function Navigation() {
  return (
    <nav className="pass-overflow blush-frame relative flex flex-col rounded-l-none bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700 ">
      <NavTitle />
      <hr className="blush-separator" />
      <NavBody />
      <hr className="blush-separator" />
      <AddChat nav />
    </nav>
  );
}
