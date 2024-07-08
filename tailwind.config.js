/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.markdown',
    '*.html'
  ],
  theme: {
    colors: {
      primary: '#ff2c6d', // pink
      secondary: '#D8B64D', // yellow
      light: '#EAD6F0',
      white: '#FFFFFF',
      slate: {
        50: "#202427",
        100: "#232830",
        200: "#2B303B",
        300: "#353A45",
      },
      DEFAULT: '#232830',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.secondary'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              },
            },
          },
        },
      })
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
