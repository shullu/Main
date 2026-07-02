"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PageHeader, Card, LiveBadge } from "@/components/ui";
import { JurisdictionSelect } from "@/components/JurisdictionSelect";

export default function CaseLawPage() {
  const { t, lang } = useLang();
  const [jur, setJur] = useState("uae");
  const [q, setQ] = useState("");
  const [out, setOut] = useState<{ text: string; live: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function search() {
    if (!q.trim() || loading) return;
    setLoading(true);
    setOut(null);
    try {
      const res = await fetch("/api/caselaw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, lang, jurisdiction: jur }),
      });
      const data = await res.json();
      setOut({ text: data.text, live: data.live });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <PageHeader title={t.caselaw.title} subtitle={t.caselaw.subtitle} />
        <JurisdictionSelect value={jur} onChange={setJur} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        className="mb-5 flex gap-2"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.caselaw.placeholder}
          className="flex-1 rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400 disabled:opacity-50"
        >
          {t.common.search}
        </button>
      </form>

      <Card className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-semibold text-ink-900">{t.caselaw.results}</h2>
          {out && <LiveBadge live={out.live} />}
        </div>
        <div className="min-h-[200px] rounded-lg bg-sand-50 p-4 text-sm leading-relaxed text-ink-900">
          {loading ? (
            <span className="text-ink-700/60">{t.common.thinking}</span>
          ) : out ? (
            <pre className="whitespace-pre-wrap font-sans">{out.text}</pre>
          ) : (
            <span className="text-ink-700/50">{t.caselaw.empty}</span>
          )}
        </div>
      </Card>
    </div>
  );
}
