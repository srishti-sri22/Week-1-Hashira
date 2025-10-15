/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      screens: {
        mob: '375px',   // mobile
        tab: '800px',   // tablet
        lap: '1280px',  // laptop/desktop
      },
    },
  },
  plugins: [],
};
