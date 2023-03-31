import React from "react";

export default function BoxTitle(props) {
  if (props.level === "h2") return <h2>{props.title}</h2>;
  if (props.level === "h3") return <h3>{props.title}</h3>;
  return <p className="text-title">{props.title}</p>;
}
