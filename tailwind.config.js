/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#233142",
        "secondary": "#f95959",
        "background": "#222222",
        "slate-502": "2rem",
      },
    },
  },
  plugins: [],
}

