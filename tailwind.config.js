/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary_beige': '#FDFCFC',
        'primary_blue': '#063B6D',
        'dark_primary_green': '#53C999',
        'medium_primary_green' : '#BAE9D5',
        'clear-primary-green':  '#DDF4EA',
        'secondary-blue': '#3F74A5',
        'secondary-beige': '#FBF8F7'
        },
      fontFamily:{
        'quicksand': ['Quicksand', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      fontSize:{
        'desktop_h1':'2.5rem',
        'desktop_h2':'1.5rem',
        'desktop_h3':'1.25rem',
        'desktop_h4':'1.125rem',
        'desktop':'1rem',
        'desktop_small':'0.875rem',
        'mobile_h1':'1.25rem',
        'mobile_h2':'1.125rem',
        'mobile_h3':'0.938rem',
        'mobile':'0.875rem',
      }
      },
    },
  plugins: [],
}
);