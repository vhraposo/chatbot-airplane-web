/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'foreground-primary': 'var(--text-primary)',
        'text-bold': 'var(--text-bold)',
        'online-color': 'var(--online-color)',
        'primarybg': 'var(--bg-primary)',
        'secondarybg': 'var(--bg-secondary)',
      }      
    },
  },
  plugins: [],
}