/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FFF2E1",
          100: "#FEE4C3",
          200: "#FED59F",
          "l": "#FED59F",
          300: "#FDC377",
          400: "#FDAD45",
          "ml": "#FDAD45",
          500: "#FC9204",
          600: "#E88503",
          "m": "#E88503",
          700: "#D47903",
          800: "#BA6B02",
          "md": "#BA6B02",
          900: "#9C5902",
          950: "#6F3F01",
          "d": "#6F3F01",
        },
      },
    },
  },
  plugins: [],
};
