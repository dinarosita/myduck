import React from "react";

export default function Button(props) {
  const buttonClass = `btn ${props.addStyle}`;

  return (
    <button onClick={props.onClick} type={props.type} className={buttonClass}>
      {props.children}
    </button>
  );
}
