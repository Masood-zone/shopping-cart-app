/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-pink": "hsl(275, 100%, 97%)",
        "gray-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"],
  },
};
