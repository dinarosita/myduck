import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import FlapContext from "../../contexts/FlapContext";

export default function ContentWrapper() {
  const { isFlapOpen } = useContext(FlapContext);

  return (
    <div className="w-effective pass-overflow p-mainspace">
      {/* Overlay Nav: (-) to xs-480 */}
      <div className={`pass-overflow relative xs:hidden`}>
        <div
          className={`w-80 max-w-full bg-white transition duration-default 
            ${isFlapOpen ? "translate-x-0" : "-translate-x-full"}
            absolute bottom-0 left-0 top-0 z-10`}
        >
          <Navigation />
        </div>{" "}
        <Main />
      </div>

      {/* Sliding Nav: xs-480 to lg-1024 */}
      <div className="pass-overflow relative hidden xs:block lg:hidden">
        <div
          className={`w-52 sm:w-60 md:w-64 pr-2 bg-white transition duration-default  
            ${isFlapOpen ? "translate-x-0" : "-translate-x-full"}
            absolute bottom-0 left-0 top-0 z-10`}
        >
          <Navigation />
        </div>
        <div
          className={`pass-overflow relative transition-all duration-default  ${
            isFlapOpen ? "ml-52 sm:ml-60 md:ml-64 " : "ml-0"
          }`}
        >
          <Main />
        </div>
      </div>

      {/* Permanent Nav: lg-1024 and up */}
      <div className={`pass-overflow hidden lg:flex flex-row gap-2`}>
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
