/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#bee3f8",
        },
        red: {
          DEFAULT: "#fc8181",
        },
        sol: {
          DEFAULT: "#FC9204", // 500, use in default text color of html
          t: "#E88503", // 600, for title use
          b: "#FDAD45", // 400, for border use
          l: "#FEE4C3", // 100
          ml: "#FDAD45", // 400
          m: "#FC9204", // 500
          md: "#BA6B02", // 800
          d: "#6F3F01", // 950
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
          50: "#F4FAFA",
          100: "#EAF6F5",
          200: "#D1EBEA",
          300: "#BCE1E0",
          400: "#A3D6D5",
          500: "#8CCCCA",
          600: "#5CB7B4",
          700: "#40918E",
          800: "#2A5F5E",
          900: "#163131",
          950: "#0B1918",
        },
        olive: {
            DEFAULT: "#B7CC8D",
          50: "#F8FAF4",
          100: "#F2F6EA",
          200: "#E2EBD1",
          300: "#D5E1BC",
          400: "#C5D6A3",
          500: "#B7CC8D",
          600: "#99B75D",
          700: "#769041",
          800: "#4E5F2B",
          900: "#283116",
          950: "#14190B",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
