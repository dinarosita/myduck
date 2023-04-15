import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import IonicButton from "./IonicButton";


export default function NavFlap(props) {
  const { flapOpen, setFlapOpen } = useContext(FlapContext);
  // add reference to add chat so when the nav flap closed, the text can be set to ""

    
  return (
    <div className={`
        flex h-full flex-col overflow-y-auto 
        border-main border-l-0 rounded-r-xl p-mainspace 
        transition-all duration-default
        absolute z-10 bg-white w-80 
        ${flapOpen ? "left-0" : "-left-80"}
        xs:
    `}>
        <IonicButton ionic="close" onClick={() => setFlapOpen(false)} addClass="absolute top-2 right-3"></IonicButton>
      {props.children}
    </div>
  );
}
