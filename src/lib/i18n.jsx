import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Site language: English by default, Indonesian on request. Remembered per visitor.
const KEY = "av-lang";
const LangContext = createContext({ lang: "en", setLang: () => {} });

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch { /* storage blocked: fall back to the default */ }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* not persisted, still switches */ }
  }, []);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// t({ en, id }) -> the string for the current language (falls back to English).
export function useT() {
  const { lang } = useContext(LangContext);
  return useCallback((pair) => (pair && typeof pair === "object" ? pair[lang] ?? pair.en : pair), [lang]);
}

// A CMS field with an optional English/Indonesian twin: goal / goalEn, description / descriptionEn.
// Content entered in Indonesian is the base; the English twin is used when the site is in English.
export function useField() {
  const { lang } = useContext(LangContext);
  return useCallback((obj, field) => {
    if (!obj) return "";
    if (lang === "en") return obj[`${field}En`] || obj[field] || "";
    return obj[field] || obj[`${field}En`] || "";
  }, [lang]);
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="w-[20px] h-[14px] rounded-[2px] shadow-sm" aria-hidden="true">
      <clipPath id="gbc"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <clipPath id="gbt"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
      <g clipPath="url(#gbc)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gbt)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagID() {
  return (
    <svg viewBox="0 0 3 2" className="w-[20px] h-[14px] rounded-[2px] shadow-sm ring-1 ring-gray-200" aria-hidden="true">
      <rect width="3" height="1" fill="#CE1126" />
      <rect y="1" width="3" height="1" fill="#fff" />
    </svg>
  );
}

// Two-option switch with flags; the active language is highlighted.
export function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLang();
  const opt = (code, Flag, label) => (
    <button type="button" onClick={() => setLang(code)} aria-pressed={lang === code} aria-label={label}
      className={`flex items-center gap-1.5 px-2.5 h-[32px] rounded-full text-[12px] font-bold transition ${lang === code ? "bg-white text-neutral-g shadow-sm" : "text-gray-500 hover:text-neutral-g"}`}>
      <Flag /> {code.toUpperCase()}
    </button>
  );
  return (
    <div role="group" aria-label="Language" className={`inline-flex items-center gap-0.5 p-0.5 rounded-full bg-gray-100 border border-gray-200 ${className}`}>
      {opt("en", FlagGB, "English")}
      {opt("id", FlagID, "Bahasa Indonesia")}
    </div>
  );
}
