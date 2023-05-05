import React from "react";
import useToggle from "./useToggle";

export default function UsingUseToggle() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="flex-col-center">
      <h2>useToggle</h2>
      <div className="sandbox">
        <div className="sandbox-display">
          {`${value.toString()[0].toUpperCase()}${value.toString().slice(1)}`}
        </div>
        <div>3 modes:</div>
        <div className="flex flex-row gap-1">
          <button className="sandbox-button" onClick={() => toggleValue(true)}>True</button>
          <button className="sandbox-button" onClick={toggleValue}>Toggle</button>
          <button className="sandbox-button" onClick={() => toggleValue(false)}>False</button>
        </div>
      </div>
    </div>
  );
}
