import React from "react";

export default function MainWrapper({ title, tagline, children }) {
  return (
    <main className="w-effective scrollbar flex h-full flex-col gap-2 overflow-auto py-2">
      <header>
        <h1 className="text-center uppercase">{title}</h1>
        <p className="title text-center">
          {tagline}
        </p>
      </header>
      {children}
    </main>
  );
}
