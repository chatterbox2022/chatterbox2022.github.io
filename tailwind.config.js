/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        paytone: ["Paytone One", "sans-serif"],
        DM: ["DM Sans", "sans-serif"],
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { border: 'transparent' },
          '50%': { border: 'black' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      scale: {
        flip: '-1',
      },
    },
  },
  plugins: [],
}
