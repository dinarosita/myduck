import React from "react";
import Box from "../wrappers/Box";
import BoxWrapper from "../sleekduck/BoxWrapper";
import ButtonWrapper from "../sleekduck/ButtonWrapper";
import DefWrapper from "../sleekduck/DefWrapper";
import SnapFlexWrapper from "../sleekduck/SnapFlexWrapper";
import AboutSleekduck from "../sleekduck/AboutSleekduck";
import SolColorTheme from "../sleekduck/SolColorTheme";

export default function SleekDuck() {
  return (
    <main>
        <h1>SleekDuck</h1>
      <Box level="h2" title="Sol Color Theme" collapse>
        <SolColorTheme />
      </Box>
      <Box level="h2" title="SleekDuck Wrappers" collapse>
        <AboutSleekduck />
      </Box>
      <Box level="h2" title="Available Wrappers" collapse>
        <ButtonWrapper />
        <BoxWrapper />
        <SnapFlexWrapper />
        <DefWrapper />
      </Box>
    </main>
  );
}
