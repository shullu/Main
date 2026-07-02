"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PageHeader, Card, LiveBadge } from "@/components/ui";
import { JurisdictionSelect } from "@/components/JurisdictionSelect";

export default function LeadsPage() {
  const { t, lang } = useLang();
  const [jur, setJur] = useState("uae");
  const [text, setText] = useState("");
  const [out, setOut] = useState<{ text: string; live: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!text.trim() || loading) return;
    setLoading(true);
    setOut(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enquiry: text, lang, jurisdiction: jur }),
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
        <PageHeader title={t.leads.title} subtitle={t.leads.subtitle} />
        <JurisdictionSelect value={jur} onChange={setJur} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.leads.placeholder}
            rows={12}
            className="w-full resize-none rounded-lg border border-sand-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold-500"
          />
          <button
            onClick={analyze}
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-gold-500 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400 disabled:opacity-50"
          >
            {loading ? t.common.thinking : t.leads.analyze}
          </button>
        </Card>

        <Card className="flex flex-col p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-semibold text-ink-900">{t.leads.triage}</h2>
            {out && <LiveBadge live={out.live} />}
          </div>
          <div className="flex-1 overflow-y-auto rounded-lg bg-sand-50 p-4 text-sm leading-relaxed text-ink-900">
            {out ? (
              <pre className="whitespace-pre-wrap font-sans">{out.text}</pre>
            ) : (
              <span className="text-ink-700/50">{t.leads.empty}</span>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
