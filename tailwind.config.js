module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      fontFamily: {
        mono: ['Monaco', 'Menlo', 'Courier New', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
