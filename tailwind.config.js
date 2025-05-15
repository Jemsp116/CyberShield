/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.emerald.500'),
              '&:hover': {
                color: theme('colors.emerald.400'),
              },
            },
            strong: {
              color: theme('colors.white'),
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.emerald.600'),
            },
            code: {
              color: theme('colors.emerald.400'),
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
            },
            ul: {
              li: {
                '&::before': {
                  backgroundColor: theme('colors.emerald.500'),
                },
              },
            },
            ol: {
              li: {
                '&::before': {
                  color: theme('colors.emerald.500'),
                },
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 