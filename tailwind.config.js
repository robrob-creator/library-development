/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        main: "url('./src/assets/images/bg.svg')",
      },
    },
  },
  plugins: [],
};
