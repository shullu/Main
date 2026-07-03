import type {
  Award,
  NavItem,
  Office,
  Person,
  PracticeArea,
  Stat,
} from "@/types";

export const firm = {
  name: "Hage-Chahine",
  fullName: "Hage-Chahine Law Firm",
  established: "1976",
  tagline: "First-rate legal counsel across France, Lebanon and the Middle East.",
  intro:
    "A regional corporate law firm dedicated to providing first-rate, comprehensive legal services to the businesses and institutions that operate across Europe and the Middle East.",
  email: "contact@hagechahine.com",
} as const;

export const nav: NavItem[] = [
  { label: "The Firm", href: "#firm" },
  { label: "Expertise", href: "#expertise" },
  { label: "People", href: "#people" },
  { label: "Offices", href: "#offices" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { value: "1976", label: "Established" },
  { value: "5", label: "Jurisdictions" },
  { value: "12", label: "Practice areas" },
  { value: "2×", label: "Arbitration Team of the Year" },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "arbitration",
    title: "Arbitration",
    description:
      "Counsel at every stage of the arbitral process — from drafting arbitral agreements to enforcement of awards. Our lawyers also sit as arbitrators in commercial and investment arbitration.",
  },
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    description:
      "Representation before national courts across contracts, commercial, banking, insurance, transport, real estate and cross-border disputes.",
  },
  {
    id: "corporate",
    title: "Corporate & M&A",
    description:
      "The full range of mergers and acquisitions, capital markets, private equity and funds, and general corporate and commercial matters.",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description:
      "Advice to banks, financial institutions and borrowers on financing, regulation, secured lending and structured transactions.",
  },
  {
    id: "real-estate-construction",
    title: "Real Estate & Construction",
    description:
      "Acting for developers, contractors, consultants, employers and investors across every phase of construction transactions and disputes.",
  },
  {
    id: "energy-infrastructure",
    title: "Energy & Infrastructure",
    description:
      "Support for sponsors, contractors and public bodies on major energy and infrastructure projects and the disputes that arise from them.",
  },
  {
    id: "contracts",
    title: "Contracts & International Business",
    description:
      "Civil and commercial contracts, compliance, joint ventures and international business transactions structured for cross-border trade.",
  },
  {
    id: "agencies-franchises",
    title: "Commercial Agencies & Franchises",
    description:
      "Commercial agency, franchise and distribution arrangements, from drafting and registration to termination and dispute.",
  },
  {
    id: "insurance",
    title: "Insurance & Reinsurance",
    description:
      "Advisory and contentious work for insurers, reinsurers and policyholders across the region's insurance markets.",
  },
  {
    id: "family-private-client",
    title: "Family Law & Private Client",
    description:
      "Family-owned business, succession, asset division and complex cross-border family disputes handled with discretion.",
  },
  {
    id: "sovereign",
    title: "Sovereign Governments & Institutions",
    description:
      "Counsel to sovereign governments and international institutions on matters of public law, treaties and international arbitration.",
  },
  {
    id: "transport",
    title: "Transport Law",
    description:
      "Maritime, aviation and land transport matters, including carriage of goods, liability and regulatory questions.",
  },
];

export const people: Person[] = [
  {
    name: "Fayez Hage-Chahine",
    role: "Founding Partner",
    initials: "FHC",
    bio: "Recognised as one of the leading authorities on private law in the Middle East, and the first Lebanese attorney to hold the title of Agrégé of the French Faculties of Law.",
    credentials: [
      "Agrégé of the French Faculties of Law",
      "Honorary Dean, Faculty of Law — Saint-Joseph University (Beirut & Dubai)",
    ],
  },
  {
    name: "Najib Hage-Chahine",
    role: "Managing Partner",
    initials: "NHC",
    bio: "Oversees the operations of the firm and its educational initiatives for younger attorneys. Dual-qualified in Lebanon and France, he sits as counsel and arbitrator in major regional disputes.",
    credentials: [
      "Dual-qualified — Lebanon & France",
      "Agrégé of the French Faculties of Law",
      "Professor of Private Law — Saint-Joseph University, Beirut",
    ],
  },
  {
    name: "Ibrahim Gabriel Hage-Chahine",
    role: "Partner",
    initials: "IHC",
    bio: "Advises international clients across corporate, commercial and dispute-resolution matters, bringing a rigorous academic grounding to complex cross-border work.",
    credentials: [
      "Corporate & Commercial",
      "Cross-border Dispute Resolution",
    ],
  },
];

export const offices: Office[] = [
  {
    city: "Beirut",
    country: "Lebanon",
    role: "Headquarters",
    address: "Mohanna Building, 2nd Floor, Hazmieh — Gardenia, Beirut",
    phone: "+961 5 452 298",
    email: "contact@hagechahine.com",
    isHeadquarters: true,
  },
  {
    city: "Paris",
    country: "France",
    role: "European practice",
    phone: "+33 1 80 49 39 52",
    email: "contact@hagechahine.com",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    role: "Gulf practice",
    email: "contact@hagechahine.com",
  },
];

export const additionalPresence = ["Kuwait", "Qatar"];

export const awards: Award[] = [
  {
    title: "Arbitration Team of the Year",
    organisation: "Middle East Legal Awards",
    year: "2022",
  },
  {
    title: "Lebanon Law Firm of the Year",
    organisation: "Thomson Reuters ALB Middle East Law Awards",
    year: "2022",
  },
  {
    title: "Arbitration Team of the Year",
    organisation: "Middle East Legal Awards",
    year: "2021",
  },
  {
    title: "Litigation Team of the Year",
    organisation: "Middle East Legal Awards",
    year: "2021",
  },
];

export const rankings = ["Chambers Global", "The Legal 500"];
