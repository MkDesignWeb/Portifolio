/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*tsx"],
  theme: {
    extend: {
      colors: {
        'primary': '#5A099D',
        'blck-smoth': '#151515',
        'black-smoth-hover': '#1C1C1C',
        'black-scudary': '#140f1a',
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
