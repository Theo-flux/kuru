/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      ebony: "#0B101B",
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
};
