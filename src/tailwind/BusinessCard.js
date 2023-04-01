import React from "react";
import logo from "../img/logo128.png";
import Box from "../wrappers/Box";
import SnapFlex from "../wrappers/SnapFlex";

export default function BusinessCard() {
  return (
    <Box level="h3" expand title="Business Card">
      <SnapFlex>
        <div className=" mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4">
          <img
            className="mx-auto block h-24 rounded-full bg-gold-100 sm:mx-0 sm:shrink-0"
            src={logo}
            alt="Woman's Face"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-gold-800">
                Erin Lindford
              </p>
              <p className="font-medium text-gold-600">Product Engineer</p>
            </div>
            <button className="rounded-full border border-gold-200 px-4 py-1 text-sm font-semibold text-gold-600 hover:border-transparent hover:bg-gold-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
          <img
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={logo}
            alt="Woman's Face"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Erin Lindford</p>
              <p className="font-medium text-slate-500">Product Engineer</p>
            </div>
            <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>
      </SnapFlex>
    </Box>
  );
}
