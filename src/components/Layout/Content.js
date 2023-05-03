import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import FlapContext from "../../contexts/FlapContext";
import { ChatIndexContextProvider } from "../../contexts/ChatIndexContext";

export default function Content() {
  const { isFlapOpen, setIsFlapOpen } = useContext(FlapContext);
  function handleNavClose() {
    setIsFlapOpen(false);
  }
  return (
    <ChatIndexContextProvider>
      <div className="w-effective pass-overflow px-2  min-h-80">
        {/* RESPONSIVE SMARTPHONE < xs-480 - Overlay */}
        <div className={`pass-overflow relative xs:hidden `}>
          <div
            className={`smooth w-80 max-w-full  rounded transition 
            ${isFlapOpen ? "translate-x-0" : "-translate-x-full"}
            absolute bottom-0 left-0 top-0 z-20`}
          >
            <Navigation />
          </div>

          <div
            className={`smooth fixed inset-0 z-10 bg-black transition-opacity  ${
              isFlapOpen ? "opacity-50" : "invisible opacity-0"
            }`}
            onClick={handleNavClose}
          ></div>
          <Main   />
        </div>

        {/* RESPONSIVE SMALL xs-480 to lg-1024 - Sliding nav */}
        <div className="pass-overflow relative hidden xs:block lg:hidden">
          <div
            className={`smooth w-52 rounded pr-2 transition sm:w-60  md:w-64
            ${isFlapOpen ? "translate-x-0" : "-translate-x-full"}
            absolute bottom-0 left-0 top-0 z-20`}
          >
            <Navigation  />
          </div>
          <div
            className={`pass-overflow smooth relative transition-all  ${
              isFlapOpen ? "ml-52 sm:ml-60 md:ml-64" : "ml-0"
            }`}
          >
            <Main  />
          </div>
        </div>

        {/* RESPONSIVE LARGE  > lg-1024 - Permanent nav */}
        <div className={`pass-overflow hidden flex-row gap-2 lg:flex`}>
          <div className="w-72 flex-none">
            <Navigation  />
          </div>
          <div className="w-full flex-1">
            <Main />
          </div>
        </div>
      </div>
    </ChatIndexContextProvider>
  );
}
