import React from "react";
import Box from "../wrappers/Box";
import Button from "../wrappers/Button";
import Def from "../wrappers/Def";

export default function ButtonWrapper() {
  function handleButton() {
    alert("Clickety click!");
  }
  return (
    <Box collapse level="h3" title="<Button>">
      <div className="my-2 space-y-2">
        <Def title="About" inline>
          Styled button
        </Def>
        <Def title="Passed properties" indent>
          <Def title="onClick" inline>
            Write as usual, will be passed
          </Def>
          <Def title="type" inline>
            Write as usual, will be passed
          </Def>
        </Def>
      </div>

      <Button onClick={handleButton}>Click me!</Button>
    </Box>
  );
}
