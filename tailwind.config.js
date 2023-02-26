/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        large: "24px",
        regular: "20px",
        small: "16px",
        xSmall: "14px",
        xxSmall: "12px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
