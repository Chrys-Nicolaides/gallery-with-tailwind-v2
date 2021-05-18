const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    strokeWidth: {
      3: "3",
      4: "4",
    },
    colors: {
      transparent: "transparent",
      gray: colors.gray,
      purple: colors.violet,
      indigo: colors.indigo,
      red: colors.red,
      black: colors.black,
      white: colors.white,
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "10xl": ["13rem", { lineHeight: "1" }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
