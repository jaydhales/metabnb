/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A02279",
        footer: "#1D1D1E",
        dark: "#434343",
        grey: "#D7D7D7",
        fade: "#4040404D",
        hover: "#CFD8DC",
      },
      borderRadius: {
        lg: "10px",
      },
      screens: {
        lg: "1200px",
        md: '800px'
      },
    },
  },
  plugins: [],
};
