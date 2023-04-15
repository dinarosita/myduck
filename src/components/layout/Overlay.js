import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";

function Overlay() {
  const { flapOpen, setFlapOpen } = useContext(FlapContext);

  const handleClick = () => {
      setFlapOpen(false);
  };

  return (
    <div
      onClick={() => setFlapOpen(false)}
      className={`fixed z-10 inset-0 bg-white opacity-70 sm:hidden ${
        flapOpen ? "visible" : "invisible"
      }`}
    />
  );
}

export default Overlay;
