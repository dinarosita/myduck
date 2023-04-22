/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      minHeight: {
        16: "4rem",
        80: "20rem",
      },
      colors: {
        charcoal: "#463325", // almond-900
        daffodil: "#FCF8F8", // amber-200 - petal now
        petal: "#FCF8F8", // petal-50
        nonactive: "#BDE2EA", // vincent-200
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
