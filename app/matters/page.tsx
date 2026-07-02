"use client";

import { useLang } from "@/components/LanguageProvider";
import { Card, PageHeader, StatusBadge } from "@/components/ui";
import { matters, formatAED } from "@/lib/data";

export default function MattersPage() {
  const { t, lang } = useLang();
  const statusLabels: Record<string, string> =
    lang === "ar"
      ? { active: "نشطة", hearing: "جلسة", review: "مراجعة", closed: "مغلقة" }
      : { active: "Active", hearing: "Hearing", review: "Review", closed: "Closed" };

  return (
    <div className="animate-fade-in">
      <PageHeader title={t.matters.title} subtitle={t.matters.subtitle} />
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-sm">
            <thead className="bg-sand-100 text-xs uppercase text-ink-700/60">
              <tr>
                <th className="px-4 py-3 text-start font-semibold">{t.nav.matters}</th>
                <th className="px-4 py-3 text-start font-semibold">{t.common.client}</th>
                <th className="px-4 py-3 text-start font-semibold">
                  {t.common.jurisdiction}
                </th>
                <th className="px-4 py-3 text-start font-semibold">{t.common.value}</th>
                <th className="px-4 py-3 text-start font-semibold">
                  {t.common.nextHearing}
                </th>
                <th className="px-4 py-3 text-start font-semibold">{t.common.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-200">
              {matters.map((m) => (
                <tr key={m.id} className="hover:bg-sand-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink-900">{m.title[lang]}</div>
                    <div className="text-xs text-ink-700/50">{m.ref}</div>
                  </td>
                  <td className="px-4 py-3 text-ink-700">{m.client[lang]}</td>
                  <td className="px-4 py-3 text-ink-700">{m.jurisdiction[lang]}</td>
                  <td className="px-4 py-3 font-medium text-ink-900">
                    {formatAED(m.value, lang)}
                  </td>
                  <td className="px-4 py-3 text-ink-700">
                    {m.nextHearing ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={m.status} label={statusLabels[m.status]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
