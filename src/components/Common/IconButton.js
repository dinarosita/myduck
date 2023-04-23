import React from "react";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import {
  BeakerIcon,
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const iconMapping = {
  about: BookOpenIcon,
  sandbox: BeakerIcon,
  toggleMode: CodeBracketIcon,
  navMenu: Bars3Icon,
  navClose: XMarkIcon,
  chatSubmit: CheckCircleIcon,
  chatCancel: XCircleIcon,
  chatDelete: TrashIcon,
  chatTitleEdit: PencilSquareIcon,
  messageSubmit: PaperAirplaneIcon,
  messageEdit: PencilSquareIcon,
  messageDelete: TrashIcon,
};

export default function IconButton(props) {
  const handleLinkClick = useLinkButtonLogic();
  const IconComponent = iconMapping[props.page || props.task];

  const handleClick = (event) => {
    switch (props.type) {
      case "routing":
        handleLinkClick(`/myduck/${props.page}`);
        break;
      default:
        props.onClick && props.onClick(event);
        break;
    }
  };

  return (
    <button
      onClick={(event) => handleClick(event)}
      className={`blush-button h-6 w-6 ${props.addButtonClass}`}
    >
      {IconComponent && (
        <IconComponent
          className={`${props.addIconClass}`}
        />
      )}
    </button>
  );
}
