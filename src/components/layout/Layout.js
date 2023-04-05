import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="flex flex-col h-screen space-y-16 ">
      <Header />
      <>{props.children}</>
    </div>
  );
}
