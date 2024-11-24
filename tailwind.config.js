/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dog-brown': {
          100: '#8C4F5A', // Lighter brown shade
          200: '#6A3D47', // Medium brown shade
          300: '#4A2B32', // Darker brown shade
          400: '#341F26', // Rich dark brown
        },
        'cat-white': {
          100: '#F8F8F8', // Soft white
          200: '#F1F1F1', // Light grayish white
        },
        'heart-peach': {
          100: '#FFCCB8', // Soft peachy pink
          200: '#FFB59A', // Warm peachy pink
          300: '#FF957D', // Subtle pinkish peach
          400: '#E78B6C', // Deeper pinkish peach
        },
        'cream': {
          100: '#FFF7ED', // Subtle warm cream for backgrounds
          200: '#FFE6D4', // Muted peach for highlights
        },
        'muted-gray': {
          100: '#F0F0F0', // Very soft gray for secondary content
          200: '#C1C1C1', // Neutral gray for text and subtle borders
        },
        'soft-green': {
          100: '#E4F3E1', // Calming pastel green for accents
          200: '#A9D9A3', // Muted green for balance
        },
      },
      screens: {
        'max-[1100px]': { 'max': '1100px' },
      },
    },
  },
  plugins: [],
}
