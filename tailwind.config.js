export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./public/index.html",             
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['"Protest Riot"', 'cursive'],
        'space': ['"Space Grotesk"', 'sans-serif'],
        'manrope': ['"Manrope"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
