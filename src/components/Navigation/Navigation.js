import React, { useContext } from "react";
import AddChat from "../Modules/AddChat";
import NavTitle from "./NavTitle";
import NavBody from "./NavBody";
import ChatContext from "../../contexts/ChatContext";
export default function Navigation() {
  const { isArchiveMode } = useContext(ChatContext);
  return (
    <nav
      className={`pass-overflow main-frame ${isArchiveMode ? "archive-mode"  : "bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700"} relative flex flex-col rounded-l-none  `}
    >
      <NavTitle />
      <hr className="main-separator" />
      <NavBody />
      <hr className="main-separator" />
      <AddChat nav />
    </nav>
  );
}
