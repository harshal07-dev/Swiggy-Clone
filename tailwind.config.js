/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        red: {
          100: '#F13030',
          
        },
        primary: "#F26419",
        white: {
          DEFAULT: "#ffffff",
          100: "#fafafa",
          200: "#FE8C00"
        },
        green: {
          100: '#084137'
        },
        gray: {
          100: '#878787',
          200: '#878787',
        },
        dark: {
          100: '#181C2E',
        },
        error: {
          error: '#F14141',
          success: "#2F9B65"
        },
      }
      ,
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
      }
    },
  },
  plugins: [],
}