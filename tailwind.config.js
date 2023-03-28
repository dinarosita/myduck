/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "547px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "768px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1024px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1680px",
    //   // => @media (min-width: 1536px) { ... }
    // },
    extend: {
      colors: {
        primary: "#B34700",
        orange: {
          150: "#FFE5B4",
          250: "#FFC57D",
          350: "#FFA047",
          450: "#FF7C12",
          550: "#E66400",
          650: "#B34700",
          750: "#802800",
          850: "#4D0A00",
          950: "#1A0000",
        },
      },
    },
  },
  plugins: [],
};
