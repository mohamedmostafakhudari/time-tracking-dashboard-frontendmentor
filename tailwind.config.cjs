/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-work",
    "bg-study",
    "bg-play",
    "bg-exercise",
    "bg-self-care",
    "bg-social",
  ],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",
        work: "hsl(15, 100%, 70%)",
        study: "hsl(348, 100%, 68%)",
        play: "hsl(195, 74%, 62%)",
        exercise: "hsl(145, 58%, 55%)",
        "self-care": "hsl(43, 84%, 65%)",
        social: "hsl(264, 64%, 52%)",
        "blue-d": "hsl(235, 46%, 20%)",
        "blue-d-very": "hsl(226, 43%, 10%)",
        "blue-desaturated": "hsl(235, 45%, 61%)",
        "blue-pale": "hsl(236, 100%, 87%)",
      },
      fontSize: {
        heading: "18px",
      },
    },
    fontFamily: {
      body: ["'Rubik'", "sans-serif"],
    },
  },
  plugins: [],
};
