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
        className={`absolute z-10 flex h-full w-80   flex-col overflow-auto py-mainpad transition-all duration-500  ${
          flap ? "left-0" : "-left-80"
        } lg:static lg:flex-none`}
      >
        <div className="border-main flex-auto  overflow-auto rounded-r-3xl border-l-0 bg-gradient-to-r from-white via-white to-sol-25 p-mainpad lg:border-0 lg:from-transparent lg:via-transparent lg:to-transparent">
          <NavContent />
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-auto">
        <main className="flex h-full flex-auto flex-col gap-2 overflow-auto pt-4">
          <header className="flex h-fit w-full flex-none flex-col items-center text-center">
            <ChatTitle />
          </header>
          <section className=" h-full flex-auto overflow-auto">
            <MessageHistory />
          </section>
          <section className="flex-none text-center pb-1">
            <AddMessage />
          </section>
        </main>
      </div>
    </div>
  );
}
