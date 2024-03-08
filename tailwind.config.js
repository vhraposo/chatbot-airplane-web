/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'text-primary': 'var(--text-primary)',
        'text-bold': 'var(--text-bold)',
        'online-color': 'var(--online-color)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
      }      
    },
  },
  plugins: [],
}