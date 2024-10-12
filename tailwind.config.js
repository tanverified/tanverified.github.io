import { fontFamily, screens } from 'tailwindcss/defaultTheme';

// Max-out at lg.
const customScreens = Object.assign({}, screens);
delete customScreens.xl;
delete customScreens['2xl'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './public/*.html'],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...fontFamily.sans],
      serif: ['"IBM Plex Serif"', ...fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...fontFamily.mono],
    },
    screens: customScreens,
    extend: {
      fontFamily: {
        'sans-narrow': ['"IBM Plex Sans Condensed"', ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
