/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', 
    './app/screens/**/*.{js,ts,tsx}',
    './app/components/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
