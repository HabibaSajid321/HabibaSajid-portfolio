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
        primary: '#0A101E',
        secondary: '#FEC544',
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
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-start': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        '.flex-end': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
      };
      addUtilities(newUtilites, ['responsive', 'hover']);
    }),
  ],
};
