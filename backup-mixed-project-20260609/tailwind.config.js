/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f4f7f2",
          100: "#e2eadc",
          500: "#315c3b",
          700: "#173522",
          900: "#0b1c12"
        },
        ink: "#101411",
        graphite: "#3f4742"
      },
      boxShadow: {
        catalog: "0 24px 70px rgba(16, 20, 17, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
