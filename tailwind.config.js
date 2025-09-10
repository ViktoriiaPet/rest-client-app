export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  safelist: ['hover:bg-lavender-300'],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#f0c8e9',
          200: '#eebee7',
          300: '#e396d6',
          400: '#e06bbd',
        },
        purple: {
          300: '#d3b5e5',
          400: '#bc7db7',
          500: '#9e829d',
          600: '#6e5f6f',
        },
        gray: {
          50: '#fdf5f9',
          200: '#e7dfe8',
          900: '#2a2229',
        },
        lavender: {
          100: '#ede7f6',
          300: '#c5aee6',
          500: '#8e7ab5',
        },
        rose: {
          200: '#ffd6e7',
          400: '#ff9bb3',
          600: '#e85b81',
        },
        cream: {
          100: '#fff8f1',
          300: '#fde2c8',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', { letterSpacing: '0.01em', lineHeight: '1.5' }],
        lg: ['18px', { letterSpacing: '0.01em', lineHeight: '1.6' }],
        xl: ['20px', { letterSpacing: '-0.01em', lineHeight: '1.6' }],
        '2xl': ['24px', { letterSpacing: '-0.015em', lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
};
