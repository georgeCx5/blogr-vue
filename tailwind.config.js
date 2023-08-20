/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        // (CTA text)
        'neo-light-red': 'hsl(356, 100%, 66%)',
        // (CTA hover background)
        'neo-very-light-red': 'hsl(355, 100%, 74%)',
        // (headings)
        'neo-very-dark-blue': 'hsl(208, 49%, 24%)',

        // ### Neutral
        // (text)
        'neo-white': 'hsl(0, 0%, 100%)',
        // (footer text)
        'neo-grayish-blue': 'hsl(240, 2%, 79%)',
        // (body copy)
        'neo-very-grayish-blue': 'hsl(207, 13%, 34%)',
        // (footer background)
        'neo-very-dark-black-blue': 'hsl(240, 10%, 16%)',

        // ### Gradient
        // Background gradient - Intro/CTA mobile nav:
        'neo-very-light-red-two': 'hsl(13, 100%, 72%)',
        'neo-light-red-two': 'hsl(353, 100%, 62%)',

        // Background gradient - body:
        'neo-very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'neo-very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',

        // ### Extras
        'neo-nav-line': 'hsl(0, 7%, 90%)',
      },
      dropShadow: {
        'navMB': '0 20px 40px rgba(0, 0, 0, 0.25)',
        'nav': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'overpass': 'Overpass',
        'ubuntu': 'Ubuntu',
      },
      screens: {
        'TB': '640px',
        'DTL': '1440px',
        'DTXL': '1750px',
      },
    },
  },
  plugins: [],
}