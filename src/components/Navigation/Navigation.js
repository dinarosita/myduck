import React, { useContext } from "react";
import AddChat from "../Navigation/AddChat";
import NavTitle from "./NavTitle";
import NavBody from "./NavBody";
import ChatContext from "../../contexts/ChatContext";
export default function Navigation() {
  const { isArchiveMode } = useContext(ChatContext);
  return (
    <nav
      className={`pass-overflow blush-frame ${isArchiveMode ? "archive-mode"  : "bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700"} relative flex flex-col rounded-l-none  `}
    >
      <NavTitle />
      <hr className="blush-separator" />
      <NavBody />
      <hr className="blush-separator" />
      <AddChat nav />
    </nav>
  );
}
