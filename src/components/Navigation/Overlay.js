import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";

function Overlay() {
  const { isFlapOpen, handleCloseFlap } = useContext(FlapContext);


  return (
    <div
      onClick={handleCloseFlap}

      className={`hidden fixed z-10 inset-0 bg-black opacity-40 xs:hidden ${
        isFlapOpen ? "visible" : "invisible"
      }`}
    />
  );
}

export default Overlay;
