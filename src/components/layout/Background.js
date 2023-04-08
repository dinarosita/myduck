// props "top" and "bottom" : display top and bottom gradient respectivel

import React from "react";

export default function Background(props) {
  return (
    <div className="absolute z-[-10] pointer-events-none overflow-hidden bg-opacity-50">
      {props.top && (
        <div className={`fixed top-0 h-20 w-screen bg-gradient-to-b from-sol-50 `}></div>
      )}
      {props.bottom && (
        <div className={`fixed bottom-0 h-20 w-screen bg-gradient-to-t from-sol-50 `}></div>
      )}
    </div>
  );
}
