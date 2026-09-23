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
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
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
        'soft': '0 4px 20px -2px rgba(79, 70, 229, 0.08), 0 2px 6px -1px rgba(79, 70, 229, 0.04)',
        'card': '0 10px 30px -4px rgba(49, 46, 129, 0.1), 0 4px 10px -2px rgba(49, 46, 129, 0.05)',
      }
    },
  },
  plugins: [],
}
