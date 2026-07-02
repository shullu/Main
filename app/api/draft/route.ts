import { NextRequest, NextResponse } from "next/server";
import { baseSystem, complete } from "@/lib/anthropic";

export async function POST(req: NextRequest) {
  const { docType, details, lang = "en", jurisdiction = "uae" } = await req.json();

  const system =
    baseSystem(lang, jurisdiction) +
    "\nYou are drafting a legal document. Produce a clean, professional first draft with numbered clauses, bracketed placeholders like [PARTY NAME] for missing details, and a governing-law/jurisdiction clause appropriate to the selection. Add a short note listing which details still need confirming.";

  const user = `Draft a "${docType}".\nKey details / instructions:\n${details || "(none provided — use sensible standard terms and placeholders)"}`;

  const fallback =
    lang === "ar"
      ? `(مسودة تجريبية — لم يتم ضبط مفتاح Claude API)\n\n${docType}\n\n١. الأطراف: [الطرف الأول] و [الطرف الثاني].\n٢. الموضوع: [بيان الغرض].\n٣. المدة: [المدة].\n٤. المقابل: [القيمة] درهم إماراتي.\n٥. القانون الحاكم: يخضع هذا العقد لقوانين الاختصاص المحدد.\n٦. تسوية النزاعات: [المحكمة/التحكيم المختص].\n\nملاحظة: اضبط ANTHROPIC_API_KEY للحصول على مسودة كاملة ومخصصة من Claude.`
      : `(Demo draft — no Claude API key configured)\n\n${docType.toUpperCase()}\n\n1. Parties. This agreement is between [PARTY A] and [PARTY B].\n2. Subject matter. [Describe purpose].\n3. Term. [Start date] to [end date].\n4. Consideration. AED [amount].\n5. Governing law. This agreement is governed by the law of the selected jurisdiction.\n6. Dispute resolution. [Competent court / arbitral body].\n7. Signatures. ______________  ______________\n\nDetails to confirm: parties' legal names, commercial terms, and any special clauses.\n\nSet ANTHROPIC_API_KEY to generate a complete, tailored draft with Claude.`;

  const { text, live } = await complete({
    system,
    user,
    maxTokens: 2200,
    fallback,
  });

  return NextResponse.json({ text, live });
}
