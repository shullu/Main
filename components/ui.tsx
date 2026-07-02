"use client";

import { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-ink-900">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-ink-700/70">{subtitle}</p>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-sand-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

const statusStyles: Record<string, string> = {
  active: "bg-teal-500/10 text-teal-600",
  hearing: "bg-gold-500/15 text-gold-600",
  review: "bg-blue-500/10 text-blue-600",
  closed: "bg-ink-900/10 text-ink-700",
};

export function StatusBadge({ status, label }: { status: string; label: string }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        statusStyles[status] ?? "bg-sand-200 text-ink-800"
      }`}
    >
      {label}
    </span>
  );
}

export function LiveBadge({ live }: { live: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
        live ? "bg-teal-500/10 text-teal-600" : "bg-sand-200 text-ink-700/70"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-teal-500" : "bg-ink-700/40"
        }`}
      />
      {live ? "Claude (live)" : "Demo response"}
    </span>
  );
}
