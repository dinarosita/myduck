import React from "react";
import Box from "../components/Common/Box";
import IonicSandbox from "./Sandbox/IonicSandbox";
import ConfigSandbox from "./Sandbox/ConfigSandbox";

export default function Sandbox() {
  return (
    <main className="w-effective scrollbar flex h-full flex-col gap-2 overflow-auto py-2">
      <header>
        <h1 className="text-center uppercase">Sandbox</h1>
        <p className="title text-center">A little playground. Or... a fishpond</p>
      </header>
      <Box title="select element">
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </Box>
      <ConfigSandbox />
      <IonicSandbox />{" "}
    </main>
  );
}
