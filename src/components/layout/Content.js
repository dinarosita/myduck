import React from "react";
import ChatTitle from "../sections/ChatTitle";
import MessageHistory from "../sections/MessageHistory";
import AddMessage from "../sections/AddMessage";
import NavContent from "../sections/NavContent";

export default function Content() {
  return (
    <div className="w-effective flex h-full flex-1 flex-row gap-4 overflow-auto p-2">
      <div className=" hidden h-full w-60 flex-col  p-1 pt-8  lg:flex">
        <NavContent />
      </div>

      <div className="flex h-full w-full flex-col gap-2 ">
        <main className="flex h-full flex-1 flex-col gap-2">
          <header className="flex h-fit h-20 w-full flex-col items-center p-1">
            <ChatTitle />
          </header>
          <section className="scrollbar h-20 flex-1 overflow-y-scroll rounded-sm border-8 border-r-0 border-sol-200 ">
            <MessageHistory />
          </section>
          <section className="flex h-fit flex-none flex-col text-center">
            <AddMessage />
          </section>
        </main>
      </div>
    </div>
  );
}
