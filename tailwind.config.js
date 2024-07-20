/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottomShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.5)", // Custom bottom shadow
      },
      height: {
        dropdownHeight: "calc(100vh - 112px)",
      },
      colors: {
        primary: "#050B17",
        secondary: "#0D1321",
        custom_blue: "#22C9CF",
        custom_pink: "#C90E87",
      },
      gradientColorStops: {
        "blue-green": ["#3498db", "#2ecc71"],
      },
    },
  },
  plugins: [],
};
