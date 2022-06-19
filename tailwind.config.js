/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: (theme) => ({
      dark: {
        css: {
          color: 'white',
        },
      },
    }),
    extend: {
      backgroundImage: {
        pony: "url('/pony.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
