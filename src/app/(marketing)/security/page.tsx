import type { Metadata } from "next";
import { Lock, ShieldCheck, ServerCog, KeyRound, FileText, Eye, ScanLine, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Security",
  description: "Defense-in-depth for AI agents. Encrypted in transit and at rest, sandboxed execution, BYOC and air-gapped deploys, third-party tested.",
};

const PILLARS = [
  {
    icon: Lock,
    title: "Encrypted everywhere",
    description: "TLS 1.3 in transit, AES-256 at rest. Per-tenant KMS keys, customer-controlled rotation, and field-level encryption for prompts, completions and DLP vault tokens.",
  },
  {
    icon: ServerCog,
    title: "Hardened execution",
    description: "Every tool call runs inside an ephemeral gVisor or Firecracker sandbox with no outbound egress except the allowlist. CPU/RAM/time quotas with kill-switch.",
  },
  {
    icon: KeyRound,
    title: "Zero standing access",
    description: "Engineers cannot read your prompts. Break-glass requires customer approval, is time-bound, and logged to your SIEM in real time.",
  },
  {
    icon: Eye,
    title: "Full observability",
    description: "Every decision the gateway makes — allow, mask, block, escalate — is signed, timestamped, and exportable as audit evidence.",
  },
];

const CERTIFICATIONS = [
  { label: "SOC 2 Type II", note: "Renewed annually" },
  { label: "ISO 27001", note: "+ ISO 27017 / 27018" },
  { label: "ISO 42001", note: "AI management system" },
  { label: "GDPR / DPA", note: "EU + UK + Swiss" },
  { label: "HIPAA-ready", note: "BAA available" },
  { label: "NIST AI RMF", note: "Mapped controls" },
  { label: "OWASP GenAI", note: "Top 10 (LLM01–10)" },
  { label: "PCI-DSS L1", note: "Through partners" },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust · Security"
        title="Defense-in-depth, built for AI agents."
        description="Teskel is engineered like the rest of your security stack: encrypted, sandboxed, audited, and verifiable. We publish what we do and how we test it."
      />

      <section className="container mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-mint-300/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mint-300/20 bg-mint-300/5 text-mint-300">
                  <p.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-mist-300">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
                <ShieldCheck className="h-3 w-3" />
                Certifications & frameworks
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                <span className="text-gradient-hero">Audit-ready by default.</span>
              </h2>
              <p className="mt-4 text-sm text-mist-300">
                Every gateway decision is signed and stored. Export evidence packs for SOC 2, ISO 27001, ISO 42001, NIST AI RMF, GDPR Article 30, or the EU AI Act in minutes — not weeks.
              </p>
              <a
                href="/compliance"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/[0.08]"
              >
                <FileText className="h-3.5 w-3.5" />
                View compliance center
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CERTIFICATIONS.map((c) => (
                <div key={c.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="text-sm font-medium text-white">{c.label}</div>
                  <div className="mt-0.5 text-[11px] text-mist-400">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ScanLine, title: "Continuous pen-testing", body: "Quarterly third-party tests + bug bounty (HackerOne). Reports available under NDA." },
            { icon: ShieldAlert, title: "Vulnerability response", body: "Critical fixes within 24h. CVE disclosure with mitigation guidance." },
            { icon: ServerCog, title: "BYOC + air-gapped", body: "Deploy into your AWS / GCP / Azure account, or fully on-prem with no internet egress." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <c.icon className="h-5 w-5 text-mint-300" />
              <h3 className="mt-3 text-sm font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-[13px] text-mist-300">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need our security questionnaire?"
        description="Send us your SIG, CAIQ, or vendor risk forms. We respond within 48 hours."
        primary={{ label: "Request security pack", href: "/waitlist" }}
        secondary={{ label: "Read compliance docs", href: "/compliance" }}
      />
    </>
  );
}
