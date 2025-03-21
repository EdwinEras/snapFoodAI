/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
