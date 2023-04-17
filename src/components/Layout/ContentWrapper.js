import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";

export default function ContentWrapper() {
  const { isFlapOpen, handleCloseFlap } = useContext(FlapContext);

  return (
    <div className="w-effective pass-overflow p-mainspace">

      {/* Overlay Nav: (-) to xs-480 */}
      <div className={`xs:hidden`}>
        <Navigation />
        <Main />
      </div>

      {/* Sliding Nav: xs-480 to lg-1024 */}
      <div className="pass-overflow relative hidden xs:flex lg:hidden">
        <div
          className={`w-52 flex-none bg-white pr-2 transition duration-300 sm:w-60  md:w-64
    ${isFlapOpen ? "translate-x-0" : "-translate-x-full"}
    absolute bottom-0 left-0 top-0 z-10`}
        >
          <Navigation />
        </div>
        <div
          className={`relative flex-1 overflow-y-auto transition-all duration-300  ${
            isFlapOpen ? "md:ml-68 ml-56 sm:ml-64 " : "ml-0"
          }`}
        >
          <Main />
        </div>
      </div>

      {/* Permanent Nav: lg-1024 and up */}
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
