// Done
import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";

export default function Layout(props) {
  return (
    <div className="absolute z-0 h-screen w-screen  flex-col-center ">
      <Background />
      <Heading />     
      {props.children}
      <Footing />
    </div>
  );
}