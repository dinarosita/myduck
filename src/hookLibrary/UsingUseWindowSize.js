import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export default function UsingUseWindowSize() {
  const windowSize = useWindowSize();
  return (
    <div className="flex-col-center">
      <h2>useWindowSize</h2>
      <div className="sandbox">
        <p>Window's inner width and height</p>
        <p>Width: <span className="sandbox-display px-2 py-0 rounded-full ">{windowSize.width}</span> px</p>
        <p>Height: <span className="sandbox-display px-2 py-0 rounded-full ">{windowSize.height}</span> px</p>
      </div>
    </div>
  );
}
