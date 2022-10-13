/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f8f9fa",
          secondary: "#353535",
          accent: "#4ed199",
          neutral: "#adb5bd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
