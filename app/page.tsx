"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { Card, StatusBadge } from "@/components/ui";
import { matters, stats, formatAED } from "@/lib/data";

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <Card className="p-5">
      <div className="text-sm text-ink-700/60">{label}</div>
      <div
        className={`mt-2 text-2xl font-bold ${
          accent ? "text-gold-600" : "text-ink-900"
        }`}
      >
        {value}
      </div>
    </Card>
  );
}

export default function Dashboard() {
  const { t, lang } = useLang();
  const statusLabels: Record<string, string> =
    lang === "ar"
      ? { active: "نشطة", hearing: "جلسة", review: "مراجعة", closed: "مغلقة" }
      : { active: "Active", hearing: "Hearing", review: "Review", closed: "Closed" };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-ink-900">{t.dashboard.welcome}</h1>
        <p className="mt-1 text-sm text-ink-700/70">{t.dashboard.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label={t.dashboard.activeMatters} value={String(stats.activeMatters)} />
        <Stat label={t.dashboard.billableHours} value={String(stats.billableHours)} />
        <Stat label={t.dashboard.pendingHearings} value={String(stats.hearings)} accent />
        <Stat
          label={t.dashboard.openInvoices}
          value={formatAED(stats.outstanding, lang)}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between border-b border-sand-200 px-5 py-3">
            <h2 className="font-semibold text-ink-900">
              {t.dashboard.recentMatters}
            </h2>
            <Link
              href="/matters"
              className="text-sm font-medium text-gold-600 hover:underline"
            >
              {t.common.viewAll}
            </Link>
          </div>
          <div className="divide-y divide-sand-200">
            {matters.slice(0, 5).map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between gap-4 px-5 py-3"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium text-ink-900">
                    {m.title[lang]}
                  </div>
                  <div className="text-xs text-ink-700/60">
                    {m.ref} · {m.jurisdiction[lang]}
                  </div>
                </div>
                <StatusBadge status={m.status} label={statusLabels[m.status]} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-gold-500/40 bg-gradient-to-br from-ink-900 to-ink-800 text-white">
          <div className="p-5">
            <div className="flex items-center gap-2 text-gold-400">
              <span className="text-lg">✦</span>
              <h2 className="font-semibold">{t.dashboard.aiBrief}</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/85">
              {t.dashboard.aiBriefBody}
            </p>
            <Link
              href="/assistant"
              className="mt-4 inline-block rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-gold-400"
            >
              {t.nav.assistant} →
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
