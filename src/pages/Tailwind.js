import React from "react";
import Box from "../wrappers/Box";
import BusinessCard from "../tailwind/BusinessCard";
import Chitchat from "../tailwind/Chitchat";
import Responsive from "../tailwind/Responsive";

export default function Tailwind() {
  return (
    <main>
      <h1>Tailwind</h1>
      <div className="space-y-4">
        <BusinessCard />
        <Chitchat />
        <Responsive />
      </div>
    </main>
  );
}
