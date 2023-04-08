import React from "react";
import { useState } from "react";

function IconWrapper({ iconType, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="text-sol hover:text-sol font-bold rounded-sm focus:outline-none focus:shadow-outline leading-none"
    >
      <ion-icon
        name={isHovered ? `${iconType}-sharp` : `${iconType}-outline`}
        style={{ fontSize: "24px" }}
      ></ion-icon>
    </button>
  );
}

export default IconWrapper;
