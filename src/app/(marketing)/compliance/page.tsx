import type { Metadata } from "next";
import { ShieldCheck, FileBadge, Download, BookCheck, Globe2, ScrollText } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Compliance",
  description: "Certifications, frameworks, and audit-ready evidence packs for AI governance.",
};

const CERTS = [
  { label: "SOC 2 Type II", year: "2025", status: "Active · annual" },
  { label: "ISO 27001", year: "2025", status: "Active · 3-yr cycle" },
  { label: "ISO 27017", year: "2025", status: "Cloud controls" },
  { label: "ISO 27018", year: "2025", status: "PII in cloud" },
  { label: "ISO 42001", year: "2025", status: "AI mgmt system" },
  { label: "GDPR / UK DPA", year: "—", status: "Compliant" },
  { label: "HIPAA-ready", year: "—", status: "BAA available" },
  { label: "PCI-DSS L1", year: "—", status: "Via partners" },
];

const FRAMEWORKS = [
  {
    icon: BookCheck,
    title: "NIST AI Risk Management Framework",
    body: "All Teskel controls map directly to the GOVERN, MAP, MEASURE, MANAGE functions. Export evidence per control.",
  },
  {
    icon: ScrollText,
    title: "OWASP GenAI Top 10 (LLM01–10)",
    body: "Default red-team packs cover LLM01 (prompt injection) through LLM10 (unbounded consumption), with per-vector evidence.",
  },
  {
    icon: Globe2,
    title: "EU AI Act",
    body: "High-risk AI classification helper, log retention defaults, transparency record, and incident reporting workflow.",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 42001 AIMS",
    body: "AI management system controls including impact assessment, intended-use registers, and continuous monitoring.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance Center"
        title="Audit-ready by default, exportable in one click."
        description="Every certification, framework, and report your auditors will ask about — already mapped to Teskel controls."
      />

      <section className="container mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c) => (
            <div key={c.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-start justify-between">
                <FileBadge className="h-5 w-5 text-mint-300" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-mist-400">{c.year}</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{c.label}</div>
              <div className="mt-1 text-[12px] text-mist-400">{c.status}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 lg:grid-cols-2">
          {FRAMEWORKS.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mint-300/20 bg-mint-300/5 text-mint-300">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-mist-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-mint-300/[0.05] via-white/[0.02] to-transparent p-8 md:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
                <Download className="h-3 w-3" />
                Evidence packs
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                <span className="text-gradient-hero">Hand your auditor a real artifact.</span>
              </h2>
              <p className="mt-4 text-sm text-mist-300">
                Pre-built evidence packs with signed audit log extracts, control mappings, and red-team summaries. Available to Enterprise customers under NDA.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "SOC 2 Type II report",
                "ISO 27001 SoA",
                "ISO 42001 AIMS",
                "Penetration test summary",
                "NIST AI RMF mapping",
                "Sub-processor list",
                "DPA / SCC templates",
                "Vendor questionnaire (CAIQ)",
              ].map((d) => (
                <li key={d} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[13px] text-mist-200">
                  <span>{d}</span>
                  <Download className="h-3.5 w-3.5 text-mist-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need our trust report?"
        description="We share full audit reports under NDA. Tell us your timeline and we&apos;ll respond within 48 hours."
        primary={{ label: "Request trust report", href: "/waitlist" }}
        secondary={{ label: "View security docs", href: "/security" }}
      />
    </>
  );
}
