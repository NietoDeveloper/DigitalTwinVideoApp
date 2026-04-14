/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'space-black': '#050505',
        'dt-gold': '#FFD700',
        'dt-gainsboro': '#DCDCDC',
        'dt-cyan': '#00c8ff',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};