// Done
import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";
import { FlapContextProvider } from "../../contexts/FlapContext";

export default function Layout(props) {
  return (
      <FlapContextProvider>
        <div className="flex-col-center absolute z-0 h-screen w-screen">
          <Background />
          <Heading />
          {props.children}
          <Footing />
        </div>
      </FlapContextProvider>
  );
}
