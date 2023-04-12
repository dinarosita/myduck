import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";

export default function IonicButton(props) {
  const { setFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();

  function handleLinkClick(link) {
    setFlapOpen(false);
    navigate(link);
  }

  const iconElement = (
    <ion-icon
      name={`${props.ionic ? props.ionic : "sad"}-outline`}
      class="ionic text-2xl text-maincolor transition hover:text-hovercolor"
    ></ion-icon>
  );

//   if (props.linkto) {
//     return (
//       <button onClick={() => {handleLinkClick(props.linkto)}} className={`ionic-parent ${props.addClass}`}>
//         {iconElement}
//       </button>
//     );
//   }
  return (
    <button
      onClick={props.linkto? () => {handleLinkClick(props.linkto)} : props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`ionic-parent ${props.addClass}`}
    >
      {iconElement}
    </button>
  );
}
