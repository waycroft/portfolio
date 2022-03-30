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
          primary: "#F0AF65",
          secondary: "#F0AF65",
          accent: "#61564E",
          neutral: "#151310",
          "base-100": "#F0EBE5",
        },
      },
    ],
  },
};
