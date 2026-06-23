/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
        // BG Color
        "white-MainPage": "#F8FAFC",
        // Neutral Color
        "neutral-a": "#FAFDFF",
        "neutral-b": "#C3D4DB",
        "neutral-c": "#9CADB4",
        "neutral-d": "#75868D",
        "neutral-e": "#4E5F66",
        "neutral-f": "#27383F",
        "neutral-g": "#001118",
        // Light Blue Color
        "LightBlue-a": "#84D4E1",
        "LightBlue-b": "#2EC1D9",
        "LightBlue-c": "#1AB0C8",
        "LightBlue-d": "#179FB5",
        "LightBlue-e": "#158B9E",
      },
      keyframes: {
      },
      animation:{
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
