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
      },
      animation: {
        'fade-in': 'fade-in 2s cubic-bezier(0.4, 0, 0.6, 1)'
      },
    },
  },
  plugins: [],
}
