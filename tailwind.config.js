/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'aot',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FCC63D",
        dark: "#333333",
        green: "#C5E5CB",
        red: "#EB5757",
        grey: "#F2F2F2",
        purple: "#C5BBFC",
      },
      fontFamily: {
        logo: ["Aladin", "cursive"],
      },
      minHeight: {
        80: "80vh",
        90: "90vh",
      },
    },
  },
  plugins: [],
};
