/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fcfffc",
        green: {
          light: "#2ba84a",
          DEFAULT: "#2ba84a",
          dark: "#248232",
        },
        black: {
          light: "#2d3a3a",
          DEFAULT: "#2d3a3a",
          dark: "#040f0f",
        },
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
      },
    },
    fontFamily: {
      ketika: ["ketika", "fantasy"],
      walton: ["walton", "cursive"],
    },
  },
  plugins: [],
};
