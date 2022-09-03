/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*tsx"],
  theme: {
    extend: {
      colors: {
        'primary': '#5A099D',
        'fundo': '#050505'
      },
      fontFamily: {
        'Roboto-Light': 'Roboto-Light',
        'Roboto-Medium': 'Roboto-Medium',
        'UniSans': 'UniSans'
      }
    },
  },
  plugins: [],
}
