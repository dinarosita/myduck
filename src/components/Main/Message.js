import React, { useRef, useState } from "react";
import EditMessageMode from "../Menu/EditMessageMode";
import MenuWrapper from "../Menu/MenuWrapper"
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Message({ id, message }) {
  const [showEditMode, setShowEditMode] = useState(false);
  const textareaRef = useRef();

  const menuItems = [
    {
      type: "edit",
      icon: PencilSquareIcon,
      actionLayout: () => setShowEditMode(true),
      confirmationFunction: null,
    },
    {
      type: "archive",
      icon: ArchiveBoxArrowDownIcon,
      actionLayout: null,
      confirmationFunction: onMsgArchive,
    },
  ];

  function onMsgArchive() {
    //
  }

  function confirmEdit() {}

  return (
    <>
      {showEditMode ? (
        <EditMessageMode
          textareaRef={textareaRef}
          message={message}
          confirmEdit={confirmEdit}
          setShowEditMode={setShowEditMode}
        />
      ) : (
        <MenuWrapper
          menuItems={menuItems}
          showEditMode={showEditMode}
          className="msg-menu"
        >
          <div
            key={id}
            className="relative flex w-fit  max-w-full flex-col break-words rounded-r-3xl bg-petal/80 py-2 pl-2 pr-4 leading-tight"
          >
            {message}
          </div>
        </MenuWrapper>
      )}
    </>
  );
}
