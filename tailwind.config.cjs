/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    colors: {
      colors: {
        'orange-primary': '#FF8500',
        'orange-secondary': '#FFD266',
        'white': '#ffffff'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}
