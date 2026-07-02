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

export type Invoice = {
  id: string;
  number: string;
  client: Bi;
  matterRef: string;
  amount: number; // AED
  issued: string;
  due: string;
  status: "paid" | "sent" | "overdue" | "draft";
};

export type TimeEntry = {
  id: string;
  date: string;
  lawyer: Bi;
  matterRef: string;
  task: Bi;
  hours: number;
  rate: number; // AED / hour
  billed: boolean;
};

export const invoices: Invoice[] = [
  { id: "i1", number: "INV-2026-0088", client: { en: "Al Futtaim Group", ar: "مجموعة الفطيم" }, matterRef: "MZ-2024-0142", amount: 148500, issued: "2026-06-01", due: "2026-07-01", status: "overdue" },
  { id: "i2", number: "INV-2026-0091", client: { en: "Al Habtoor Group", ar: "مجموعة الحبتور" }, matterRef: "MZ-2024-0151", amount: 262000, issued: "2026-06-10", due: "2026-07-10", status: "sent" },
  { id: "i3", number: "INV-2026-0086", client: { en: "Emirates Steel Arkan", ar: "إمارات للحديد أركان" }, matterRef: "MZ-2024-0138", amount: 74000, issued: "2026-05-20", due: "2026-06-20", status: "paid" },
  { id: "i4", number: "INV-2026-0093", client: { en: "Reem Investments LLC", ar: "ريم للاستثمار ذ.م.م" }, matterRef: "MZ-2024-0117", amount: 96500, issued: "2026-06-22", due: "2026-07-22", status: "sent" },
  { id: "i5", number: "INV-2026-0095", client: { en: "Noor Bank PJSC", ar: "بنك نور ش.م.ع" }, matterRef: "MZ-2024-0129", amount: 41000, issued: "2026-06-25", due: "2026-07-25", status: "draft" },
];

export const timeEntries: TimeEntry[] = [
  { id: "t1", date: "2026-07-01", lawyer: { en: "M. Khalifa", ar: "م. خليفة" }, matterRef: "MZ-2024-0142", task: { en: "Drafting rejoinder", ar: "صياغة مذكرة الرد" }, hours: 4.5, rate: 1800, billed: false },
  { id: "t2", date: "2026-07-01", lawyer: { en: "S. Haddad", ar: "س. حداد" }, matterRef: "MZ-2024-0151", task: { en: "Arbitration hearing prep", ar: "تحضير جلسة التحكيم" }, hours: 6, rate: 2100, billed: false },
  { id: "t3", date: "2026-06-30", lawyer: { en: "M. Khalifa", ar: "م. خليفة" }, matterRef: "MZ-2024-0129", task: { en: "Client consultation", ar: "استشارة العميل" }, hours: 1.5, rate: 1800, billed: false },
  { id: "t4", date: "2026-06-30", lawyer: { en: "L. Nasser", ar: "ل. ناصر" }, matterRef: "MZ-2024-0117", task: { en: "ADGM fund documentation", ar: "توثيق صندوق سوق أبوظبي" }, hours: 3.2, rate: 1600, billed: true },
  { id: "t5", date: "2026-06-29", lawyer: { en: "S. Haddad", ar: "س. حداد" }, matterRef: "MZ-2024-0138", task: { en: "Supply agreement review", ar: "مراجعة اتفاقية التوريد" }, hours: 2.8, rate: 2100, billed: true },
];

export const billingStats = {
  billed: invoices.reduce((s, i) => s + i.amount, 0),
  collected: invoices.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0),
  outstanding: invoices
    .filter((i) => i.status === "sent" || i.status === "overdue")
    .reduce((s, i) => s + i.amount, 0),
  unbilledHours: timeEntries.filter((t) => !t.billed).reduce((s, t) => s + t.hours, 0),
};

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
  {
    id: "l13",
    citation: "Federal Decree-Law No. 34 of 2021",
    title: { en: "Combating Rumours & Cybercrime Law", ar: "قانون مكافحة الشائعات والجرائم الإلكترونية" },
    jurisdiction: "UAE Federal",
    category: { en: "Cybercrime", ar: "الجرائم الإلكترونية" },
    year: 2021,
    summary: {
      en: "Criminalises online fraud, hacking, defamation and misuse of data. Article 6 addresses unauthorised system access; Article 43 covers online defamation.",
      ar: "يجرّم الاحتيال الإلكتروني والاختراق والتشهير وإساءة استخدام البيانات. المادة ٦ تتناول الدخول غير المصرح به؛ والمادة ٤٣ تعالج التشهير الإلكتروني.",
    },
  },
  {
    id: "l14",
    citation: "Federal Decree-Law No. 20 of 2018",
    title: { en: "Anti-Money Laundering Law", ar: "قانون مواجهة غسل الأموال" },
    jurisdiction: "UAE Federal",
    category: { en: "Financial crime", ar: "الجرائم المالية" },
    year: 2018,
    summary: {
      en: "AML/CFT framework: customer due diligence, suspicious-transaction reporting to the FIU, and beneficial-ownership obligations for entities.",
      ar: "إطار مكافحة غسل الأموال وتمويل الإرهاب: العناية الواجبة تجاه العملاء والإبلاغ عن المعاملات المشبوهة ووحدة المعلومات المالية والتزامات المستفيد الحقيقي.",
    },
  },
  {
    id: "l15",
    citation: "Federal Decree-Law No. 9 of 2016 (as amended)",
    title: { en: "Bankruptcy Law", ar: "قانون الإفلاس" },
    jurisdiction: "UAE Federal",
    category: { en: "Insolvency", ar: "الإعسار" },
    year: 2016,
    summary: {
      en: "Provides preventive composition, restructuring and bankruptcy procedures for onshore entities, decriminalising bounced-cheque scenarios tied to insolvency.",
      ar: "يوفّر إجراءات الصلح الواقي وإعادة الهيكلة والإفلاس للكيانات، مع إزالة التجريم عن الشيكات المرتدة المرتبطة بالإعسار.",
    },
  },
  {
    id: "l16",
    citation: "Federal Law No. 5 of 1985 (Civil Transactions Law)",
    title: { en: "Civil Code", ar: "قانون المعاملات المدنية" },
    jurisdiction: "UAE Federal",
    category: { en: "Civil", ar: "المدني" },
    year: 1985,
    summary: {
      en: "Foundational civil code governing contracts, obligations, tort/liability and property. Article 246 codifies the good-faith performance principle.",
      ar: "القانون المدني الأساسي الحاكم للعقود والالتزامات والمسؤولية والملكية. المادة ٢٤٦ تقنّن مبدأ حسن النية في تنفيذ العقد.",
    },
  },
  {
    id: "l17",
    citation: "Cabinet Decision No. 52 of 2017 (VAT Executive Regulations)",
    title: { en: "VAT Executive Regulations", ar: "اللائحة التنفيذية لضريبة القيمة المضافة" },
    jurisdiction: "UAE Federal",
    category: { en: "Tax", ar: "الضرائب" },
    year: 2017,
    summary: {
      en: "Implements the 5% VAT regime: registration thresholds, zero-rated and exempt supplies, input-tax recovery and invoicing requirements.",
      ar: "تنفّذ نظام ضريبة القيمة المضافة بنسبة ٥٪: حدود التسجيل والتوريدات الخاضعة للصفر والمعفاة واسترداد ضريبة المدخلات ومتطلبات الفوترة.",
    },
  },
  {
    id: "l18",
    citation: "Federal Decree-Law No. 26 of 2020",
    title: { en: "Nationality & Passports (Investor Citizenship)", ar: "قانون الجنسية وجوازات السفر" },
    jurisdiction: "UAE Federal",
    category: { en: "Immigration", ar: "الهجرة" },
    year: 2020,
    summary: {
      en: "Amendments enabling citizenship for qualified investors, professionals and talents, and clarifying dual-nationality provisions.",
      ar: "تعديلات تتيح منح الجنسية للمستثمرين والمهنيين وأصحاب المواهب المؤهلين، وتوضّح أحكام ازدواج الجنسية.",
    },
  },
  {
    id: "l19",
    citation: "Dubai Law No. 26 of 2007 (as amended by Law No. 33 of 2008)",
    title: { en: "Dubai Tenancy Law", ar: "قانون إيجار العقارات في دبي" },
    jurisdiction: "Dubai",
    category: { en: "Real estate", ar: "العقارات" },
    year: 2007,
    summary: {
      en: "Regulates landlord–tenant relations in Dubai: Ejari registration, rent-increase caps via the RERA index, and eviction notice periods.",
      ar: "ينظّم علاقة المالك والمستأجر في دبي: تسجيل إيجاري وسقف الزيادة عبر مؤشر ريرا ومدد إشعار الإخلاء.",
    },
  },
  {
    id: "l20",
    citation: "Dubai Law No. 6 of 2019 (Joint Property)",
    title: { en: "Dubai Jointly Owned Property Law", ar: "قانون الملكية المشتركة في دبي" },
    jurisdiction: "Dubai",
    category: { en: "Real estate", ar: "العقارات" },
    year: 2019,
    summary: {
      en: "Governs owners' associations, common-area management and service charges for jointly owned developments in Dubai.",
      ar: "ينظّم جمعيات الملاك وإدارة المناطق المشتركة ورسوم الخدمة للمشاريع ذات الملكية المشتركة في دبي.",
    },
  },
  {
    id: "l21",
    citation: "DIFC Law No. 5 of 2005 (as amended)",
    title: { en: "DIFC Contract Law", ar: "قانون العقود بمركز دبي المالي" },
    jurisdiction: "DIFC",
    category: { en: "Contract", ar: "العقود" },
    year: 2005,
    summary: {
      en: "Common-law contract regime for the DIFC: formation, interpretation, breach and remedies, drawing on English-law principles.",
      ar: "نظام عقود مبني على القانون العام لمركز دبي المالي: الانعقاد والتفسير والإخلال والتعويضات، مستند إلى مبادئ القانون الإنجليزي.",
    },
  },
  {
    id: "l22",
    citation: "DIFC Law No. 10 of 2018 (Insolvency Law)",
    title: { en: "DIFC Insolvency Law", ar: "قانون الإعسار بمركز دبي المالي" },
    jurisdiction: "DIFC",
    category: { en: "Insolvency", ar: "الإعسار" },
    year: 2018,
    summary: {
      en: "Rehabilitation and winding-up framework for DIFC entities, including an administration procedure and a rescue-focused moratorium.",
      ar: "إطار إعادة التأهيل والتصفية لكيانات مركز دبي المالي، بما في ذلك إجراء الإدارة ووقف مؤقت يركّز على الإنقاذ.",
    },
  },
  {
    id: "l23",
    citation: "ADGM Employment Regulations 2019 (as amended)",
    title: { en: "ADGM Employment Regulations", ar: "لوائح العمل بسوق أبوظبي العالمي" },
    jurisdiction: "ADGM",
    category: { en: "Employment", ar: "العمل" },
    year: 2019,
    summary: {
      en: "Employment framework for ADGM entities: end-of-service gratuity, working hours, leave entitlements and termination protections.",
      ar: "إطار العمل لكيانات سوق أبوظبي: مكافأة نهاية الخدمة وساعات العمل والإجازات وحماية الإنهاء.",
    },
  },
  {
    id: "l24",
    citation: "ADGM Data Protection Regulations 2021",
    title: { en: "ADGM Data Protection Regulations", ar: "لوائح حماية البيانات بسوق أبوظبي" },
    jurisdiction: "ADGM",
    category: { en: "Data protection", ar: "حماية البيانات" },
    year: 2021,
    summary: {
      en: "GDPR-aligned data-protection regime for ADGM with an independent Commissioner, DPIA duties and international transfer controls.",
      ar: "نظام حماية بيانات متوافق مع اللائحة الأوروبية لسوق أبوظبي بمفوّض مستقل وواجبات تقييم الأثر وضوابط النقل الدولي.",
    },
  },
  {
    id: "l25",
    citation: "Federal Decree-Law No. 37 of 2021",
    title: { en: "Trademarks Law", ar: "قانون العلامات التجارية" },
    jurisdiction: "UAE Federal",
    category: { en: "Intellectual property", ar: "الملكية الفكرية" },
    year: 2021,
    summary: {
      en: "Modernised trademark regime aligned with GCC Trademark Law: registration, opposition, well-known marks and enforcement remedies.",
      ar: "نظام علامات محدّث متوافق مع قانون العلامات الخليجي: التسجيل والاعتراض والعلامات المشهورة ووسائل الإنفاذ.",
    },
  },
  {
    id: "l26",
    citation: "Federal Decree-Law No. 38 of 2021",
    title: { en: "Copyright & Neighbouring Rights Law", ar: "قانون حق المؤلف والحقوق المجاورة" },
    jurisdiction: "UAE Federal",
    category: { en: "Intellectual property", ar: "الملكية الفكرية" },
    year: 2021,
    summary: {
      en: "Protects literary, artistic and software works; sets author moral and economic rights, terms of protection and infringement penalties.",
      ar: "يحمي الأعمال الأدبية والفنية والبرمجيات؛ ويحدّد الحقوق الأدبية والمادية للمؤلف ومدد الحماية وعقوبات الاعتداء.",
    },
  },
  {
    id: "l27",
    citation: "Federal Decree-Law No. 14 of 2023",
    title: { en: "Financial Restructuring & Bankruptcy Law", ar: "قانون إعادة التنظيم المالي والإفلاس" },
    jurisdiction: "UAE Federal",
    category: { en: "Insolvency", ar: "الإعسار" },
    year: 2023,
    summary: {
      en: "New insolvency regime establishing a dedicated Bankruptcy Court and clearer preventive-settlement and restructuring procedures.",
      ar: "نظام إعسار جديد ينشئ محكمة إفلاس مختصة وإجراءات أوضح للصلح الوقائي وإعادة الهيكلة.",
    },
  },
  {
    id: "l28",
    citation: "KSA Companies Law (Royal Decree M/132 of 2022)",
    title: { en: "Saudi Companies Law", ar: "نظام الشركات السعودي" },
    jurisdiction: "KSA",
    category: { en: "Corporate", ar: "الشركات" },
    year: 2022,
    summary: {
      en: "Overhauled Saudi corporate framework introducing the simplified joint-stock company and modernised governance and capital rules.",
      ar: "نظام شركات سعودي مُحدَّث يستحدث شركة المساهمة المبسّطة ويطوّر قواعد الحوكمة ورأس المال.",
    },
  },
  {
    id: "l29",
    citation: "KSA Labor Law (Royal Decree M/51, amended 2024)",
    title: { en: "Saudi Labor Law", ar: "نظام العمل السعودي" },
    jurisdiction: "KSA",
    category: { en: "Employment", ar: "العمل" },
    year: 2024,
    summary: {
      en: "Governs private-sector employment in the Kingdom: contracts, Saudisation (Nitaqat) interplay, end-of-service awards and termination.",
      ar: "ينظّم العمل في القطاع الخاص بالمملكة: العقود وتقاطع السعودة (نطاقات) ومكافأة نهاية الخدمة والإنهاء.",
    },
  },
  {
    id: "l30",
    citation: "GCC Common Customs Law",
    title: { en: "GCC Common Customs Law", ar: "قانون الجمارك الموحّد لدول الخليج" },
    jurisdiction: "GCC",
    category: { en: "Trade", ar: "التجارة" },
    year: 2003,
    summary: {
      en: "Unified customs code across GCC states: a common external tariff, single point of entry principle and harmonised clearance procedures.",
      ar: "قانون جمركي موحّد بين دول مجلس التعاون: تعريفة خارجية موحّدة ومبدأ المنفذ الواحد وإجراءات تخليص منسّقة.",
    },
  },
];

export const stats = {
  activeMatters: matters.filter((m) => m.status !== "closed").length,
  billableHours: 186,
  hearings: matters.filter((m) => m.nextHearing).length,
  // Derived from the same invoice data the Billing page uses, so the
  // dashboard and billing views never show conflicting figures.
  outstanding: billingStats.outstanding, // AED
};

export function formatAED(n: number, lang: "en" | "ar") {
  return new Intl.NumberFormat(lang === "ar" ? "ar-AE" : "en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(n);
}
