import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import AddChatForm from "../Modules/AddChatForm";

export default function NavFooter() {
  const { isLoading, mainId, isArchiveMode } = useContext(ChatContext);
  const shouldDisable = isLoading || isArchiveMode || !mainId;

  return (
    <div className={`nav-footer ${shouldDisable && "nonactive-component"}`}>
      <AddChatForm />
    </div>
  );
}
