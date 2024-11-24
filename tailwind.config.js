/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      container: {
        center: true,
      },
    },
    extend: {
      fontFamily: {
        mansel: ["mansel", "sans-serif"],
        cairo: ["cairo play", "sans-serif"],
        belano: ["belanosima", "sans-serif"],
        magic: ['magic bright serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
