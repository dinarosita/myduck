import React from "react";
import Box from "../components/Common/Box";
import DeveloperCard from "../components/Common/DeveloperCard/DeveloperCard";
import almondBlossom from "../assets/images/gogh-almond-blossom-1024.jpg";

export default function About() {
  return (
    <div className="pass-overflow w-full bg-transparent px-2">
      <main className="w-effective main-frame pass-overflow flex h-full flex-col text-navy">
        <header>
          <h1>Welcome to MyDuck</h1>
          <p className="tagline">Brainstorm with your inner rubber duck</p>
        </header>
        <section className="pass-overflow flex-auto bg-transparent/20 p-2 text-petal">
          <div
            className="main-scroll
        flex h-full min-h-80 flex-auto  flex-col  gap-2 overflow-y-scroll whitespace-pre-wrap   bg-transparent pr-8 "
          >
            <Box title="About" noborder>
              <p>
                MyDuck is a single user chat app for talking to your inner
                rubber duck. Often we feel the need to talk to somebody else,
                and turn out that just able to articulate what we have in mind,
                we have it sorted. It also function as brainstorming note pad.
              </p>
            </Box>
            <Box title="Versions" noborder>
              <p>
                <span className="font-bold">v1.0.0</span>: First stable version.
              </p>
              <p>
                <span className="font-bold">main-dev-1.1.0</span>: Current
                version under development. Sourced in v1.0.0
              </p>
            </Box>
            <Box title="Chat structure" noborder>
              <p>Chats are organized by user added titled chatrooms.</p>
              <p>
                Future works: ability to classify chatrooms, edit chatroom
                title, and set up message scale prority.
              </p>
            </Box>
            <Box title="Members and security" noborder>
              <p>
                {" "}
                Urgent future work: Security, signup, password protected login.
              </p>
            </Box>
            <Box title="Future API works" noborder>
              <p>
                Interesting API works will be added soon. Maybe talking to
                yourself will be becoming more real!
              </p>
            </Box>

            <Box title="Development tools and libraries" noborder>
              <p>
                MyDuck is developed with React JS, Tailwind CSS, and Firebase
                Realtime Database. In the near future, MyDuck will adopt MERN.
              </p>
            </Box>
            <Box title="Members and security" noborder>
              <p>
                {" "}
                Urgent future work: Security, signup, password protected login.
              </p>
            </Box>
            <Box title="Future API works" noborder>
              <p>
                Interesting API works will be added soon. Maybe talking to
                yourself will be becoming more real!
              </p>
            </Box>

            <Box title="Development tools and libraries" noborder>
              <p>
                MyDuck is developed with React JS, Tailwind CSS, and Firebase
                Realtime Database.
              </p>
            </Box>
            <Box title="Theme" noborder addClass="w-full">
              <p>Van Gogh's Almond Blossoms, with a yellow rubber duck.</p>
              <div className="flex-col-center mx-auto my-4 w-4/5 md:w-2/3 ">
                <img
                  className="w-full mb-2 max-w-md flex-shrink rounded border-2 border-petal/50"
                  src={almondBlossom}
                  alt="Gogh's Almond Blossom"
                />
                <div className="max-w-full text-sm">
                  Almond Blossom by Vincent van Gogh
                </div>
                <div className="text-xs">
                  Public domain, via{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg">
                    Wikimedia Commons
                  </a>
                </div>
              </div>
            </Box>
          </div>
        </section>
        <hr className="main-separator" />
        <section className="border-none bg-transparent/20 text-petal">
          <DeveloperCard />
        </section>
      </main>
    </div>
  );
}
