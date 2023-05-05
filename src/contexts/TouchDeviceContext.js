import React, { createContext, useContext, useEffect, useState } from "react";

const TouchDeviceContext = createContext();

export function useIsTouchDevice() {
  return useContext(TouchDeviceContext);
}

function TouchDeviceProvider({ children }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  function detectTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  useEffect(() => {
    setIsTouchDevice(detectTouchDevice());
  }, []);

  return (
    <TouchDeviceContext.Provider value={isTouchDevice}>
      {children}
    </TouchDeviceContext.Provider>
  );
}
export default TouchDeviceContext;
