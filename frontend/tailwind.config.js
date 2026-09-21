/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f7',
          500: '#0e8ce8',
          600: '#026fc7',
          700: '#0358a1',
          800: '#074b84',
          900: '#0b3f6e',
          950: '#072849',
        },
        warm: {
          50: '#fffbf5',
          100: '#fef5e7',
          200: '#fde7c8',
          300: '#fad39f',
          400: '#f6b86e',
          500: '#f29943',
          600: '#e47d25',
          700: '#bd5f1b',
          800: '#964b1d',
          900: '#7a3f1b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 55, 96, 0.08), 0 2px 6px -1px rgba(14, 55, 96, 0.04)',
        'card': '0 10px 30px -4px rgba(7, 40, 73, 0.1), 0 4px 10px -2px rgba(7, 40, 73, 0.05)',
      }
    },
  },
  plugins: [],
}
