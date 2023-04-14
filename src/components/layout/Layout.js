// Done
import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";
import Overlay from "./Overlay";

export default function Layout(props) {
  return (
    <div className="absolute z-0 h-screen w-screen min-w-minwidth min-h-minheight flex-col-center ">
      <Background />
      <Heading />     
      <Overlay /> 
      {props.children}
      <Footing />
    </div>
  );
}