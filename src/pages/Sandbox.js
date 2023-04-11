import React from "react";
import { useState } from "react";
import IconButton from "../components/common/IconButton";
import MainWrapper from "../components/common/MainWrapper";
import Box from "../components/common/Box";
import IonicSandbox from "./sandbox/IonicSandbox";
import ConfigSandbox from "./sandbox/ConfigSandbox";

export default function Sandbox() {
  return (
    <MainWrapper title="Sandbox">
      <Box title="select element">
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </Box>
      <ConfigSandbox />
      <IonicSandbox />
    </MainWrapper>
  );
}
