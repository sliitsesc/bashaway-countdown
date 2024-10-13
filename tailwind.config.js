module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      dropShadow: {
        "orange-glow": "0px 0px 10px #EF722690",
        "orange-glow-bright": "0px 0px 25px #EF722690",
        "white-glow": "0px 0px 10px #FFFFFF60",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
};
