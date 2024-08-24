/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gradient': '0px 8px 15px rgba(255, 0, 0, 0.3), 0px 10px 10px rgba(0, 0, 255, 0.3), 0px 1px 10px rgba(0, 255, 0, 0.3)',
        'mint-200': '#aef3e4',
      }
    }
  },
  plugins: [],
}

