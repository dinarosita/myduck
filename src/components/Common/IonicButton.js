import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";

export default function IonicButton(props) {
  const { setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();

  function handleLinkClick(link) {
    setIsFlapOpen(false);
    navigate(link);
  }

  

  const iconElement = (
    <ion-icon
      name={`${props.ionic ? props.ionic : "happy"}-outline`}
      class={`ionic text-2xl text-sprig-50 p-0.5 transition hover:text-vincent-500/80   rounded-full hover:bg-sprig-100/50 ${props.addIonicClass}`}
    ></ion-icon>
  );

  return (
    <button
      onClick={props.linkto? () => {handleLinkClick(props.linkto)} : props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`ionic-parent ${props.addClass} `}
    >
      {iconElement}
    </button>
  );
}
