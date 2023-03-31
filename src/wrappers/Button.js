import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="rounded-full border border-amber-300 px-4 py-1 text-sm font-semibold text-amber-600 hover:border-transparent hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
    >
      {props.children}
    </button>
  );
}
