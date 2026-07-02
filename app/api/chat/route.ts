import { NextRequest, NextResponse } from "next/server";
import { baseSystem, complete } from "@/lib/anthropic";

export async function POST(req: NextRequest) {
  const { question, lang = "en", jurisdiction = "uae" } = await req.json();

  const fallback =
    lang === "ar"
      ? `(رد تجريبي — لم يتم ضبط مفتاح Claude API)\n\nبخصوص سؤالك، من المرجح تطبيق الأحكام ذات الصلة في الاختصاص المحدد. للحصول على إجابة مباشرة ومدعومة بالمراجع، يرجى ضبط ANTHROPIC_API_KEY في البيئة.\n\nمثال على البنية المتوقعة:\n• القاعدة القانونية\n• المصدر (رقم القانون والمادة)\n• التطبيق على وقائعك\n• ما يجب التحقق منه`
      : `(Demo response — no Claude API key configured)\n\nFor "${question}", Mizan would apply the relevant instruments for the selected jurisdiction, cite the governing law (name, number, article), apply it to your facts, and flag what to verify against primary sources.\n\nSet ANTHROPIC_API_KEY in the environment to get live, citation-backed answers from Claude.`;

  const { text, live } = await complete({
    system: baseSystem(lang, jurisdiction),
    user: question,
    maxTokens: 1200,
    fallback,
  });

  return NextResponse.json({ text, live });
}
