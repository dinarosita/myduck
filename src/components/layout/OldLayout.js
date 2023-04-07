import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="max-w-screen-lg m-auto flex h-full w-full flex-col space-y-12 ">
      <Header />
      <div className="absolute w-2xl border-blue-500 border-4"></div>
      <>{props.children}</>
    </div>
  );
}
