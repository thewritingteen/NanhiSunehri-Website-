/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0d0906',
        'night-2': '#151009',
        gold: '#e8b84b',
        'gold-bright': '#f6d789',
        'gold-deep': '#b8862b',
        cream: '#f7efe0',
        muted: '#b8a98c',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
