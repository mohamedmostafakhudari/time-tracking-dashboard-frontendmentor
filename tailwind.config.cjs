/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",
        "blue-l": "hsl(195, 74%, 62%)",
        "red-l": {
          work: "hsl(15, 100%, 70%)",
          study: "hsl(348, 100%, 68%)",
        },
        green: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        orange: "hsl(43, 84%, 65%)",
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
