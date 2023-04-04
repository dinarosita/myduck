import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="flex flex-col gap-2 h-screen">
      <Header />
      {props.children}
    </div>
  );
}
