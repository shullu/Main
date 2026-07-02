"use client";

import { useLang } from "@/components/LanguageProvider";
import { Card, PageHeader } from "@/components/ui";
import { clients } from "@/lib/data";

export default function ClientsPage() {
  const { t, lang } = useLang();

  return (
    <div className="animate-fade-in">
      <PageHeader title={t.clients.title} subtitle={t.clients.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c) => (
          <Card key={c.id} className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-lg font-semibold text-gold-400">
                {c.name[lang].charAt(0)}
              </div>
              <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-semibold text-ink-700">
                {c.type === "corporate"
                  ? lang === "ar"
                    ? "شركة"
                    : "Corporate"
                  : lang === "ar"
                    ? "فرد"
                    : "Individual"}
              </span>
            </div>
            <div className="mt-3 font-semibold text-ink-900">{c.name[lang]}</div>
            <div className="text-sm text-ink-700/60">{c.emirate[lang]}</div>
            <div className="mt-4 flex items-center justify-between border-t border-sand-200 pt-3 text-sm">
              <span className="text-ink-700/70">
                {c.matters} {lang === "ar" ? "قضية" : "matters"}
              </span>
              <span className="text-ink-700/50">
                {lang === "ar" ? "عميل منذ" : "since"} {c.since}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
