import React, { useEffect, useState } from "react";
import BoxTitle from "./BoxTitle";

export default function Box(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [arrow, setArrow] = useState();

  useEffect(() => {
    if (props.expand) setIsHidden(false)
  }, [])

  useEffect(() => {
    setArrow((prev) => (isHidden ? <>&#9656;</> : <>&#9662;</>));
  }, [isHidden]);



  function toggleView() {
    setIsHidden((prev) => !prev);
  }

  const boxBorder = props.noborder? "" : "border"

  const boxClass = `border-sol-300 m-2 p-1  ${boxBorder} ${props.addStyle}`;


  if (!props.collapse && !props.expand) {
    return (
      <div className={boxClass}>
        <BoxTitle level={props.level} title={props.title} />
        {props.children}
      </div>
    );
  }

  if (props.expand) {
    
    return (
        <div className={boxClass}>
          <button onClick={toggleView} className="flex items-baseline space-x-2 rounded-r-full pr-2">
            <BoxTitle level={props.level} title={props.title} />
            <p className="title">{arrow}</p>
          </button>
          {!isHidden && <div>{props.children}</div>}
        </div>
      );
  }

  return (
    <div className={boxClass}>
      <button onClick={toggleView} className="flex items-baseline space-x-2 rounded-r-full pr-2">
        <BoxTitle level={props.level} title={props.title} />
        <p className="title">{arrow}</p>
      </button>
      {!isHidden && <div>{props.children}</div>}
    </div>
  );
}
