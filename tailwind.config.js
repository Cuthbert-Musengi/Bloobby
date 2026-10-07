/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: 'hsl(var(--accent))',
      },
      fontFamily: {
        header: ['var(--font-header)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
