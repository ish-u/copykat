/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        netflix: ["NetflixSans", "sans-serif"],
        overpass: ["Overpass"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
