import React from "react";
import Box from "../wrappers/Box";
import BoxWrapper from "../sleekduck/BoxWrapper";
import ButtonWrapper from "../sleekduck/ButtonWrapper";
import DefWrapper from "../sleekduck/DefWrapper";
import SnapFlexWrapper from "../sleekduck/SnapFlexWrapper";

export default function SleekDuck() {
  return (
    <Box level="h2" title="UI Wrappers">
      <p>Handy wrappers involving styling and functionalities.</p>
      <p>Location: src &gt; wrappers.</p>
      <ButtonWrapper />
      <BoxWrapper />
      <SnapFlexWrapper />
      <DefWrapper />
    </Box>
  );
}
