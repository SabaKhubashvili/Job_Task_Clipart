/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'FiraGo_Regular':['FiraGo_Regular','sans-serif'],
        'FiraGo_Medium':['FiraGo_Medium','sans-serif'],
        'FiraGo_Semibold':['FiraGo_Semibold','sans-serif']
      },
      fontSize:{
        'lg':'24px',
        'md':'16px',
        'sm':'13px',
        'xsm':'12px',
      },
      colors:{
        'primary':'#FF3B30',
        'gray-400':'#4A5468',
        'gray-300':'#E2E7F0',
        'gray-200':'#EDF0F7',
        'gray-100':'#F9FAFC',
      },
      backgroundImage:{
        'arrow-left':'url(./src/assets/Images/Icons/arrow.svg) !important'
      },
      boxShadow:{
        'main':'10px 10px 40px 0px rgba(0,0,0,0.12)',
        'secondary':'10px 10px 20px 0px rgba(0,0,0,0.1)'
      },
      screens: {
        'lg': '1920px',
        'extramd': '1240px',
        'md': '1024px',
        'sm':'360px',
      }
    },
  },
  plugins: [],
}