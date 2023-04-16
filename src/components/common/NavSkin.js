import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import IonicButton from "./IonicButton";

export default function NavSkin(props) {
  const { isFlapOpen, handleCloseFlap } = useContext(FlapContext);
  // add reference to add chat so when the nav flap closed, the text can be set to ""

  return (
    <>
      {/* Smartphone < xs (480px): Overlay above in and out, mask the rest */}
      <nav className="block xs:hidden">
        {isFlapOpen && (
          <div className="absolute z-20 h-screen w-full bg-white">
            <IonicButton
              ionic="close"
              onClick={handleCloseFlap}
              addClass="absolute top-2 right-3"
            ></IonicButton>
            {props.children}
          </div>
        )}
      </nav>

      {/* Small screen > xs (480): slide flex in and out  */}
      <nav className="hidden xs:block xs:flex xs:flex-col md:hidden">
        {props.children}
      </nav>

      {/* Medium screen > lg (1024): permanently flex out  */}
      <nav className="hidden lg:block flex-none flex flex-col w-80 border-main  rounded-lg h-full">
        {props.children}
      </nav>
      {/* <div className="hidden lg:block border-transparent bg-gradient-to-r from-transparent to-sol-50 rounded-full w-5 border my-mainspace" /> */}
     
    </>
  );
}

{
  /* <div
  className={`
  border-main absolute z-10 flex 
  h-full w-80 flex-col overflow-y-auto 
  rounded-r-xl border-l-0
  bg-gradient-to-r from-white via-white to-sol-25 p-mainspace transition-all duration-default 
  ${isFlapOpen ? "left-0" : "-left-80"}
  xs:
`}
>
  <IonicButton
    ionic="close"
    onClick={handleCloseFlap}
    addClass="absolute top-2 right-3"
  ></IonicButton>
  {props.children}
</div>; */
}
