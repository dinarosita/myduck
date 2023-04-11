import React from "react";
import Box from "../../components/common/Box";

export default function ConfigSandbox() {
  return (
    <Box title="Config" addClass="flex flex-col gap-4">
      <button className="border border-maincolor border-3">Howdy</button>

      <div className="gap-1 p-2 flex flex-col border border-hovercolor border-sm">
        <div className="border border-maincolor border-0.5">item1</div>
        <div className="border border-maincolor border">item2</div>
      </div>
      <button className="border border-maincolor">Howdy</button>

      <div className="flex flex-col gap-4 border border-hovercolor p-4">
        <div className="border border-maincolor">item1</div>
        <div className="border border-maincolor">item2</div>
      </div>
      <div className="border border-textcolor h-12">Height</div>
    </Box>
  );
}
