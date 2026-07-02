"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dict, Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof dict)["en"];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      window.localStorage.getItem("mizan-lang")) as Lang | null;
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dict[lang].dir;
    if (typeof window !== "undefined")
      window.localStorage.setItem("mizan-lang", lang);
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "en" ? "ar" : "en")),
    t: dict[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
