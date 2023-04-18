/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
              opacity: '0'
          },
          '50%': {
            opacity: '.5'
          },
          '100%': {
              opacity: '1'
          },
        },
        'fade-out': {
          '0%': {
              opacity: '1'
          },
          '50%': {
            opacity: '.5'
          },
          '100%': {
              opacity: '0'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms linear',
        'fade-out': 'fade-out 300ms linear',
      },
    },
  },
  plugins: [],
}
