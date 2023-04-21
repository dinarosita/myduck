import React from "react";
import { useLinkButtonLogic } from "../../hooks/useLinkButtonLogic";
import { BookOpenIcon, NewspaperIcon, GlobeAltIcon, BeakerIcon } from "@heroicons/react/24/solid";


export default function IonicButton(props) {
  const handleLinkClick = useLinkButtonLogic()

  return (
    <button
      onClick={
        props.linkto
          ? () => {
            handleLinkClick(props.linkto);
            }
          : props.onClick
      }
      type={props.type}
      disabled={props.disabled}
      className={`blush-button icon-container ${props.addClass} `}
    >
      <ion-icon
        name={`${props.ionic ? props.ionic : "happy"}-outline`}
        class={`text-2xl 
      transition smooth blush-button
      ${props.addIonicClass}`}
      ></ion-icon>
    </button>
  );
}