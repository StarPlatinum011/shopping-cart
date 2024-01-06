/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'AccentColor': '#BF4F74',
        'secondary-bg': '#2D3250'
      }
    },
    
  },
  plugins: [],
}

