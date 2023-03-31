import React from "react";

export default function Def(props) {
  if (props.indent)
    return (
      <div className="my-1">
        <p className="text-title">{props.title}</p>
        <p className="ml-5">{props.children}</p>
      </div>
    );

  if (props.inline)
    return (
      <div className="my-1">
        <p>
          <span className="text-title">{props.title}:</span>
          <span className="ml-1">{props.children}</span>
        </p>
      </div>
    );
  return (
    <div className="my-1">
      <p className="text-title">{props.title}</p>
      <p>{props.children}</p>
    </div>
  );
}
