/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Handy for: p, m, gap
        sm: "0.25rem", // 1
        md: "0.5rem", // 2
        lg: "1rem", // 4
        // Handy for "1 dimentional" w or h
        thin: "2rem", // 8
        med: "3rem", // 12
        thick: "4rem", // 16
      },
      borderWidth: {
        xthin: "0.5px", // 0.5
        thin: "1px", // 1
        med: "2px", // 2
        thick: "4px", // 3
        xthick: "8px", // 4
      },
      colors: {
        textcolor: "#6F3F01", // sol-950
        maincolor: "#FC9204", // sol-500
        hovercolor: "#3FB098", //sea-600
        sol: {
          DEFAULT: "#FC9204", // 500
          7: "#FFFCEB",
          10: "#FEF8E6",
          50: "#FFF2E1",
          100: "#FEE4C3",
          200: "#FED59F",
          300: "#FDC377",
          400: "#FDAD45",
          500: "#FC9204",
          600: "#E88503",
          700: "#D47903",
          800: "#BA6B02",
          900: "#9C5902",
          950: "#6F3F01",
        },
        sea: {
          DEFAULT: "#A1DDD0", // 300
          50: "#F0FAF8",
          100: "#E1F4F0",
          200: "#BFE8DF",
          300: "#A1DDD0",
          400: "#83D3C1",
          500: "#63C7B2",
          600: "#3FB098",
          700: "#2F8371",
          800: "#1F564A",
          900: "#102D27",
          950: "#081713",
        },
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
