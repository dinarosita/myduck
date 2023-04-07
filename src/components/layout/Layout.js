import React from "react";
import Background from "./Background";
import Heading from "./Heading";

import Footing from "./Footing";
import Content from "./Content";
import About from "../../pages/About";

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
