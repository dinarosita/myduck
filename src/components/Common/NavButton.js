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
      className={`white-button lg:nonactive-button ${props.addClass}`}
      onClick={props.close ? handleCloseNav : handleOpenNav}
    >
      <ion-icon
        name={`${props.close ? "close" : "menu"}-outline`}
        class={`white-button text-2xl transition lg:nonactive-button`}
      ></ion-icon>
    </button>
  );
}
