import React from "react";
import logo from "../img/logo128.png";
import Box from "../wrappers/Box";

export default function Responsive() {
  return (
    <Box level="h3" expand title="Responsive Design">
      <div className="items-center gap-4 sm:flex">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p className="title">Vacations</p>
          <h3>Cactus expedition in Tucson</h3>
          <p>Enjoy the cactus paradise of Tucson, Arizona.</p>
        </div>
      </div>
    </Box>
  );
}
