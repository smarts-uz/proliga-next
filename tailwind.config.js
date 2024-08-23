/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFF400',
      },
      screens: {
        xs: '420px',
        '2xs': '375px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
