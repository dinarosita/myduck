/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        mainspace: "0.5rem", // 2, 8px
        mboxspace: "4px", // 2, 8px
      },
      borderWidth: {
        mainborderw: "2px", // 2
        mboxborderw: "4px", // 8

      },
      colors: {
        textcolor: "#6F3F01", // sol-950
        maincolor: "#FC9204", // sol-500
        hovercolor: "#3FB098", //sea-600
        mboxcolor: "#FDC377", // sol-400
        cboxcolor: "#FEE4C3", //sol-100
        sol: {
          DEFAULT: "#FC9204", // 500
          7: "#FFFCEB",
          10: "#FEF8E6",
          12: "#FFFDF8",
          18: "#FFFBF4",
          25: "#FFF9F0",
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
