import { useContext } from "react";
import ChatContext from "../contexts/ChatContext";
import { determineMainActiveId } from "../utils/chatIdManagement";

export default function useArchiveMode() {
  const {
    chatCollection,
    setIsArchiveMode,
    activeExist,
    archivedExist,
    setMainId,
    updateIdStates,
  } = useContext(ChatContext);

  function switchToArchiveMode() {
    if (archivedExist) {
      setIsArchiveMode(true);
      setMainId(chatCollection.find((chat) => chat.archived).id);
    } else {
      switchToNormalMode();
    }
  }

  function switchToNormalMode() {
    setIsArchiveMode(false);
    updateIdStates(determineMainActiveId(chatCollection, activeExist));
  }

  return { switchToArchiveMode, switchToNormalMode };
}
