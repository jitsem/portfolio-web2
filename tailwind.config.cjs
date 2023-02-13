/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      colors: {
        blue: {
          600: "#4681CF",
          700: '#3d70b2',
          900: '#3f3d56',
        },
      }
    },
  },
  plugins: [],
}
