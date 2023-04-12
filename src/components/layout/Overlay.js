import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";

function Overlay() {
  const { flapOpen, setFlapOpen, overlayVisible, setOverlayVisible } = useContext(FlapContext);

  const handleClick = () => {
    if (flapOpen) {
      setFlapOpen(false);
      setOverlayVisible(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed z-10 inset-0 bg-white opacity-50 ${
        overlayVisible ? "visible" : "invisible"
      }`}
    />
  );
}

export default Overlay;
