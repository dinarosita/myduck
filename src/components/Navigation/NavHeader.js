import React, { useContext } from "react";
import IconButton from "../Common/IconButton";
import { useNavFlap } from "../../hooks/useNavFlap";
import ChatContext from "../../contexts/ChatContext";

export default function NavHeader() {
  const { isLoading } = useContext(ChatContext);
  const { handleNavClose } = useNavFlap();

  return (
    <div className="flex flex-row items-center justify-between p-2 pl-3 ">
      <div
        className={`text-lg font-bold leading-none text-petal ${
          isLoading && "text-opacity-40"
        }`}
      >
        Chat History
      </div>
      <IconButton
        onClick={handleNavClose}
        task="navClose"
        addButtonClass="lg:hidden h-6 w-6"
      />
    </div>
  );
}
