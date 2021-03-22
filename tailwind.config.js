module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur-10': 'blur(10px)',
      'blur-20': 'blur(20px)',
      'blur-30': 'blur(30px)',
      'blur-40': 'blur(40px)',
      'blur-50': 'blur(50px)'
    },
    extend: {
      height: {
        '50vh': '50vh',
        '75vh': '75vh',
        '150vh': '150vh',
        '200vh': '200vh',
      },
      borderWidth: {
        0.2: '0.2px'
      },
      colors: {
        navy: {
          100: '#E0F2FF',
          200: '#BEE5FD',
          300: '#87CAF1',
          400: '#52A8DA',
          500: '#3690C8',
          600: '#2c8dba',
          700: '#136899',
          800: '#0E5785',
          900: '#0A4C75',
          1000: '#033552'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
