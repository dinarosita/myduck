import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header3 = () => {
  return (
    <nav class="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div class="mr-6 flex flex-shrink-0 items-center text-white">
        <span class="text-xl font-semibold tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block sm:hidden">
        <button class="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg
            class="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="block w-full flex-grow sm:flex sm:w-auto sm:items-center">
        <div class="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            class="mt-4 mr-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="mt-4 mr-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            class="mt-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 sm:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header3;
