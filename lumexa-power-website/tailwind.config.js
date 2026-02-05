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
        'lumexa-navy': '#1e3c72',
        'lumexa-blue': '#4A90E2',
        'lumexa-gold': '#FFD700',
        'lumexa-orange': '#FF6B35',
        'lumexa-green': '#4CAF50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
