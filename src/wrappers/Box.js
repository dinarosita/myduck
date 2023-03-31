import React, { useEffect, useState } from "react";
import BoxTitle from "./BoxTitle";

export default function Box(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [arrow, setArrow] = useState();

  useEffect(() => {
    setArrow((prev) => (isHidden ? <>&#9656;</> : <>&#9662;</>));
  }, [isHidden]);

  function toggleView() {
    setIsHidden((prev) => !prev);
  }

  const boxBorder = props.noborder? "" : "border"

  const boxClass = `border-amber-300 m-2 p-2 ${boxBorder} ${props.addStyle}`;

  if (!props.collapse) {
    return (
      <div className={boxClass}>
        <BoxTitle level={props.level} title={props.title} />
        {props.children}
      </div>
    );
  }

  return (
    <div className={boxClass}>
      <button onClick={toggleView} className="flex items-baseline space-x-2">
        <BoxTitle level={props.level} title={props.title} />
        <p className="text-title">{arrow}</p>
      </button>
      {!isHidden && <div>{props.children}</div>}
    </div>
  );
}
