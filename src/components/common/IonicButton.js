import React from "react";
import { Link } from "react-router-dom";

export default function IonicButton(props) {
  const iconElement = (
    <ion-icon
      name={`${props.ionic ? props.ionic : "sad"}-outline`}
      class="text-2xl text-maincolor transition hover:text-hovercolor ionic"
    ></ion-icon>
  );

  const isButtonSet =
    props.onClick ||
    props.type ||
    props.form ||
    props.disable ||
    props.linkto ||
    props.ionic;

  if (props.linkto) {
    return (
      <Link to={props.linkto} className={`ionic-parent ${props.addClass}`}>
        {iconElement}
      </Link>
    );
  }
  return (
    <button
      onClick={isButtonSet ? props.onClick : () => alert("Configure me!")}
      type={props.type}
      disabled={props.disabled}
      className={`ionic-parent ${props.addClass}`}
    >
      {iconElement}
    </button>
  );
}
