import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";

export default function ContentWrapper() {
  const { isFlapOpen, handleCloseFlap } = useContext(FlapContext);

  return (
    // <div className="w-effective relative flex h-full flex-auto flex-row overflow-y-auto p-mainspace gap-mainspace">
    <div className="w-effective pass-overflow p-mainspace">
      {/* Smartphone (-) <480px */}
      <div className={`xs:hidden`}>
        SMALL
        <Navigation />
        <Main />
      </div>

      {/* Small screen (xs) >480px */}
      <div
        className={`pass-overflow hidden flex-row gap-2 xs:flex lg:hidden`}
      >
        <div className={`w-52 sm:w-60 md:w-64 flex-none ${isFlapOpen? "block" : "hidden"}`}>
          <Navigation />
        </div>
        <div className={`flex-1 overflow-y-auto `}>
          <Main />
        </div>{" "}
      </div>

      {/* LargeScreen (lg) >1024px */}
      <div className={`pass-overflow hidden flex-row gap-2 lg:flex`}>
        <div className="w-72 flex-none">
          <Navigation />
        </div>
        <div className="w-full flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
}
