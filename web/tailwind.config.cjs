/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy:"url('/Fundo.svg')",
        'nlw-gradient':'linear-gradient(89.86deg, #9572FC 10%, #43E7AD 50%, #E1D55D 90%)',
        'game-gradient':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      },
      fontFamily:{
        sans:['Inter,sans-serif']
      }
    },
  },
  plugins: [],
}
