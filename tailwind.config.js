/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',  // Small screens and above
      md: '768px',  // Medium screens and above
      lg: '1024px', // Large screens and above
      xl: '1280px', // Extra large screens and above
    },
    extend: {
      colors: {
        beig: '#FCDCB5',
        yellow: '#FFDA47',
        cyan: '#B9DAD5',
        whitesmoke: '#FAE3D9',
        contactClr: '#FBF9FF',
        footerClr: '#F8F8F8', 
        ServiceClr:'#FFDA47'
        
      },
      fontFamily: {
      Nunito: ['Nunito'],
      Lato: ['Lato']
      },
    },
  },
  plugins: [],
}

