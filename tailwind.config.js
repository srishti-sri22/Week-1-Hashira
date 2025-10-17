// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx,html}"
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         crimson: ['"Crimson Text"', 'serif'],
//         mono: ['"Roboto Mono"', 'monospace'],
//         sans: ['"DM Sans"', 'sans-serif'],
//         rethinks: ['"Rethink Sans"', 'sans-serif'],
//         reddit: ['"Reddit Mono"', 'monospace'],
//       },
//       screens: {
//         mob: '375px',   // mobile
//         tab: '800px',   // tablet
//         lap: '1280px',  // laptop/desktop
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    screens: {
      mob: "375px",      // up to 799px
      tab:  "800px",  // 800px–1279px
      lap: "1280px",     // 1280px and above
    },
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
        rethinks: ['"Rethink Sans"', 'sans-serif'],
        reddit: ['"Reddit Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
