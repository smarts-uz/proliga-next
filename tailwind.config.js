/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#FFF400',
      },
      screens: {
        xs: '420px',
        '2xs': '375px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float-ball': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25%, 25%)' },
          '50%': { transform: 'translate(50%, 0%)' },
          '75%': { transform: 'translate(25%, -25%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-ball': 'float-ball 20s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss'],
}
