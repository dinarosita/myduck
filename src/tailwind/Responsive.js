import React from "react";
import logo from "./img/logo128.png";
import Box from "../wrappers/Box";

export default function Responsive() {
  return (
    <Box h3 title="Responsive Design">
      <div className="sm:flex">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p>Topic</p>
          <p>Title</p>
          <p>Description</p>
        </div>
      </div>
    </Box>
  );
}
