import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="mx-auto flex h-screen flex-col border-4 border-orange-400 xl:container md:mx-auto">
      <Header />
      {props.children}
    </div>
  );
}
