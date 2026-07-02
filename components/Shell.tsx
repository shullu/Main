"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useLang } from "./LanguageProvider";

function NavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-gold-500/15 text-gold-600"
          : "text-sand-100/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="text-lg leading-none">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const { t, toggle, lang } = useLang();
  const path = usePathname();

  const nav = [
    { href: "/", label: t.nav.dashboard, icon: "▦" },
    { href: "/matters", label: t.nav.matters, icon: "⚖" },
    { href: "/clients", label: t.nav.clients, icon: "👥" },
    { href: "/assistant", label: t.nav.assistant, icon: "✦" },
    { href: "/drafting", label: t.nav.drafting, icon: "✎" },
    { href: "/caselaw", label: t.nav.caselaw, icon: "🔎" },
    { href: "/library", label: t.nav.library, icon: "📚" },
    { href: "/billing", label: t.nav.billing, icon: "﷼" },
    { href: "/leads", label: t.nav.leads, icon: "⇲" },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 flex-col bg-ink-900 md:flex">
        <div className="flex items-center gap-2 px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 font-bold text-ink-900">
            ⚖
          </div>
          <div>
            <div className="text-lg font-bold text-white">{t.appName}</div>
            <div className="text-[10px] leading-tight text-sand-100/50">
              {lang === "ar" ? "منصة قانونية ذكية" : "AI Legal Platform"}
            </div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
          {nav.map((n) => (
            <NavItem
              key={n.href}
              {...n}
              active={n.href === "/" ? path === "/" : path.startsWith(n.href)}
            />
          ))}
        </nav>
        <div className="px-4 py-4 text-[11px] text-sand-100/40">
          {t.common.poweredBy}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-sand-200 bg-sand-50/80 px-5 py-3 backdrop-blur">
          <div className="text-sm text-ink-700/70">{t.tagline}</div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="rounded-full border border-sand-200 bg-white px-3 py-1.5 text-sm font-semibold text-ink-800 transition hover:border-gold-500 hover:text-gold-600"
            >
              {t.common.language}
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-semibold text-white">
              MK
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
