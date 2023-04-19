/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E5150",
        secondary: "#A9A9A9",
        tertiary: "#BDBDBD",
        footer: "#B9BDCF",
      },

      fontSize: {
        username: "var(--fs-username)",
        location: "var(--fs-location)",
        stats: "var(--fs-stats)",
        footer: "var(--fs-footer)",
      }
    },
  },
  plugins: [],
}