import React from "react";
import Box from "../wrappers/Box";
import Def from "../wrappers/Def";

export default function SolColorTheme() {
  return (
    <Box level="h3" title="Sol Color Theme" noborder>
      <p>
        Sol color theme is a custom yellow-orange color theme inspired by
        classic rubber duck.
      </p>
      <Def title="tailwind.config.js" indent div>
        <p>
          The <strong>sol</strong> color theme is added to the default pallet by
          adding it to <strong>theme.extend.colors</strong> section in tailwaind
          configuration file.
        </p>
        <Def title="shades" inline>
          50, 100,200, 300, 400, 500, 600, 700, 800, 900, 950
        </Def>
        <Def title="DEFAULT" inline>
          500
        </Def>
        <Def title="special" inline>
          l, ml, m, md, d
        </Def>
      </Def>
      <Def title="index.css" indent div>

        <p>text-sol: default html text</p>
        <p><span className="text-sol-600 font-bold">text-sol-600, font-bold:</span> strong and h1-h6 elements, title class</p>
      </Def>

      <div className="flex flex-row gap-1">
        <div>
          {" "}
          <div className="text-xl font-bold">No color</div>
          <div className="text-teal text-xl font-bold">teal</div>
          <div className="text-xl font-bold text-teal-500">teal-500</div>
          <div className="text-xl font-bold text-sol">text-sol</div>
          <div className="text-xl font-bold text-sol-100">text-sol-100</div>
          <div className="text-xl font-bold text-sol-400">text-sol-400</div>
          <div className="text-xl font-bold text-sol-500">text-sol-500</div>
          <div className="text-xl font-bold text-sol-500d">text-sol-500d</div>
          <div className="text-xl font-bold text-sol-950">text-sol-950</div>
        </div>
        <div>
          <div className="text-xl font-bold text-sol-50">text-sol-50</div>
          <div className="text-xl font-bold text-sol-100">text-sol-100</div>
          <div className="text-xl font-bold text-sol-200">text-sol-200</div>
          <div className="text-xl font-bold text-sol-300">text-sol-300</div>
          <div className="text-xl font-bold text-sol-400">text-sol-400</div>
          <div className="text-xl font-bold text-sol-500">text-sol-500</div>
          <div className="text-xl font-bold text-sol-600">text-sol-600</div>
          <div className="text-xl font-bold text-sol-700">text-sol-700</div>
          <div className="text-xl font-bold text-sol-800">text-sol-800</div>
          <div className="text-xl font-bold text-sol-900">text-sol-900</div>
          <div className="text-xl font-bold text-sol-950">text-sol-950</div>
        </div>
      </div>
    </Box>
  );
}
