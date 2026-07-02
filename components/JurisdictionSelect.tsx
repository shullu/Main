"use client";

import { useLang } from "./LanguageProvider";

const options: { value: string; en: string; ar: string }[] = [
  { value: "uae", en: "UAE Federal", ar: "الاتحاد الإماراتي" },
  { value: "difc", en: "DIFC Courts", ar: "محاكم مركز دبي المالي" },
  { value: "adgm", en: "ADGM", ar: "سوق أبوظبي العالمي" },
  { value: "ksa", en: "Saudi Arabia", ar: "السعودية" },
  { value: "gcc", en: "GCC (general)", ar: "دول الخليج (عام)" },
];

export function JurisdictionSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const { lang } = useLang();
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-ink-700/60">
        {lang === "ar" ? "الاختصاص" : "Jurisdiction"}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-sand-200 bg-white px-3 py-1.5 outline-none focus:border-gold-500"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {lang === "ar" ? o.ar : o.en}
          </option>
        ))}
      </select>
    </label>
  );
}
