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

      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
