import { NextRequest, NextResponse } from "next/server";
import { baseSystem, complete } from "@/lib/anthropic";
import { lawLibrary } from "@/lib/data";

export async function POST(req: NextRequest) {
  const { query, lang = "en", jurisdiction = "uae" } = await req.json();

  // Ground the model in the (demo) library corpus.
  const corpus = lawLibrary
    .map((l) => `- ${l.citation}: ${l.title.en} — ${l.summary.en}`)
    .join("\n");

  const system =
    baseSystem(lang, jurisdiction) +
    "\nYou are a legal research engine performing semantic search. Return the most relevant instruments and principles for the query, each with: the instrument name/number, why it is relevant, and a one-line application note. Prefer sources from the provided library where they fit, and clearly label anything outside it that should be verified.\n\nLibrary excerpt:\n" +
    corpus;

  const fallback =
    lang === "ar"
      ? `(نتائج تجريبية — لم يتم ضبط مفتاح Claude API)\n\nأكثر المصادر صلة بـ "${query}":\n\n• المرسوم بقانون اتحادي رقم ٣٣ لسنة ٢٠٢١ (قانون العمل) — إن كانت المسألة تتعلق بعلاقات العمل.\n• قانون الشركات التجارية رقم ٣٢ لسنة ٢٠٢١ — للمسائل المتعلقة بالشركات.\n\nاضبط ANTHROPIC_API_KEY للبحث الدلالي الكامل عبر المكتبة القانونية.`
      : `(Demo results — no Claude API key configured)\n\nMost relevant sources for "${query}":\n\n• Federal Decree-Law No. 33 of 2021 (Labour Law) — if the issue concerns employment.\n• Commercial Companies Law No. 32 of 2021 — for corporate matters.\n• Arbitration Law No. 6 of 2018 — where a dispute-resolution clause is engaged.\n\nSet ANTHROPIC_API_KEY for full semantic search across the law library with citations.`;

  const { text, live } = await complete({
    system,
    user: query,
    maxTokens: 1500,
    fallback,
  });

  return NextResponse.json({ text, live });
}
