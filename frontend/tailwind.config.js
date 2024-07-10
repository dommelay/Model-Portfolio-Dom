/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
          
    width: {
      'mobile': '325px'
    },

      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
      },

      fontFamily: {
        'libre': ['"Libre Caslon Display"', 'serif']
      }
    },


   
  },
  plugins: [],
}

