/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

export default function Box(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [arrow, setArrow] = useState();

  useEffect(() => {
    if (props.expand) setIsHidden(false);
  }, []);

  useEffect(() => {
    setArrow((prev) => (isHidden ? <>&#9656;</> : <>&#9662;</>));
  }, [isHidden]);

  function toggleView() {
    setIsHidden((prev) => !prev);
  }

  const boxBorder = props.noborder ? "" : "border";

  const boxClass = `p-1  ${boxBorder} ${props.addClass}`;

  if (!props.collapse && !props.expand) {
    return (
      <div className={boxClass}>
        <h2 className="font-bold text-petal text-lg">{props.title}</h2>
        {props.children}
      </div>
    );
  }

  if (props.expand) {
    return (
      <div className={boxClass}>
        <button
          onClick={toggleView}
          className="flex items-baseline space-x-2 rounded-r-full pr-2"
        >
          <h2 className="font-bold text-petal text-lg">{props.title}</h2>
          <p className="titletext">{arrow}</p>
        </button>
        {!isHidden && <div>{props.children}</div>}
      </div>
    );
  }

  return (
    <div className={boxClass}>
      <button
        onClick={toggleView}
        className="flex items-baseline space-x-2 rounded-r-full pr-2"
      >
        <h2 className="font-bold text-petal text-lg">{props.title}</h2>
        <p className="titletext">{arrow}</p>
      </button>
      {!isHidden && <div>{props.children}</div>}
    </div>
  );
}
