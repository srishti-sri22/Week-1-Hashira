/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: [' "Crimson Text" ', 'serif'],     
        mono: ['Roboto Mono', 'monospace'],     
      },
      screens: {
        mob: '375px',  
        tab: '800px',   
        lap: '1280px', 
      },
    },
  },
  plugins: [],
}
