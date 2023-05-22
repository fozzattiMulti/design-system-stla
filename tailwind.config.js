/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0050DC',
      'blue-hover': '#4287FF',
      'white': '#FFF',
      'gray-500': '#444944',
      'gray-300': '#757575',
      'gray-100': '#E6E6E6',
      'red': '#FF0000',
      'black': '#000',

    },
    extend: {},
  },
  plugins: [],
}