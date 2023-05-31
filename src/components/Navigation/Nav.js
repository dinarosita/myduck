import React, { useContext } from "react";
import AddChatForm from "../Modules/AddChatForm";
import NavHeader from "./NavHeader";
import NavBody from "./NavBody";
import ChatContext from "../../contexts/ChatContext";
import NavFooter from "./NavFooter";

export default function Nav() {
  const { isArchiveMode } = useContext(ChatContext);
  return (
    <nav
      className={`pass-overflow main-frame ${isArchiveMode ? "archive-mode"  : "bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700"} relative flex flex-col rounded-l-none  `}
    >
      <NavHeader />
      <hr className="main-separator" />
      <NavBody />
      <hr className="main-separator" />
      <NavFooter />
    </nav>
  );
}
