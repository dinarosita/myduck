import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";

export default function Layout(props) {
  return (
    <div className="flex h-screen flex-col">
      <Background top bottom />
      <Heading />
      {props.children}
      <Footing />
    </div>
  );
}
