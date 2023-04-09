import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function IconWrapper({ iconType, onClick, to, addClass }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (to) {
    return (
      <Link
        to={to}
        onClick={() => {
          setIsHovered(true);
          if (onClick) {
            onClick();
          }
        }}
        className={`focus:shadow-outline rounded-sm font-bold leading-none text-sol hover:text-sol focus:outline-none ${addClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ion-icon
          name={isHovered ? `${iconType}-sharp` : `${iconType}-outline`}
          style={{ fontSize: "24px" }}
        ></ion-icon>
      </Link>
    );
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`text-sol focus:shadow-outline rounded-sm font-bold leading-none hover:text-sol focus:outline-none ${addClass}`}
    >
      <ion-icon
        name={isHovered ? `${iconType}-sharp` : `${iconType}-outline`}
        style={{ fontSize: "24px" }}
      ></ion-icon>
    </button>
  );
}

export default IconWrapper;
