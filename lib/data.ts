// Demo data for the Mizan prototype. Bilingual fields (en/ar) throughout.

export type Bi = { en: string; ar: string };

export type Matter = {
  id: string;
  ref: string;
  title: Bi;
  client: Bi;
  practice: Bi;
  jurisdiction: Bi;
  status: "active" | "hearing" | "review" | "closed";
  value: number; // AED
  nextHearing?: string;
};

export type Client = {
  id: string;
  name: Bi;
  type: "individual" | "corporate";
  emirate: Bi;
  matters: number;
  since: string;
};

export type Law = {
  id: string;
  citation: string;
  title: Bi;
  jurisdiction: "UAE Federal" | "DIFC" | "ADGM" | "Dubai" | "GCC" | "KSA";
  category: Bi;
  year: number;
  summary: Bi;
};

export const matters: Matter[] = [
  {
    id: "m1",
    ref: "MZ-2024-0142",
    title: { en: "Al Futtaim v. Reef — DIFC contract dispute", ar: "الفطيم ضد ريف — نزاع عقد مركز دبي المالي" },
    client: { en: "Al Futtaim Group", ar: "مجموعة الفطيم" },
    practice: { en: "Commercial litigation", ar: "التقاضي التجاري" },
    jurisdiction: { en: "DIFC Courts", ar: "محاكم مركز دبي المالي" },
    status: "hearing",
    value: 4200000,
    nextHearing: "2026-07-06",
  },
  {
    id: "m2",
    ref: "MZ-2024-0138",
    title: { en: "Emirates Steel — supply agreement review", ar: "إمارات للحديد — مراجعة اتفاقية توريد" },
    client: { en: "Emirates Steel Arkan", ar: "إمارات للحديد أركان" },
    practice: { en: "Corporate & commercial", ar: "الشركات والتجاري" },
    jurisdiction: { en: "UAE Federal", ar: "الاتحاد الإماراتي" },
    status: "review",
    value: 1850000,
  },
  {
    id: "m3",
    ref: "MZ-2024-0151",
    title: { en: "Al Habtoor — construction arbitration", ar: "الحبتور — تحكيم إنشاءات" },
    client: { en: "Al Habtoor Group", ar: "مجموعة الحبتور" },
    practice: { en: "Construction & arbitration", ar: "الإنشاءات والتحكيم" },
    jurisdiction: { en: "DIAC Arbitration", ar: "تحكيم مركز دبي" },
    status: "active",
    value: 9600000,
    nextHearing: "2026-07-14",
  },
  {
    id: "m4",
    ref: "MZ-2024-0129",
    title: { en: "Noor Bank — employment termination", ar: "بنك نور — إنهاء علاقة عمل" },
    client: { en: "Noor Bank PJSC", ar: "بنك نور ش.م.ع" },
    practice: { en: "Employment", ar: "علاقات العمل" },
    jurisdiction: { en: "Dubai Courts", ar: "محاكم دبي" },
    status: "active",
    value: 320000,
    nextHearing: "2026-07-09",
  },
  {
    id: "m5",
    ref: "MZ-2024-0117",
    title: { en: "Reem Investments — ADGM fund setup", ar: "ريم للاستثمار — تأسيس صندوق في سوق أبوظبي" },
    client: { en: "Reem Investments LLC", ar: "ريم للاستثمار ذ.م.م" },
    practice: { en: "Financial services", ar: "الخدمات المالية" },
    jurisdiction: { en: "ADGM", ar: "سوق أبوظبي العالمي" },
    status: "active",
    value: 2750000,
  },
  {
    id: "m6",
    ref: "MZ-2023-0402",
    title: { en: "Gargash Enterprises — trademark filing", ar: "مؤسسة قرقاش — تسجيل علامة تجارية" },
    client: { en: "Gargash Enterprises", ar: "مؤسسة قرقاش" },
    practice: { en: "Intellectual property", ar: "الملكية الفكرية" },
    jurisdiction: { en: "UAE Ministry of Economy", ar: "وزارة الاقتصاد" },
    status: "closed",
    value: 95000,
  },
];

export const clients: Client[] = [
  { id: "c1", name: { en: "Al Futtaim Group", ar: "مجموعة الفطيم" }, type: "corporate", emirate: { en: "Dubai", ar: "دبي" }, matters: 7, since: "2019" },
  { id: "c2", name: { en: "Emirates Steel Arkan", ar: "إمارات للحديد أركان" }, type: "corporate", emirate: { en: "Abu Dhabi", ar: "أبوظبي" }, matters: 3, since: "2021" },
  { id: "c3", name: { en: "Al Habtoor Group", ar: "مجموعة الحبتور" }, type: "corporate", emirate: { en: "Dubai", ar: "دبي" }, matters: 5, since: "2018" },
  { id: "c4", name: { en: "Noor Bank PJSC", ar: "بنك نور ش.م.ع" }, type: "corporate", emirate: { en: "Dubai", ar: "دبي" }, matters: 2, since: "2022" },
  { id: "c5", name: { en: "Reem Investments LLC", ar: "ريم للاستثمار ذ.م.م" }, type: "corporate", emirate: { en: "Abu Dhabi", ar: "أبوظبي" }, matters: 4, since: "2020" },
  { id: "c6", name: { en: "Fatima Al Mansoori", ar: "فاطمة المنصوري" }, type: "individual", emirate: { en: "Sharjah", ar: "الشارقة" }, matters: 1, since: "2024" },
];

// A seed of the bilingual law library. In production this is a full,
// continuously-updated corpus; here it is a representative sample used by
// the Library page and the AI case-law search.
export const lawLibrary: Law[] = [
  {
    id: "l1",
    citation: "Federal Decree-Law No. 33 of 2021",
    title: { en: "UAE Labour Law", ar: "قانون تنظيم علاقات العمل" },
    jurisdiction: "UAE Federal",
    category: { en: "Employment", ar: "العمل" },
    year: 2021,
    summary: {
      en: "Governs private-sector employment: contract types, working hours, leave, end-of-service gratuity and termination. Replaced Federal Law No. 8 of 1980.",
      ar: "ينظّم علاقات العمل في القطاع الخاص: أنواع العقود وساعات العمل والإجازات ومكافأة نهاية الخدمة والإنهاء. حلّ محل القانون الاتحادي رقم ٨ لسنة ١٩٨٠.",
    },
  },
  {
    id: "l2",
    citation: "Federal Decree-Law No. 32 of 2021",
    title: { en: "Commercial Companies Law", ar: "قانون الشركات التجارية" },
    jurisdiction: "UAE Federal",
    category: { en: "Corporate", ar: "الشركات" },
    year: 2021,
    summary: {
      en: "Framework for onshore companies: LLCs, PJSCs, governance, share capital and 100% foreign ownership reforms.",
      ar: "الإطار المنظّم للشركات: ذات المسؤولية المحدودة والمساهمة العامة والحوكمة ورأس المال وإصلاحات التملّك الأجنبي الكامل.",
    },
  },
  {
    id: "l3",
    citation: "Federal Decree-Law No. 50 of 2022",
    title: { en: "Commercial Transactions Law", ar: "قانون المعاملات التجارية" },
    jurisdiction: "UAE Federal",
    category: { en: "Commercial", ar: "التجاري" },
    year: 2022,
    summary: {
      en: "Modernised commercial code covering trade obligations, commercial paper, banking operations and bankruptcy interplay.",
      ar: "قانون تجاري محدّث يشمل الالتزامات التجارية والأوراق التجارية والعمليات المصرفية وتقاطعها مع الإفلاس.",
    },
  },
  {
    id: "l4",
    citation: "Federal Decree-Law No. 47 of 2022",
    title: { en: "Corporate Tax Law", ar: "قانون ضريبة الشركات" },
    jurisdiction: "UAE Federal",
    category: { en: "Tax", ar: "الضرائب" },
    year: 2022,
    summary: {
      en: "Introduces a 9% federal corporate tax on business profits above AED 375,000, effective for financial years from June 2023.",
      ar: "يفرض ضريبة اتحادية على الشركات بنسبة ٩٪ على الأرباح التي تتجاوز ٣٧٥٬٠٠٠ درهم، اعتباراً من السنوات المالية من يونيو ٢٠٢٣.",
    },
  },
  {
    id: "l5",
    citation: "Federal Decree-Law No. 45 of 2021",
    title: { en: "Personal Data Protection Law (PDPL)", ar: "قانون حماية البيانات الشخصية" },
    jurisdiction: "UAE Federal",
    category: { en: "Data protection", ar: "حماية البيانات" },
    year: 2021,
    summary: {
      en: "First federal data-protection regime: lawful bases for processing, data-subject rights, cross-border transfer rules and consent.",
      ar: "أول إطار اتحادي لحماية البيانات: الأسس المشروعة للمعالجة وحقوق أصحاب البيانات وقواعد النقل عبر الحدود والموافقة.",
    },
  },
  {
    id: "l6",
    citation: "DIFC Law No. 6 of 2020",
    title: { en: "DIFC Data Protection Law", ar: "قانون حماية البيانات بمركز دبي المالي" },
    jurisdiction: "DIFC",
    category: { en: "Data protection", ar: "حماية البيانات" },
    year: 2020,
    summary: {
      en: "GDPR-aligned regime for the DIFC free zone, with its own Commissioner, accountability duties and international transfer mechanisms.",
      ar: "إطار متوافق مع اللائحة الأوروبية لمنطقة مركز دبي المالي، بمفوّض مستقل وواجبات مساءلة وآليات نقل دولية.",
    },
  },
  {
    id: "l7",
    citation: "DIFC Law No. 2 of 2019",
    title: { en: "DIFC Employment Law", ar: "قانون العمل بمركز دبي المالي" },
    jurisdiction: "DIFC",
    category: { en: "Employment", ar: "العمل" },
    year: 2019,
    summary: {
      en: "Self-contained employment regime for DIFC entities: end-of-service via DEWS, penalties for late payment, discrimination protections.",
      ar: "نظام عمل مستقل لكيانات مركز دبي المالي: نهاية الخدمة عبر نظام دِوس وغرامات التأخير وحماية من التمييز.",
    },
  },
  {
    id: "l8",
    citation: "ADGM Companies Regulations 2020",
    title: { en: "ADGM Companies Regulations", ar: "لوائح الشركات بسوق أبوظبي العالمي" },
    jurisdiction: "ADGM",
    category: { en: "Corporate", ar: "الشركات" },
    year: 2020,
    summary: {
      en: "English-law-based company framework for ADGM, including SPVs, tech-startup licences and restructuring tools.",
      ar: "إطار للشركات مبني على القانون الإنجليزي لسوق أبوظبي، يشمل الشركات ذات الغرض الخاص وتراخيص الشركات الناشئة وأدوات إعادة الهيكلة.",
    },
  },
  {
    id: "l9",
    citation: "Federal Law No. 6 of 2018",
    title: { en: "Arbitration Law", ar: "قانون التحكيم" },
    jurisdiction: "UAE Federal",
    category: { en: "Arbitration", ar: "التحكيم" },
    year: 2018,
    summary: {
      en: "UNCITRAL Model Law-based arbitration framework: arbitration agreements, tribunal powers, and recognition and enforcement of awards.",
      ar: "إطار تحكيم مبني على قانون الأونسيترال النموذجي: اتفاقيات التحكيم وصلاحيات الهيئة والاعتراف بالأحكام وتنفيذها.",
    },
  },
  {
    id: "l10",
    citation: "Federal Decree-Law No. 31 of 2021",
    title: { en: "Penal Code (Crimes & Penalties Law)", ar: "قانون الجرائم والعقوبات" },
    jurisdiction: "UAE Federal",
    category: { en: "Criminal", ar: "الجنائي" },
    year: 2021,
    summary: {
      en: "Consolidated criminal code with modernised provisions on financial crime, cybercrime interplay, and personal liberties.",
      ar: "قانون جنائي موحّد بأحكام محدّثة حول الجرائم المالية وتقاطعها مع الجرائم الإلكترونية والحريات الشخصية.",
    },
  },
  {
    id: "l11",
    citation: "Federal Decree-Law No. 28 of 2005 (as amended)",
    title: { en: "Personal Status Law", ar: "قانون الأحوال الشخصية" },
    jurisdiction: "UAE Federal",
    category: { en: "Family", ar: "الأحوال الشخصية" },
    year: 2005,
    summary: {
      en: "Governs marriage, divorce, custody and inheritance, with the civil personal-status regime now available for non-Muslims.",
      ar: "ينظّم الزواج والطلاق والحضانة والميراث، مع توفّر نظام الأحوال الشخصية المدني لغير المسلمين.",
    },
  },
  {
    id: "l12",
    citation: "KSA Personal Data Protection Law (2023)",
    title: { en: "Saudi Personal Data Protection Law", ar: "نظام حماية البيانات الشخصية السعودي" },
    jurisdiction: "KSA",
    category: { en: "Data protection", ar: "حماية البيانات" },
    year: 2023,
    summary: {
      en: "Kingdom-wide data-protection regime administered by SDAIA, with consent, breach-notification and localisation requirements.",
      ar: "نظام حماية بيانات على مستوى المملكة تشرف عليه سدايا، بمتطلبات الموافقة والإبلاغ عن الاختراقات والتوطين.",
    },
  },
];

export const stats = {
  activeMatters: matters.filter((m) => m.status !== "closed").length,
  billableHours: 186,
  hearings: matters.filter((m) => m.nextHearing).length,
  outstanding: 312500, // AED
};

export function formatAED(n: number, lang: "en" | "ar") {
  return new Intl.NumberFormat(lang === "ar" ? "ar-AE" : "en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(n);
}
