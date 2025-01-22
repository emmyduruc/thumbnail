/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#E6E9F0",
          200: "#586689",
        },
      },
    },
  },
  plugins: [],
};
