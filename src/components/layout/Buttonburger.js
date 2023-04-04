import React from "react";

const Buttonburger = (props) => {
  return (
    <button
      className="rounded bg-sol-600 py-2 px-6 font-[Poppins] text-white duration-500 hover:bg-sol-400 
    md:ml-8"
    >
      {props.children}
    </button>
  );
};

export default Buttonburger;
