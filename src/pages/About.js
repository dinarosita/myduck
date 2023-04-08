import React from "react";
import Box from "../wrappers/Box";
import duck from "../img/logo128.png";
export default function About() {
  return (
    <main className="w-effective scrollbar flex h-full flex-col gap-2 overflow-auto py-2">
      <header>
        <h1 className="text-center uppercase">Welcome to MyDuck</h1>
        <p className="title text-center">
          Brainstorm with your inner rubber duck
        </p>
      </header>
      <section>
        <Box level="h2" title="About" noborder>
          <p>
            MyDuck is a single user chat app for talking to your inner rubber
            duck. Often we feel the need to talk to somebody else, and turn out
            that just able to articulate what we have in mind, we have it
            sorted. It also function as brainstorming note pad.
          </p>
        </Box>
        <Box level="h2" title="Chat structure" noborder>
          <p>Chats are organized by user added titled chatrooms.</p>
          <p>
            Future works: ability to classify chatrooms, edit chatroom title,
            and set up message scale prority.
          </p>
        </Box>
        <Box level="h2" title="Members and security" noborder>
          <p>
            {" "}
            Urgent future work: Security, signup, password protected login.
          </p>
        </Box>
        <Box level="h2" title="Future API works" noborder>
          <p>
            Interesting API works will be added soon. Maybe talking to yourself
            will be becoming more real!
          </p>
        </Box>

        <Box level="h2" title="Development tools and libraries" noborder>
          <p>
            MyDuck is developed with React JS, Tailwind CSS, and Firebase
            Realtime Database.
          </p>
        </Box>
        <Box level="h2" title="Theme" noborder>
          <p>
            The color scheme is inspired by orange in rubber duck, subdued
            version. The simple background is inspired by{" "}
            <a
              href="https://www.youtube.com/watch?v=EVM7fP67Wgk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              Amir's vacation scroll
            </a>
            .
          </p>
        </Box>
      </section>

      <section className="border border-sol rounded-xl m-4 px-4 pt-4 pb-2 flex flex-col gap-2">
        <div top className="flex flex-row items-end gap-2 justify-start">
          <img className="h-10 px-2" src={duck} alt="rubber duck" />
          <div className="">
            <p className="text-xs">Developed by:</p>
            <p className="title text-xl sm:text-left leading-none">Codeyluwak</p>
          </div>
        </div>
        <div bottom>
          <p className="sm:hidden text-sm">
            Learning React, Tailwind, and Firebase on the path to master
            Next.js, with MyDuck as my first project.
          </p>
          <p className=" hidden sm:block text-sm">
            On my journey to master Next.js, I'm learning React, Tailwind, and
            Firebase. MyDuck, my first project, was inspired by the need for a
            rubber duck chat that allows me to keep track of conversations and
            take notes.
          </p>
        </div>

        {/* <img
          className="hidden h-12 pr-4 sm:block"
          src={duck}
          alt="rubber duck"
        ></img>
        <div className=" text-center sm:text-left">
          <p className="text-center text-sm sm:text-left">Developed by:</p>
          <div className="flex flex-row justify-center gap-2 sm:justify-start">
            <img class="block h-6 sm:hidden" src={duck} alt="rubber duck"></img>
            <p className="title pb-2 text-xl sm:text-left">Codeyluwak</p>
          </div>
        </div>

         */}
      </section>
    </main>
  );
}
