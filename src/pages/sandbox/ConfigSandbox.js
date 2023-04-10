import React from "react";
import Box from "../../wrappers/Box";

export default function ConfigSandbox() {
  return (
    <Box title="Config" addClass="flex flex-col gap-lg">
      <button className="border border-maincolor border-thick">Howdy</button>

      <div className="gap-sm p-md flex flex-col border border-hovercolor border-sm">
        <div className="border border-maincolor border-xthin">item1</div>
        <div className="border border-maincolor border-thin">item2</div>
      </div>
      <button className="border border-maincolor">Howdy</button>

      <div className="flex flex-col gap-lg border border-hovercolor p-lg">
        <div className="border border-maincolor">item1</div>
        <div className="border border-maincolor">item2</div>
      </div>
      <div className="border border-textcolor h-12">Height</div>
    </Box>
  );
}
