/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        keyfor: {
          hero: '#1C3225',
          'hero-dark': '#162A1F',
          'hero-mid': '#24422D',
          'hero-glow': '#3E6D49',
          accent: '#6FCA7A',
          base: '#7DDD83',
          'base-hover': '#6ecb74',
          dark: '#0A1811',
          darker: '#050D09',
          surface: '#122B1E',
          card: '#0D2218',
          border: '#1E3E2E',
          sage: '#D7F5D9',
          mint: '#7DDD83',
          'mint-bg': '#EAF9EE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
