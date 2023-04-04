import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="flex flex-col space-y-16 h-screen  container ">
      <Header />
      <>{props.children}</>
    </div>
  );
}
