import React, { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../../contexts/ChatContext";
import AddMessageForm from "../Modules/AddMessageForm"

export default function MainFooter() {
  const { mainId, isLoading, isArchiveMode} = useContext(ChatContext);
  const shouldDisable = isLoading || isArchiveMode || !mainId;

  return (
    <section
      className={` flex-none bg-transparent text-center ${shouldDisable && "nonactive-component"
      }`}
    >
      <AddMessageForm />
    </section>
  );
}
