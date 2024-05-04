/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : 'hsl(75, 94%, 57%)',
        neutral : {
          gray : 'hsl(0, 0%, 20%)',
          'dark-gray' : 'hsl(0, 0%, 12%)',
          'off-black' :'hsl(0, 0%, 8%)'
        }
      },
      fontFamily : {
        inter : ['Inter','sans-serif']
      }

    },
  },
  plugins: [],
}