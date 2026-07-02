import { NextRequest, NextResponse } from "next/server";
import { baseSystem, complete } from "@/lib/anthropic";

export async function POST(req: NextRequest) {
  const { enquiry, lang = "en", jurisdiction = "uae" } = await req.json();

  const system =
    baseSystem(lang, jurisdiction) +
    "\nYou are triaging an inbound client enquiry for a law firm. Output, using clear headings:\n1. Practice area\n2. Lead score (High / Medium / Low) with a one-line reason\n3. Urgency\n4. Key facts extracted\n5. A short, professional suggested first reply the lawyer can send.\nBe concise and practical.";

  const fallback =
    lang === "ar"
      ? `(تحليل تجريبي — لم يتم ضبط مفتاح Claude API)\n\n١. مجال الممارسة: يُرجّح أنه نزاع تجاري / علاقات عمل.\n٢. تقييم العميل المحتمل: مرتفع — يتضمن الاستفسار أطرافاً تجارية وقيمة محتملة.\n٣. الإلحاح: متوسط.\n٤. الوقائع الأساسية: [تُستخرج تلقائياً من النص].\n٥. رد مقترح: "شكراً لتواصلكم مع المكتب. بناءً على ما ورد، يسعدنا تحديد استشارة أولية لمراجعة مركزكم القانوني والخيارات المتاحة."\n\nاضبط ANTHROPIC_API_KEY للفرز والتقييم الكامل من Claude.`
      : `(Demo triage — no Claude API key configured)\n\n1. Practice area: likely commercial dispute / employment.\n2. Lead score: High — corporate parties and a quantifiable claim suggest strong value.\n3. Urgency: Medium.\n4. Key facts: [auto-extracted from the enquiry text].\n5. Suggested reply: "Thank you for contacting the firm. Based on what you've described, we'd be glad to arrange an initial consultation to review your position and the options available under the applicable law."\n\nSet ANTHROPIC_API_KEY for full triage, scoring and a tailored reply from Claude.`;

  const { text, live } = await complete({
    system,
    user: enquiry,
    maxTokens: 1200,
    fallback,
  });

  return NextResponse.json({ text, live });
}
