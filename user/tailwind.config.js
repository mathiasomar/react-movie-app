/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        backgroundContrast: "#111",
        textBlack: "1d1d1f"
      }
    },
  },
  plugins: [],
}