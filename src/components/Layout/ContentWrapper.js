import React from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";

export default function ContentWrapper() {
  return (
    // <div className="w-effective relative flex h-full flex-auto flex-row overflow-y-auto p-mainspace gap-mainspace">
    <div className="w-effective pass-overlay p-mainspace">
      {/* Smartphone (-) <480px */}
      <div className={`sm:hidden`}>SMALL
        <Navigation />
        <Main />
      </div>

      {/* Small screen (sm) >480px */}
      <div className={`hidden sm:block lg:hidden`}>MEDIUM
        <Navigation />
        <Main />
      </div>

      {/* LargeScreen (lg) >1024px */}
      <div className={`hidden lg:flex flex-row gap-2 
      pass-overlay
      `}>
        <Navigation />
        <Main />
      </div>
    </div>
  );
}
