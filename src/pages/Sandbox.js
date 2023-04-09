import React from "react"
import { useState } from "react";
import IconWrapper from "../components/ui/IconWrapper";

export default function Sandbox() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  const handleIconClick = () => {
    alert("Icon clicked");
  };

  return (
    <div>
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="text-sol hover:text-sol font-bold rounded-sm focus:outline-none focus:shadow-outline leading-none"
    >
      <ion-icon
        name={isHovered ? "eye-sharp" : "eye-outline"}
        style={{ fontSize: "24px" }}
      ></ion-icon>
    </button>
    <IconWrapper iconType="eye" onClick={handleIconClick} />
  
  
    </div>
  );
}
