"use client";

import { useLang } from "@/components/LanguageProvider";
import { Card, PageHeader } from "@/components/ui";
import { invoices, timeEntries, billingStats, formatAED } from "@/lib/data";

const invStyles: Record<string, string> = {
  paid: "bg-teal-500/10 text-teal-600",
  sent: "bg-blue-500/10 text-blue-600",
  overdue: "bg-red-500/10 text-red-600",
  draft: "bg-ink-900/10 text-ink-700",
};

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-ink-700/60">{label}</div>
      <div className={`mt-2 text-2xl font-bold ${accent ? "text-gold-600" : "text-ink-900"}`}>
        {value}
      </div>
    </Card>
  );
}

export default function BillingPage() {
  const { t, lang } = useLang();
  const b = t.billing;
  const invLabel: Record<string, string> = {
    paid: b.paid,
    sent: b.sent,
    overdue: b.overdue,
    draft: b.draft,
  };

  return (
    <div className="animate-fade-in">
      <PageHeader title={b.title} subtitle={b.subtitle} />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label={b.billed} value={formatAED(billingStats.billed, lang)} />
        <Stat label={b.collected} value={formatAED(billingStats.collected, lang)} />
        <Stat label={b.outstanding} value={formatAED(billingStats.outstanding, lang)} accent />
        <Stat label={b.unbilledHours} value={`${billingStats.unbilledHours.toFixed(1)}`} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <Card className="overflow-hidden lg:col-span-3">
          <div className="border-b border-sand-200 px-5 py-3">
            <h2 className="font-semibold text-ink-900">{b.invoices}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-start text-sm">
              <thead className="bg-sand-100 text-xs uppercase text-ink-700/60">
                <tr>
                  <th className="px-4 py-3 text-start font-semibold">{b.invoice}</th>
                  <th className="px-4 py-3 text-start font-semibold">{t.common.client}</th>
                  <th className="px-4 py-3 text-start font-semibold">{b.amount}</th>
                  <th className="px-4 py-3 text-start font-semibold">{b.due}</th>
                  <th className="px-4 py-3 text-start font-semibold">{t.common.status}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-sand-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-ink-900">{inv.number}</div>
                      <div className="text-xs text-ink-700/50">{inv.matterRef}</div>
                    </td>
                    <td className="px-4 py-3 text-ink-700">{inv.client[lang]}</td>
                    <td className="px-4 py-3 font-medium text-ink-900">
                      {formatAED(inv.amount, lang)}
                    </td>
                    <td className="px-4 py-3 text-ink-700">{inv.due}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${invStyles[inv.status]}`}
                      >
                        {invLabel[inv.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="overflow-hidden lg:col-span-2">
          <div className="border-b border-sand-200 px-5 py-3">
            <h2 className="font-semibold text-ink-900">{b.timeEntries}</h2>
          </div>
          <div className="divide-y divide-sand-200">
            {timeEntries.map((e) => (
              <div key={e.id} className="px-5 py-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-ink-900">{e.task[lang]}</span>
                  <span className="text-sm font-semibold text-gold-600">
                    {e.hours} {b.hours}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center justify-between text-xs text-ink-700/60">
                  <span>
                    {e.lawyer[lang]} · {e.matterRef}
                  </span>
                  <span>{formatAED(e.hours * e.rate, lang)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
