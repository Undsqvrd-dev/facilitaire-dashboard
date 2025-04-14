/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.css"
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          background: "var(--background)",
          textDark: "var(--text-dark)",
          textLight: "var(--text-light)",
        },
      },
    },
    plugins: [],
};