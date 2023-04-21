import React from "react";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import {
  GlobeAltIcon,
  BeakerIcon,
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";

const iconMapping = {
  about: GlobeAltIcon,
  sandbox: BeakerIcon,
  toggleMode: CodeBracketIcon,
  navMenu: Bars3Icon,
  navClose: XMarkIcon,
  chatSubmit: CheckCircleIcon,
  chatCancel: XCircleIcon,
  chatDelete: TrashIcon,
  chatTitleEdit: PencilSquareIcon,
  MessageSubmit: PaperAirplaneIcon,
  MessageEdit: PencilSquareIcon,
  MessageDelete: TrashIcon,
};

export default function IconButton(props) {
  const handleLinkClick = useLinkButtonLogic();
  const { handleNavMenu, handleNavClose } = useNavButtonLogic();
  const IconComponent = iconMapping[props.task];

  const handleClick = () => {
    switch (props.type) {
      case "routing":
        handleLinkClick(`/myduck/${props.task}`);
        break;
      case "navigation":
        props.task === "navMenu" ? handleNavMenu() : handleNavClose();
        break;
      case "chat":
        // (props.task === "chatSubmit") ? handleChatSubmit() : handleChatCancel();
        // More to come: chatDelete, chatTitleEdit. Use switch.
        break;
      case "message":
        // handleMessageSubmit();
        // More to come: messageDelete. Use switch.
        break;
      default:
        props.onClick && props.onClick();
        break;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`blush-button  ${props.addButtonClass}`}
    >
      {IconComponent && (
        <IconComponent
          className={`blush-button h-6 w-6 ${props.addIconClass}`}
        />
      )}
    </button>
  );
}
