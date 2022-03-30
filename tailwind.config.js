module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "body": ["'Red Hat Mono'"],
      "header": ["'Zilla Slab'"]
    },
    extend: {},
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
