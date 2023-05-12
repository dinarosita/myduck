import { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import { DATABASE_URL } from "../config";

export function useEditChatTitle() {
  const { setChatList } = useContext(ChatContext);

  function runEditChatTitle(chats, editedId, newTitle) {
    const newList = chats.map((chat) => {
      if (chat.id === editedId) {
        return {
          ...chat,
          title: newTitle,
        };
      }
      return chat;
    });
    setChatList(newList);
    editTitleDatabase(editedId, newTitle);
  }

  async function editTitleDatabase(editedId, newTitle) {
    try {
      const response = await fetch(
        `${DATABASE_URL}/chatMeta/${editedId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ title: newTitle }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      console.log("Chat title updated in the database");
    } catch (error) {
      console.error("Error updating chat context: ", error);
    }
  }
  return {
    runEditChatTitle,
  };
}
