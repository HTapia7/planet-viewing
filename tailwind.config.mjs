module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#4B0082', // Deep purple (Indigo)
          800: '#5A009B', // Purple blend
          700: '#7B1FA2', // Lighter purple
          600: '#9C27B0', // Highlight purple
          300: '#E1BEE7', // Muted highlight
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #000000, #4B0082, #5A009B, #0000FF)',
      },
    },
  },
  plugins: [],
};
