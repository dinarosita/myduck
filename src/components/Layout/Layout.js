// Done
import React from "react";
import Background from "./Background";
import Heading from "./Heading";
import Footing from "./Footing";
import { FlapContextProvider } from "../../contexts/FlapContext";
import { ChatContextProvider } from "../../contexts/ChatContext";

export default function Layout(props) {
  return (
    <FlapContextProvider>
      <ChatContextProvider>
        <div className="flex-col-center absolute z-0 h-screen w-screen">
          <Background />
          <Heading />
          {props.children}
          <Footing />
        </div>
      </ChatContextProvider>
    </FlapContextProvider>
  );
}
