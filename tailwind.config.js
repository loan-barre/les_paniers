/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paniers: {
          orange: '#FF821B',
          brown: '#D2691E',
          terracotta: '#E89A5E',
          red: '#FF821B',
          cream: '#FFF8F3',
          light: '#FFFAF7',
          dark: '#2C2C2C',
          border: '#F5E6DB',
          wood: '#F4D7B8',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
