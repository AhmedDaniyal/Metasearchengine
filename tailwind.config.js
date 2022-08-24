module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
   // or 'media' or 'class'
  theme: {
    extend: {
  

      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },

     
      
    }, 
  },
   variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}