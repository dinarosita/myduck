import React from 'react'
import duck from "./logo128.png";

export default function DeveloperCard() {
  return (
    <div className="flex flex-col gap-2  rounded-xl border border-sol px-4 pt-2 pb-2">
          <div className="flex flex-row items-end justify-start gap-2">
            <img className="h-10 px-2" src={duck} alt="rubber duck" />
            <div className="">
              <p className="text-xs">Developed by:</p>
              <p className="title text-xl leading-none sm:text-left">
                Codeyluwak
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm sm:hidden">
              Learning React, Tailwind, and Firebase on the path to master
              Next.js, with MyDuck as my first project.
            </p>
            <p className=" hidden text-sm sm:block">
              On my journey to master Next.js, I'm learning React, Tailwind, and
              Firebase. MyDuck, my first project, was inspired by the need for a
              rubber duck chat that allows me to keep track of conversations and
              take notes.
            </p>
          </div>
        </div>
  )
}
