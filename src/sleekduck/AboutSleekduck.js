import React from "react";
import Box from "../wrappers/Box";
import Def from "../wrappers/Def";

export default function AboutSleekduck() {
  return (
    <Box>
      <Def title="About" inline>
        Handy wrappers for commonly used elements and structures.
      </Def>
      <Def title="Ready to use" inline>
        Build with basic funcationalities and already nice appearance as
        default.
      </Def>
      <Def title="Highly adaptable" inline>
        Accomodates additional styling and gives options for non-default common
        functionalities.
      </Def>
      <Def title="Documentation" inline>
        SleekDuck houses documentation with list of properties and usage
        examples, a handy guide on how they can help you.
      </Def>
      <Def title="Location" inline>
        src &gt; wrappers
      </Def>
    </Box>
  );
}
