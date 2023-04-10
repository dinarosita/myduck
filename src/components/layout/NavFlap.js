import React from "react";
import NavContent from "../sections/NavContent";
export default function NavFlap(props) {
  return (
    <div
      className={`
    border-main fixed 
    top-0 flex h-full w-64 flex-col overflow-auto flex-1
   rounded-r-3xl
   border-l-0 border-maincolor bg-gradient-to-r
   from-white to-sol-25  
   transition-all 
   duration-500 lg:hidden
   ${props.openFlap ? "left-0" : "-left-64"}  `}
    >
      <NavContent />
    </div>
  );
}
