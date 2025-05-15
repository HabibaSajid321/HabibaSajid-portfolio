/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A101E', // Your original dark blue
        secondary: '#FEC544', // Your original yellow
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      const newUtilites = {
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // ... keep your other utility classes
      };
      addUtilities(newUtilites, ['responsive', 'hover']);
    }),
  ],
};