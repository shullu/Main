# Mizan ⚖ — AI-Native Legal Practice Management

**Mizan** (ميزان — "the scales of justice") is a modern, AI-first alternative to
Clio, purpose-built for the **UAE, GCC and wider Middle East** — and fully
bilingual (English + Arabic, with correct right-to-left layout) so it can be
sold worldwide.

This repository is a working **prototype** built with Next.js 14 (App Router)
and TypeScript.

## What's inside

**Practice management**
- **Dashboard** — active matters, billable hours, upcoming hearings, outstanding
  fees, and an AI daily brief.
- **Matters** — case list with client, jurisdiction, value, next hearing, status.
- **Clients** — corporate and individual client cards.
- **Billing & Time** — billable-hour tracking, invoices (paid / sent / overdue /
  draft) and collection metrics.

**AI features (powered by Claude — `claude-opus-4-8`)**
- **AI Legal Assistant** — a jurisdiction-aware chatbot for UAE / DIFC / ADGM /
  KSA / GCC law, with citations.
- **Document Drafting** — generates first drafts (employment contracts, NDAs,
  leases, MoUs, PoAs, demand letters) tailored to the selected legal system.
- **Case Law & Legislation Search** — semantic search grounded in the law library.
- **AI Client Intake** — triages inbound enquiries, scores lead value and drafts
  a reply.

**Law library**
- A **full bilingual corpus** of Gulf legislation (UAE Federal, DIFC, ADGM,
  Dubai, KSA, GCC) — every entry in English *and* Arabic — browsable and
  searchable, and used to ground the AI search.

**Cross-cutting**
- **Bilingual EN/AR** with instant toggle and automatic RTL/LTR flipping.
- **Jurisdiction-aware AI** — every AI feature has a jurisdiction selector; the
  model applies the correct legal system, courts and practice directions for the
  selection.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

The app runs **without any API key** — AI features return clearly-labelled demo
responses. To enable live Claude answers:

```bash
cp .env.example .env.local
# add ANTHROPIC_API_KEY=... then restart
```

## Notes

- The matters, clients and law-library data are representative **demo data**. In
  production the law library is a continuously-updated, full corpus.
- AI output is research assistance, not legal advice — always verify against
  primary sources.

## Deploying

The app is a standard Next.js 14 project and deploys to any Node host.

**Vercel (recommended, one-click):** import the repo at
[vercel.com/new](https://vercel.com/new), add the `ANTHROPIC_API_KEY`
environment variable (optional — the app runs without it), and deploy.

**Any Node host:**

```bash
npm install
npm run build
npm run start        # serves on port 3000
```

## Tech

Next.js 14 · React 18 · TypeScript · Tailwind CSS · `@anthropic-ai/sdk`
