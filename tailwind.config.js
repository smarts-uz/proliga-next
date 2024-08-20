/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFF400"
      },
      screens: {
        "xs": "420px",
        "2xs": "375px"
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
