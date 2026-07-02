import Anthropic from "@anthropic-ai/sdk";

// Central Claude client + helpers. When ANTHROPIC_API_KEY is unset, callers
// fall back to deterministic mock output so the prototype always runs.

export const MODEL = "claude-opus-4-8";

export function hasKey(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

let client: Anthropic | null = null;
export function getClient(): Anthropic {
  if (!client) client = new Anthropic();
  return client;
}

// Jurisdiction registry — the platform is multi-jurisdiction by design and
// applies the correct practice directions / guides for the selected system.
export const jurisdictions: Record<
  string,
  { label: { en: string; ar: string }; guide: string }
> = {
  uae: {
    label: { en: "UAE Federal", ar: "الاتحاد الإماراتي" },
    guide:
      "UAE onshore civil-law system. Cite Federal Decree-Laws by number and year. Follow UAE Courts of Cassation practice and Ministry of Justice procedures.",
  },
  difc: {
    label: { en: "DIFC Courts", ar: "محاكم مركز دبي المالي" },
    guide:
      "DIFC common-law free zone. Apply DIFC Laws and the DIFC Courts Rules (RDC). Reference the relevant Practice Directions and English-law precedent where persuasive.",
  },
  adgm: {
    label: { en: "ADGM", ar: "سوق أبوظبي العالمي" },
    guide:
      "ADGM applies English common law directly plus ADGM Regulations. Follow ADGM Courts Procedure Rules and Practice Directions.",
  },
  ksa: {
    label: { en: "Saudi Arabia", ar: "السعودية" },
    guide:
      "KSA Sharia-based system with codified commercial and labour statutes. Follow the relevant Nizam and the Ministry of Justice / SCCA procedures.",
  },
  gcc: {
    label: { en: "GCC (general)", ar: "دول الخليج (عام)" },
    guide:
      "General GCC context. Identify the most likely applicable jurisdiction from the facts and note where laws differ across member states.",
  },
};

export function jurisdictionGuide(key: string): string {
  return (jurisdictions[key] ?? jurisdictions.uae).guide;
}

export type Lang = "en" | "ar";

export function baseSystem(lang: Lang, jurisdiction: string): string {
  const langLine =
    lang === "ar"
      ? "Respond in formal Modern Standard Arabic suitable for legal practice."
      : "Respond in clear professional English suitable for legal practice.";
  return [
    "You are Mizan, an AI legal assistant for law firms in the UAE, GCC and broader Middle East.",
    "You are jurisdiction-aware: apply the correct legal system, courts, and practice directions for the selected jurisdiction.",
    `Selected jurisdiction: ${jurisdictionGuide(jurisdiction)}`,
    "Cite the relevant instrument (law name, number, year, article) whenever you can, and flag when a point should be verified against a primary source.",
    "Never fabricate case citations. If unsure, say so.",
    langLine,
  ].join("\n");
}

// One-shot text completion with graceful fallback.
export async function complete(opts: {
  system: string;
  user: string;
  maxTokens?: number;
  fallback: string;
}): Promise<{ text: string; live: boolean }> {
  if (!hasKey()) {
    return { text: opts.fallback, live: false };
  }
  try {
    const msg = await getClient().messages.create({
      model: MODEL,
      max_tokens: opts.maxTokens ?? 1600,
      system: opts.system,
      messages: [{ role: "user", content: opts.user }],
    });
    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return { text: text || opts.fallback, live: true };
  } catch {
    return { text: opts.fallback, live: false };
  }
}
