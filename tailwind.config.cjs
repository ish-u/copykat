/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        netflix: ["NetflixSans", "sans-serif"],
        overpass: ["Overpass"],
      },
      colors: {
        global_bg_color: "rgb(15, 15, 15)",
        sign_in_text: "#fa2d48",
        article_text: "#f5f6f4",
      },
    },
  },
  plugins: [],
};
