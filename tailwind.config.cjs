/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CoolveticaCondReg: ["Coolvetica-Condreg"],
        CoolveticaReg: ["Coolvetica-Reg"],
        SourceSansProSemibold: ["SourceSansPro-Semibold"],
        SourceSansProBold: ["SourceSansPro-Bold"],
        InterSemibold: ["Inter-Semibold"],
        InterBold: ["Inter-Bold"],
        ConsolasRegular: ["Consolas-Regular"],
        ConsolasBold: ["Consolas-Bold"],
      },
      colors: {
        "white-MainPage": "#F8FAFC",
        "neutral-a": "#FAFDFF",
        "neutral-b": "#C3D4DB",
        "neutral-c": "#9CADB4",
        "neutral-d": "#75868D",
        "neutral-e": "#4E5F66",
        "neutral-f": "#27383F",
        "neutral-g": "#001118",
        "LightBlue-a": "#84D4E1",
        "LightBlue-b": "#2EC1D9",
        "LightBlue-c": "#1AB0C8",
        "LightBlue-d": "#179FB5",
        "LightBlue-e": "#158B9E",
      },
      keyframes: {
        swap_words: {
          "0%": { transform: "translateY(0)", opacity: 0.1 },
          "0.01%": { transform: "translateY(100%)", opacity: 0.1 },
          "25%": { transform: "translateY(100%)", opacity: 1 },
          "46%": { transform: "translateY(0)", opacity: 1 },
          "61%": { transform: "translateY(0)", opacity: 1 },
          "78%": { transform: "translateY(-100%)", opacity: 1 },
          "89%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
      },
      animation:{
        swap_words:"swap_words 5s linear infinite "
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": { "-ms-overflow-style": "none", "scrollbar-width": "none" },
      });
    },
  ],
};
