"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { Card, PageHeader } from "@/components/ui";
import { lawLibrary } from "@/lib/data";

export default function LibraryPage() {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");
  const [jur, setJur] = useState<string>("all");

  const jurisdictions = useMemo(
    () => Array.from(new Set(lawLibrary.map((l) => l.jurisdiction))),
    []
  );

  const filtered = lawLibrary.filter((l) => {
    const matchesJur = jur === "all" || l.jurisdiction === jur;
    const hay = (
      l.title.en +
      l.title.ar +
      l.citation +
      l.summary.en +
      l.summary.ar
    ).toLowerCase();
    return matchesJur && hay.includes(q.toLowerCase());
  });

  return (
    <div className="animate-fade-in">
      <PageHeader title={t.library.title} subtitle={t.library.subtitle} />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.common.search}
          className="min-w-[220px] flex-1 rounded-lg border border-sand-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold-500"
        />
        <select
          value={jur}
          onChange={(e) => setJur(e.target.value)}
          className="rounded-lg border border-sand-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold-500"
        >
          <option value="all">{t.library.all}</option>
          {jurisdictions.map((j) => (
            <option key={j} value={j}>
              {j}
            </option>
          ))}
        </select>
        <span className="text-sm text-ink-700/60">
          {filtered.length} {t.library.count}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((l) => (
          <Card key={l.id} className="border-inline-start border-gold-500 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-ink-900/5 px-2.5 py-0.5 text-xs font-semibold text-ink-700">
                {l.jurisdiction}
              </span>
              <span className="text-xs text-ink-700/50">{l.category[lang]}</span>
            </div>
            <h3 className="mt-2 font-semibold text-ink-900">{l.title[lang]}</h3>
            <div className="text-xs font-medium text-gold-600">{l.citation}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/80">
              {l.summary[lang]}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
