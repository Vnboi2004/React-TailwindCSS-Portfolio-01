/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0360D9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      clipPath: {
        half: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)', // Cắt nửa hình tròn
      },
    },
  },
  plugins: [],
}

