/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white_gray: {
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fbfcfd",
          400: "#fafbfc",
          500: "#f9fafb",
          600: "#c7c8c9",
          700: "#959697",
          800: "#646464",
          900: "#323232",
        },
        main: {
          100: "#d8d9db",
          200: "#b1b3b7",
          300: "#898c93",
          400: "#62666f",
          500: "#3b404b",
          600: "#2f333c",
          700: "#23262d",
          800: "#181a1e",
          900: "#0c0d0f",
        },
      },
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         100: "#d7e5ff",
  //         200: "#afcbff",
  //         300: "#87b1ff",
  //         400: "#5f97ff",
  //         500: "#377dff",
  //         600: "#2c64cc",
  //         700: "#214b99",
  //         800: "#163266",
  //         900: "#0b1933",
  //       },
  //       main: "#3b404b",
  //       whiteGray: "#F9FAFB",
  //       black: "#18191A",
  //       blackGray: "#242526",
  //     },
  //   },
  // },
  plugins: [],
};
