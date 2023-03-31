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
        <Def title="Basic style" indent>
          <Def title="class btn" inline>
            CSS class btn is made for styling purpose only. Button wrapper is
            using this as the basic styling. React-Router-Dom's Link element can
            easily styled just like a button using this class.
          </Def>
        </Def>
        <Def title="Passed properties" indent>
          <Def title="onClick" inline>
            Write as usual, will be passed
          </Def>
          <Def title="type" inline>
            Write as usual, will be passed
          </Def>
          <Def title="addStyle" inline>
            Attach additional styling to the button. Handy to shift button to
            the left-end of the parent.
          </Def>
        </Def>
        <Def title="Additional styling examples" indent>
          <Def title="Blue button">
            addStyle="text-blue-500 border-blue-500 border-2"
          </Def>
          <Def title="Left end button">addStyle="ml-auto"</Def>
        </Def>
      </div>
      <div className="flex w-full">
        <Button onClick={handleButton}>Plain button - Click me!</Button>
        <Button
          onClick={handleButton}
          addStyle="text-blue-500 border-blue-500 border-2"
        >
          addStyle
        </Button>
        <Button onClick={handleButton} addStyle="ml-auto">
          addStyle
        </Button>
      </div>
    </Box>
  );
}
