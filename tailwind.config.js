/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1700px',
        '4xl': '1920px',
        'xtrasmall': '480px',
        "mdmid" : "870px" ,
        // for teamcards
        "mdlg": "1115px"
      }
    },
  },
  plugins: [],
}