/** @type {import('tailwindcss').Config} */

import {
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  neutral,
} from "./src/assets/color";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: primary,
        secondary: secondary,
        success: success,
        danger: danger,
        warning: warning,
        info: info,
        neutral: neutral,
      },
      boxShadow: {
        button: `11px 10px 15px -3px ${neutral["900"]}`,
        buttonHover: `0px 8px 9px -4px ${neutral["900"]}, 0px 4px 18px 0px ${neutral["900"]}`,
        card: `0px 10px 15px -3px ${neutral["900"]}`,
      },
      borderRadius: {
        DEFAULT: "20px",
      },
    },
    fontFamily: {
      kronaone: ["Krona One", "fantasy"],
      krub: ["Krub", "sans-serif"],
      koulen: ["Koulen", "cursive"],
    },
  },
  plugins: [],
};
