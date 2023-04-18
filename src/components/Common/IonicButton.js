import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";

export default function IonicButton(props) {
  const { setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();

  function handleLink(link) {
    setIsFlapOpen(false);
    navigate(link);
  }

  return (
    <button
      onClick={
        props.linkto
          ? () => {
              handleLink(props.linkto);
            }
          : props.onClick
      }
      type={props.type}
      disabled={props.disabled}
      className={`white-button ${props.addClass} `}
    >
      <ion-icon
        name={`${props.ionic ? props.ionic : "happy"}-outline`}
        class={`text-2xl 
      transition smooth white-button
      ${props.addIonicClass}`}
      ></ion-icon>
    </button>
  );
}
