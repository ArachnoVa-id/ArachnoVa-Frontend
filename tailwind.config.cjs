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
        page: "#F8FAFC",
        surface: "#FFFFFF",
        ink: "#0F172A",
        inkLight: "#475569",
        inkMuted: "#94A3B8",
        teal: "#0891B2",
        tealDark: "#0E7490",
        tealLight: "#22D3EE",
        amber: "#F59E0B",
        amberLight: "#FBBF24",
        border: "#E2E8F0",
        borderLight: "#F1F5F9",
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
