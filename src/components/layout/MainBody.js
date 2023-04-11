import React, { useContext } from "react";
import ChatTitle from "../contents/ChatTitle";
import MessageHistory from "../contents/MessageHistory";
import AddMessage from "../contents/AddMessage";
import NavContent from "../contents/NavContent";
import FlapContext from "../../contexts/FlapContext";

export default function MainBody() {
  const { flap } = useContext(FlapContext);
  return (
    <div className="relative flex h-full w-full flex-auto flex-row overflow-auto px-mainpad">
      <div
        className={`flex h-full w-80 flex-col overflow-auto   py-mainpad transition-all duration-1000

        absolute z-10  ${flap ? "left-0" : "-left-80"} lg:static lg:flex-none
        
        
 `}
      >
        

        <div className="overflow-auto border-main  border-l-0 rounded-r-3xl bg-gradient-to-r from-white via-white to-sol-25 px-mainpad  pt-6 lg:border-0 lg:from-transparent lg:via-transparent lg:to-transparent">
          <NavContent />
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-auto">
        <main className="flex h-full flex-auto flex-col gap-2 overflow-auto pt-4">
          <header className="flex h-fit w-full flex-none flex-col items-center">
            <ChatTitle />
          </header>
          <section className=" h-full flex-auto overflow-auto">
            <MessageHistory />
          </section>
          <section className="flex-none text-center">
            <AddMessage />
          </section>
        </main>
      </div>
    </div>
  );
}
