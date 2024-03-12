/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#800020",
        secondary: "#264653",
        bg_color: "#cbf3f0",
      }
    },
  },
  plugins: [],
}