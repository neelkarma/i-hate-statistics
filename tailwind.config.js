/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
