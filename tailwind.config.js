const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Menlo", "Courier New", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        ink: {
          primary: "#151310",
          secondary: "#877763",
          accent: "#F0AF65",
          neutral: "#F0EBE5",
          "base-100": "#F0EBE5",
        },
      },
    ],
  },
};
