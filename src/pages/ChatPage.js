import React, { useContext } from "react";
// import classes from "./ChatPage.module.css"
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Main from "../layout/Main";
import ChatCollectionContext from "../context/ChatCollectionContext";

export default function ChatPage() {
  const { isLoading } = useContext(ChatCollectionContext);

  if (isLoading)
    return (
      <div>
        <Header />
      </div>
    );

  return (
    <div className="border border-orange-500 m-1 flex flex-col justify-center">
      <div className="border-b border-orange-500 p-1 w-full">
        <Header />
      </div>
      <div className="flex">
        <div className="w-1/5 p-1 border-r border-orange-500" >
          <Navigation />
        </div>
        <div className="flex-1 p-1">
          <Main />
        </div>
      </div>
    </div>
  );
}
