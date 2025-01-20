/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        decode: ["Roboto Condensed", "serif"],
      },
      colors: {
        primary: "#60E1CB",
        secondary: "#7BC0E3",
        accent: "#E9FBF8",
        background: "#FFFFFF",
        text: "#292525",
        success: "#4CAF50",
        error: "#FF0000",
        warning: "#FFC107",
        info: "#2196F3",
      },
    },
  },
  plugins: [],
};
