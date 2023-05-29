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
  PencilIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
  BoltIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
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
  editItem: PencilSquareIcon,
  editChatTitle: PencilIcon,
  messageSubmit: PaperAirplaneIcon,
  messageEdit: PencilSquareIcon,
  messageDelete: TrashIcon,
  customHooks: BoltIcon,
  openArchive: ChevronDoubleUpIcon,
  closeArchive: ChevronDoubleDownIcon,
  closeArchiveX:XMarkIcon,
};

export default function IconButton(props) {
  const handleLinkClick = useLinkButtonLogic();
  const IconComponent = iconMapping[props.page || props.task];

  const handleClick = (e) => {
    switch (props.type) {
      case "routing":
        handleLinkClick(`/myduck/${props.page}`);
        break;
      default:
        props.onClick && props.onClick(e);
        break;
    }
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`blush-button  ${props.addButtonClass}`}
    >
      {IconComponent && <IconComponent className={`${props.addIconClass}`} />}
    </button>
  );
}
