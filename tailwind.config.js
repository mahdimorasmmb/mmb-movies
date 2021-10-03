module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greenHd: "#051421",
        greenHl: "#042727",
      },
    },
  },
  variants: {
    display: ["last", "hover"],
    animation: ["group-hover"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
