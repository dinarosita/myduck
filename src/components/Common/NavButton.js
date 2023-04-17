import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";

export default function NavButton(props) {
  const { isFlapOpen, setIsFlapOpen } = useContext(FlapContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleOpenNav() {
    if (location.pathname !== "/myduck") {
      navigate("/myduck");
      setIsFlapOpen(true);
    }
    setIsFlapOpen(!isFlapOpen);
  }

  function handleCloseNav() {
    setIsFlapOpen(false);
  }

  return (
    <button
      className={`ionic-parent lg:pointer-events-none ${props.addClass}`}
      onClick={props.close ? handleCloseNav : handleOpenNav}
    >
      <ion-icon
        name={`${props.close ? "close" : "menu"}-outline`}
        class={`ionic ${props.close ? "text-2xl" : "text-3xl"} text-maincolor transition hover:text-hovercolor lg:text-nonactive`}
      ></ion-icon>
    </button>
  );
}
