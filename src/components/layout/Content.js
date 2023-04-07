import React from "react";
import ChatTitle from "../main/ChatTitle";
import MessageHistory from "../main/MessageHistory";
import AddMessage from "../main/AddMessage";

export default function Content() {
  return (
    <div className="w-effective border-guide h-full flex flex-1 flex-row gap-2 p-2">
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
      <div
        id="content"
        className="border-guide flex h-full w-full flex-col gap-2 "
      >
        <main className="flex flex-1 flex-col gap-2">
          <header className="border-guide2 flex h-fit h-20 w-full flex-col items-center p-1">
            <h1>Chat Title</h1>
            <p id="tagline">Created at: date and time</p>
          </header>
          <section
            id="messageHistory"
            className="border-guide2 h-20 flex-1  p-1 text-center"
          >
            <h2>Message History</h2>
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
