/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary':'#f3c614',
        'secondary':'#353535'
      },
      height:{
        '80':'20rem'
      }
    }
  },
  plugins: [],
}

