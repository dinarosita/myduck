import React, { useContext } from "react";
import ChatList from "../Navigation/ChatList";
import AddChat from "../Navigation/AddChat";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";
import ChatListContext from "../../contexts/ChatListContext";


export default function Navigation() {
    const {isLoading, chatAvailable} = useContext(ChatListContext)
    const {handleNavClose} = useNavButtonLogic()
  return (
    <nav className="pass-overflow blush-frame relative flex flex-col rounded-l-none bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700 ">

        <div className="flex flex-row justify-between items-center p-2 pl-3 ">
            <div className={`font-bold text-petal text-lg leading-none ${isLoading && "text-opacity-30"}`}>Chat History</div>
            <IconButton onClick={handleNavClose} task="navClose" addButtonClass="lg:hidden" />
        </div>
        <hr className="blush-separator" />

      <ChatList />
      <hr className="blush-separator" />
      <AddChat />
    </nav>
  );
}
