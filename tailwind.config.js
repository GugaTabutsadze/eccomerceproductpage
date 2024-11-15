/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",   
      md: "768px",   
      lg: "1024px",  
      xl: "1440px",  
    },
    extend: {
     colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darken: "rgba(0, 0, 0, 0.5)"
     },
     fontFamily: {
      sans: ['"Kumbh Sans"', 'sans-serif'],
     },
     fontSize: {
        base: '16px', 
     },
    },
  },
  plugins: [],
}


