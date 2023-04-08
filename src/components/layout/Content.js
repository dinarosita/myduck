import React from "react";
import ChatTitle from "../main/ChatTitle";
import MessageHistory from "../main/MessageHistory";
import AddMessage from "../main/AddMessage";

export default function Content() {
  return (
    <div className="w-effective border-guide scrollbar flex h-full flex-1 flex-row gap-2 overflow-auto p-2">
      <nav
        id="ChatNav"
        className="border-guide2 hidden h-full w-60 p-1 lg:block"
      >
        <h1 className="text-left">Chat Nav</h1>
      </nav>
      {/* <main className="flex flex-1   flex-col p-1">
        <ChatTitle />
        <MessageHistory />
        <AddMessage />
      </main> */}
      <div className="border-guide flex h-full w-full flex-col gap-2 ">
        <main className="flex h-full flex-1 flex-col gap-2">
          <header className="border-guide2 flex h-fit h-20 w-full flex-col items-center p-1">
            <h1>Chat Title</h1>
            <p id="tagline">Created at: date and time</p>
          </header>
          <section className="scrollbar h-20 border-8 border-r-0 rounded-sm border-sol-100 flex-1 overflow-auto ">
            <MessageHistory />
          </section>
          <section
            id="addMessage"
            className="border-guide2 flex h-20 flex-none flex-col p-1 text-center"
          >
            <h2>Add Message</h2>
          </section>
        </main>
      </div>
    </div>
  );
}
