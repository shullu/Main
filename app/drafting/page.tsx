"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PageHeader, Card, LiveBadge } from "@/components/ui";
import { JurisdictionSelect } from "@/components/JurisdictionSelect";

export default function DraftingPage() {
  const { t, lang } = useLang();
  const [jur, setJur] = useState("uae");
  const [docType, setDocType] = useState<string>(t.drafting.types[0]);
  const [details, setDetails] = useState("");
  const [out, setOut] = useState<{ text: string; live: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (loading) return;
    setLoading(true);
    setOut(null);
    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docType, details, lang, jurisdiction: jur }),
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
        <PageHeader title={t.drafting.title} subtitle={t.drafting.subtitle} />
        <JurisdictionSelect value={jur} onChange={setJur} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <label className="block text-sm font-medium text-ink-800">
            {t.drafting.docType}
          </label>
          <select
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-sand-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold-500"
          >
            {t.drafting.types.map((ty) => (
              <option key={ty} value={ty}>
                {ty}
              </option>
            ))}
          </select>

          <label className="mt-4 block text-sm font-medium text-ink-800">
            {t.drafting.details}
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={t.drafting.detailsPlaceholder}
            rows={8}
            className="mt-1.5 w-full resize-none rounded-lg border border-sand-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold-500"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-gold-500 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400 disabled:opacity-50"
          >
            {loading ? t.common.thinking : t.common.generate}
          </button>
        </Card>

        <Card className="flex flex-col p-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-semibold text-ink-900">{t.drafting.generated}</h2>
            {out && <LiveBadge live={out.live} />}
          </div>
          <div className="flex-1 overflow-y-auto rounded-lg bg-sand-50 p-4 text-sm leading-relaxed text-ink-900">
            {out ? (
              <pre className="whitespace-pre-wrap font-sans">{out.text}</pre>
            ) : (
              <span className="text-ink-700/50">{t.drafting.empty}</span>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
