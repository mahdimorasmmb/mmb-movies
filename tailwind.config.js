module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ["last", "hover"],
    animation: ["group-hover"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
