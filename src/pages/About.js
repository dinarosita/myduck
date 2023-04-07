import React from "react";
import Box from "../wrappers/Box";
import duck from "../img/logo128.png";
export default function About() {
  return (
    <main className="scrollbar flex flex-col overflow-auto py-6">
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
            </a>.
          </p>
        </Box>
      </section>

      <section className="mx-auto mt-4 flex w-11/12 flex-col items-center gap-2 rounded-xl border border-sol py-2 px-4 sm:flex-row sm:gap-4">
        <img
          class="mx-auto block h-12 rounded-xl sm:mx-0 sm:h-24 sm:shrink-0 px-4"
          src={duck}
          alt="rubber duck"
        ></img>
        <div className=" text-center sm:text-left">
          <p className="text-center text-sm sm:text-left">Developer:</p>
          <p className="title pb-2 text-xl">Codeyluwak</p>
          <p className="lg:block">
            Learning React, Tailwind, and Firebase on the path to master
            Next.js, with MyDuck as my first project.
          </p>
          <p className=" hidden lg:block">
            On my journey to master Next.js, I'm learning React, Tailwind, and
            Firebase. MyDuck, my first project, was inspired by the need for a
            rubber duck chat that allows me to keep track of conversations and
            take notes.
          </p>
        </div>
      </section>
    </main>
  );
}
