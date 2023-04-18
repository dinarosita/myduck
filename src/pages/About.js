import React from "react";
import Box from "../components/Common/Box";
import DeveloperCard from "../components/DeveloperCard/DeveloperCard";

export default function About() {
  return (
    <div className="pass-overflow w-full p-2 bg-transparent">
      <main className="w-effective white-frame pass-overflow flex h-full flex-col text-vincent-800">
        <header className="white-header">
          <h1>Welcome to MyDuck</h1>
          <p className="tagline">Brainstorm with your inner rubber duck</p>
        </header>
        <section className="pass-overflow flex-auto bg-transparent/20 p-2 text-petal">
          <div
            className="scroll-vince
        min-h-80 flex h-full flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap   bg-transparent pr-8 "
          >
            <Box level="h2" title="About" noborder>
              <p>
                MyDuck is a single user chat app for talking to your inner
                rubber duck. Often we feel the need to talk to somebody else,
                and turn out that just able to articulate what we have in mind,
                we have it sorted. It also function as brainstorming note pad.
              </p>
            </Box>
            <Box level="h2" title="Chat structure" noborder>
              <p>Chats are organized by user added titled chatrooms.</p>
              <p>
                Future works: ability to classify chatrooms, edit chatroom
                title, and set up message scale prority.
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
                Interesting API works will be added soon. Maybe talking to
                yourself will be becoming more real!
              </p>
            </Box>

            <Box level="h2" title="Development tools and libraries" noborder>
              <p>
                MyDuck is developed with React JS, Tailwind CSS, and Firebase
                Realtime Database.
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
                Interesting API works will be added soon. Maybe talking to
                yourself will be becoming more real!
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
                  className="text-sprig-300"
                >
                  Amir's vacation scroll
                </a>
                .
              </p>
            </Box>
          </div>
        </section>
        <hr className="white-separator" />
        <section className="bg-transparent/20 text-petal border-none">
          <DeveloperCard />
        </section>
      </main>
    </div>
  );
}
