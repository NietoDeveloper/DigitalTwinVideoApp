/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Se actualiza el nombre del plugin para compatibilidad con Tailwind v4 / Next 16
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};

export default config;