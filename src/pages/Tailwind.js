import React from "react";
import Box from "../wrappers/Box";
import BusinessCard from "../tailwind/BusinessCard";
import Chitchat from "../tailwind/Chitchat";
import Responsive from "../tailwind/Responsive";

export default function Tailwind() {
  return (
    <Box level="h2" title="Learning" noborder>
      <div className="space-y-4">
        <BusinessCard />
        <Chitchat />
        <Responsive />
      </div>
    </Box>
  );
}
