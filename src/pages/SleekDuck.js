import React from "react";
import Box from "../wrappers/Box";
import BoxWrapper from "../sleekduck/BoxWrapper";
import ButtonWrapper from "../sleekduck/ButtonWrapper";
import DefWrapper from "../sleekduck/DefWrapper";
import SnapFlexWrapper from "../sleekduck/SnapFlexWrapper";
import AboutSleekduck from "../sleekduck/AboutSleekduck";

export default function SleekDuck() {
  return (
    <main>
    <Box level="h2" title="SleekDuck Wrappers" noborder>
      <AboutSleekduck /></Box>
      <Box level="h2" title="Available Wrappers" noborder>
      <ButtonWrapper />
      <BoxWrapper />
      <SnapFlexWrapper />
      <DefWrapper />
    </Box></main>
  );
}
