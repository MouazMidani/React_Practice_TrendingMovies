/** @type {import('tailwindcss').Config} */
module.exports = {
  // 👇 include all relevant paths
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  // 👇 this preset is correct and should stay
  presets: [require("nativewind/preset")],

  // 👇 explicitly control dark mode behavior to fix your error
  darkMode: "class", // or "media" if you prefer system dark mode only

  theme: {
    extend: {},
  },
  plugins: [],
};
