/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        textmax: "240px",
      },
      minHeight: {
        textmin: "60px", // Doesn't work on textarea
      },

      minWidth: {
        default: "320px",
      },
      minHeight: {
        default: "420px",
      },
      spacing: {
        mainspace: "0.5rem", // 2, 8px
        mboxspace: "4px", // 2, 8px
      },
      borderWidth: {
        mainborderw: "2px", // 2
        mboxborderw: "4px", // 8
      },
      screens: {
        xs: "480px",
      },
      colors: {
        textcolor: "#463325", 
        petal: "#FCF8F8", // blossom-50
        vincent: {
          50: "#F0F8FA",
          100: "#E0F1F5",
          200: "#BDE2EA",
          300: "#97D1DE",
          400: "#64BACE",
          500: "#399BB2",
          600: "#338B9E",
          700: "#2E7D8F",
          800: "#256574",
          900: "#1B4A55",
          950: "#14363E",
        },
        almond: {
          50: "#F8F4F2",
          100: "#F1EAE4",
          200: "#E4D7CD",
          300: "#D3BDAC",
          400: "#BE9D84",
          500: "#A27756",
          600: "#936C4E",
          700: "#7F5D43",
          800: "#6B4E39",
          900: "#463325",
          950: "#32251B",
        },
        blossom: {
          50: "#FCF8F8",
          100: "#F9F2F1",
          200: "#F1E1DF",
          300: "#E8CECA",
          400: "#E0BDB8",
          500: "#D5A69F",
          600: "#CC938A",
          700: "#BF786E",
          800: "#B35E51",
          900: "#834339",
          950: "#552C25",
        },
        sprig: {
          50: "#F9FBF9",
          100: "#EFF5F0",
          200: "#DAE7DB",
          300: "#C7DBC9",
          400: "#B1CDB4",
          500: "#98BD9B",
          600: "#80AD83",
          700: "#649B68",
          800: "#527F55",
          900: "#3C5D3F",
          950: "#2C442E",
        },
        maincolor: "#FC9204", // sol-500
        hovercolor: "#3FB098", //sea-600
        mboxcolor: "#BFE8DF", // sol-300
        cboxcolor: "#FEE4C3", //sol-100
        nonactive: "#FED59F", // sol-200
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
