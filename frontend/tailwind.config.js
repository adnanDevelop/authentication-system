/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [daisyui],
  daisyui: {
    themes: [
      "dark",
      "light",
      {
        "custom-theme": {
          primary: '#00ADB5',
          "yellow": "#FFB800",
          "light-yellow": "#FFB80033",
          "pink": "#FF6A6D",
          "light-pink": "#FF6A6D33",
          "light-gray": "#343A4080",
          "dark-color": "#343A40",
          "light-color": "#868E96",
          "light-white": "#F5F5F5",
        },
      },
    ],
  },
}