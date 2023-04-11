// Done
import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";

export default function Layout(props) {
  return (
    <div className="h-screen w-screen xl:max-w-screen-xl mx-auto flex-col-center">
      <Background />
      <Heading />      
      {props.children}
      <Footing />
    </div>
  );
}