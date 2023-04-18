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
        class={`ionic text-2xl text-sprig-50 p-0.5 transition hover:text-vincent-500/90   rounded-full hover:bg-sprig-100/50 lg:text-nonactive`}
      ></ion-icon>
    </button>
  );
}
