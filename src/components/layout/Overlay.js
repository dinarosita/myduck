import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";

function Overlay() {
  const { flapOpen, handleCloseFlap } = useContext(FlapContext);


  return (
    <div
      onClick={handleCloseFlap}

      className={`fixed z-10 inset-0 bg-black opacity-40 sm:hidden ${
        flapOpen ? "visible" : "invisible"
      }`}
    />
  );
}

export default Overlay;
