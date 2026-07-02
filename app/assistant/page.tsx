"use client";

import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { PageHeader, LiveBadge } from "@/components/ui";
import { JurisdictionSelect } from "@/components/JurisdictionSelect";

type Msg = { role: "user" | "assistant"; content: string; live?: boolean };

export default function AssistantPage() {
  const { t, lang } = useLang();
  const [jur, setJur] = useState("uae");
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);

  async function ask(question: string) {
    if (!question.trim() || loading) return;
    setMsgs((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, lang, jurisdiction: jur }),
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: data.text, live: data.live },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: "Error contacting the assistant.", live: false },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const starters = [t.assistant.starter1, t.assistant.starter2, t.assistant.starter3];

  return (
    <div className="animate-fade-in flex h-[calc(100vh-9rem)] flex-col">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <PageHeader title={t.assistant.title} subtitle={t.assistant.subtitle} />
        <JurisdictionSelect value={jur} onChange={setJur} />
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-xl border border-sand-200 bg-white p-5">
        {msgs.length === 0 && (
          <div className="flex flex-col gap-2">
            {starters.map((s) => (
              <button
                key={s}
                onClick={() => ask(s)}
                className="rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-start text-sm text-ink-800 transition hover:border-gold-500"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
              m.role === "user"
                ? "ms-auto bg-ink-900 text-white"
                : "me-auto bg-sand-100 text-ink-900"
            }`}
          >
            {m.role === "assistant" && (
              <div className="mb-1.5">
                <LiveBadge live={!!m.live} />
              </div>
            )}
            <div className="whitespace-pre-wrap">{m.content}</div>
          </div>
        ))}
        {loading && (
          <div className="me-auto rounded-xl bg-sand-100 px-4 py-3 text-sm text-ink-700/60">
            {t.common.thinking}
          </div>
        )}
      </div>

      <p className="mt-2 text-xs text-ink-700/50">{t.assistant.disclaimer}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="mt-2 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.assistant.placeholder}
          className="flex-1 rounded-lg border border-sand-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-gold-400 disabled:opacity-50"
        >
          {t.common.send}
        </button>
      </form>
    </div>
  );
}
