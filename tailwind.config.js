// const colors = require('tailwindcss/colors')
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        whiteBeige: "edede9",
        grayishColor: "d6ccc2",
        lightBeige: "f5ebe0",
        creamBeige: "e3d5ca",
        darkBeige: "d5bdaf",
      },
    },
  },
  plugins: [],
};
