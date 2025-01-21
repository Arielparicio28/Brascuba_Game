 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Arial',
    },
     screens: {
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1930px',
     },
    extend: {
      colors: {
        primary: '#0E1112',
        bcBlue: '#446784',
        bcGrey: '#DDDDDD'
      },
    },
  },
  plugins: [],
}