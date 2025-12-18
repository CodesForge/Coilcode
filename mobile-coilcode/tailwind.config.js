/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        tg: {
          bg: '#0B0C10',       
          card: '#17181F',      
          surface: '#21222C',  
          accent: '#FF6B35',    
          accent2: '#4ADE80',   
          text: '#F8FAFC',      
          text2: '#CBD5E1',     
          border: '#374151',    
          shadow: '#111827',
          accent: '#10B981',   
          accent2: '#059669',    
          accent3: '#047857',
        }
      }
    },
  },
  plugins: [],
};
