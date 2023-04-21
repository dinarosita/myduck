import React from "react";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import {
  GlobeAltIcon,
  BeakerIcon,
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";

const iconMapping = {
  about: GlobeAltIcon,
  sandbox: BeakerIcon,
  toggleMode: CodeBracketIcon,
  navMenu: Bars3Icon,
  navClose: XMarkIcon,
};

export default function IconButton(props) {
  const handleLinkClick = useLinkButtonLogic();
  const { handleOpenNav, handleCloseNav } = useNavButtonLogic();
  const IconComponent = iconMapping[props.task];

  const handleClick = () => {
    switch (props.type) {
      case "routing":
        handleLinkClick(`/myduck/${props.task}`);
        break;
      case "navigation":
        props.task === "navMenu" ? handleOpenNav() : handleCloseNav();
        break;
      case "formSubmit":
      case "formCancel":
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
