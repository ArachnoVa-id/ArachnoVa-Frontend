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
        "neutral-a": "#FFFFFF",
        "neutral-b": "#E2E8F0",
        "neutral-c": "#94A3B8",
        "neutral-d": "#64748B",
        "neutral-e": "#475569",
        "neutral-f": "#1E293B",
        "neutral-g": "#0F172A",
        "LightBlue-a": "#A78BFA",
        "LightBlue-b": "#8B5CF6",
        "LightBlue-c": "#7C3AED",
        "LightBlue-d": "#6D28D9",
        "LightBlue-e": "#5B21B6",
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
