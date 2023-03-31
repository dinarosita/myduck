import React from "react";
import logo from "./img/logo128.png";
import Box from "../wrappers/Box";

export default function Chitchat() {
  return (
    <Box h3 title="Chitchat">
      <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <h4 className="text-xl font-medium text-amber-800">ChitChat</h4>
          <p className="text-amber-600">You have a new message!</p>
        </div>
      </div>
    </Box>
  );
}
