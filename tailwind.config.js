const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'flamingo': "url('https://t4.ftcdn.net/jpg/01/59/54/63/360_F_159546362_4wXvByrPavWzDWta2UQJgTdsJ5DsB6y5.jpg')",
       }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      purple: colors.violet,
      yellow: colors.amber,
      green: {
        terra: "#474642",
        dark: "#2c382b",
        transparent:"#6e776d",
        light:"#9ba39b6e",
        t:"#6e776d",
        l:"#677066"
      },
      pink:{
        light:"#db9595",
        logo: "#f1dcdca7",
        dark:"#d18181",
        transparent: "#edb2adb5",
        deli:"#dbbdbd63",
        flamingo:"#db7894"
      },
      azul: {
        light: "#5e84ff"
      }
    },
    extend: {},
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}