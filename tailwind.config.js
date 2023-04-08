/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

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
        "pasteal": {
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
            950: "#081713"
          }

      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
