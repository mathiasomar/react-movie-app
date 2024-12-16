/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        g: {
          100: "#cff1d1",
          200: "#9fe3a3",
          300: "#6fd574",
          400: "#3fc746",
          500: "#0fb918",
          600: "#0c9413",
          700: "#096f0e",
          800: "#064a0a",
          900: "#032505"
        },
      }
    },
  },
  plugins: [],
}