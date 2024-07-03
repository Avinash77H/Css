/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily:{
        Helvetica:['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        poppins:['__Poppins_f7c8ff','sans-serif'],
        poppins_fallback:['__Poppins_Fallback_f7c8ff','sans-serif'],
      },
      screens:{
        'xsm':'100px',
      },
      colors:{
        gray:'#f2f2f2',
        custom_yellow:'#ffb400',
        'text-color':'#666',
      },
      clipPath:{
        'custom':'clip-path: polygon(0 0, 29% 0, 91% 100%, 0% 100%);'
      }
    },
  },
  plugins: [],
}

