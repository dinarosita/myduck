import { useContext } from "react";
import ChatContext from "../contexts/ChatContext";
import { determineMainActiveId } from "../utils/chatIdManagement";

export default function useToggleMode() {
  const {
    chatArray,
    setIsArchiveMode,
    hasActive,
    hasArchived,
    setMainId,
  } = useContext(ChatContext);

  function switchToArchiveMode() {
    if (hasArchived) {
      setIsArchiveMode(true);
      setMainId(chatArray.find((chat) => chat.archived).id);
    } else {
      switchToNormalMode();
    }
  }

  function switchToNormalMode() {
    setIsArchiveMode(false);
    setMainId(determineMainActiveId(chatArray, hasActive));
  }

  return { switchToArchiveMode, switchToNormalMode };
}
