const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      azul: {
        light: "#5e84ff"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}