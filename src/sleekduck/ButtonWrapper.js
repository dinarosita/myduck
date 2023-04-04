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
        <Def title="RECONSIDERED" indent>
          Redundant! Just start the <strong>className</strong> with{" "}
          <strong>btn</strong>, it's exactly the same, minus the wrapper only
          pass a limited properties.{" "}
        </Def>
        <Box title="Documentation if you are still interested" collapse>
          <Def title="About" indent div>
            <p className="mb-1">
              Styled button that passed the type and onClick handler of the
              parent. By default, the children will be passed to a paragraph{" "}
              <span className="font-bold text-sol-m">&lt;p&gt;</span> element.
            </p>
            <Button onClick={handleButton}>Click me!</Button>
          </Def>
          <Def title="Class btn" indent>
            <Def title="class btn" inline>
              Class btn contains default styling for buttons using it. Button
              wrapper is using this as the basic styling. In MyDuck, Link
              element is styled just like a button using this class.
            </Def>
          </Def>
          <Def title="Passed properties" indent>
            <Def title="onClick" inline>
              Write as usual, will be passed
            </Def>
            <Def title="type" inline>
              Write as usual, will be passed
            </Def>
            <Def title="(children)" inline>
              The children wil be passed as a button text as usual.
            </Def>
            <Def title="addStyle" inline>
              Attach additional styling to the button. Handy to shift button to
              the left-end of the parent.
            </Def>
          </Def>
          <Def title="Styling example: Blue button" div indent>
            <div className="mt-1 space-y-1">
              <Button
                onClick={handleButton}
                addStyle="text-blue-500 border-blue-500 border-2"
              >
                Blue forget hover
              </Button>
              <p className="my-1">
                addStyle="text-blue-500 border-blue-500 border-2"
              </p>
              <Button
                onClick={handleButton}
                addStyle="text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white"
              >
                Blue remember hover
              </Button>
              <p className="my-1">
                addStyle="text-blue-500 border-blue-500 border-2
                hover:bg-blue-500 hover:text-white"
              </p>
            </div>
          </Def>
          <Def title="Styling example: Right end button" div indent>
            {" "}
            <div className="flex items-center border border-sol-ml p-1">
              <div className="mt-1">
                <p>addStyle="ml-auto"</p>
                <p>Parent is a flex box.</p>
              </div>
              <Button onClick={handleButton} addStyle="ml-auto">
                Right hand button
              </Button>
            </div>
          </Def>
        </Box>
      </div>
      <div className="flex w-full"></div>
    </Box>
  );
}
