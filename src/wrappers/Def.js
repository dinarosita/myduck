import React from "react";

export default function Def(props) {
  if (props.indent)
    return (
      <div className="my-1">
        <p className="title">{props.title}</p>
        <p className="ml-5">{props.children}</p>
      </div>
    );

  if (props.indent && props.div)
    return (
      <div className="my-1">
        <p className="title">{props.title}</p>
        <div className="ml-5">{props.children}</div>
      </div>
    );

  if (props.div)
    return (
      <div className="my-1">
        <p className="title">{props.title}</p>
        <div>{props.children}</div>
      </div>
    );

  if (props.inline)
    return (
      <div className="my-1">
        <p>
          <span className="title">{props.title}:</span>
          <span className="ml-1">{props.children}</span>
        </p>
      </div>
    );

  return (
    <div className="my-1">
      <p className="title">{props.title}</p>
      <p>{props.children}</p>
    </div>
  );
}
