import type { Metadata } from "next";
import { Building2, Shield, Users, ServerCog, Plug, BookCheck, HeartHandshake, Globe2 } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Enterprise",
  description: "Dedicated tenant, BYOC, air-gapped deployment, SSO/SAML, SIEM integration, NIST AI RMF + SOC 2 mapping, and a named security architect on-call.",
};

const VALUE_PROPS = [
  { icon: ServerCog, label: "Dedicated tenant or BYOC", note: "Run in our cloud, your cloud, or fully air-gapped on-prem." },
  { icon: Shield, label: "SSO / SAML / SCIM", note: "Okta, Azure AD, Google, OneLogin. JIT provisioning + group sync." },
  { icon: Users, label: "Custom RBAC", note: "Org → workspace → agent. Approval flows per environment." },
  { icon: Plug, label: "SIEM streaming", note: "Real-time event pipeline to Splunk, Datadog, Sumo, S3." },
  { icon: BookCheck, label: "Mapped reports", note: "NIST AI RMF, ISO 42001, EU AI Act, SOC 2, ISO 27001." },
  { icon: HeartHandshake, label: "Named architect", note: "Quarterly business reviews + 24×7 paged support." },
  { icon: Globe2, label: "Data residency", note: "EU, US, APAC, ID. Region-locked storage + processing." },
  { icon: Building2, label: "Procurement-ready", note: "DPAs, BAAs, security questionnaires within 48h." },
];

const STATS = [
  { value: "5,000+", label: "agents secured" },
  { value: "2.4M", label: "attacks blocked / month" },
  { value: "99.99%", label: "gateway uptime" },
  { value: "< 80ms", label: "p95 added latency" },
];

export default function EnterprisePage() {
  return (
    <>
      <PageHeader
        eyebrow="For Enterprise Teams"
        title="Build AI fast. Govern it safely. Deploy with confidence."
        description="Teskel Enterprise gives regulated industries everything they need — security, compliance, and scale — to put AI agents in front of real customers and real revenue."
      />

      <section className="container mx-auto max-w-6xl px-4 pb-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold tabular-nums text-white md:text-4xl">
                <span className="text-gradient-mint">{s.value}</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-mist-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v) => (
            <div key={v.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mint-300/20 bg-mint-300/5 text-mint-300">
                <v.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-sm font-medium text-white">{v.label}</div>
              <div className="mt-1 text-[12px] text-mist-400">{v.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-mint-300/[0.04] via-white/[0.02] to-transparent p-8 md:p-12">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
                Procurement
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                <span className="text-gradient-hero">Onboard in days, not quarters.</span>
              </h2>
              <p className="mt-4 text-sm text-mist-300">
                We&apos;ve done this before. Vendor risk forms, MSAs, DPAs, security questionnaires, region-locked data — handled by a real security architect, not a chatbot.
              </p>
            </div>
            <ol className="space-y-3 text-sm text-mist-200">
              {[
                "Week 0 — discovery: security questionnaire, scope, model providers, regions",
                "Week 1 — POC: gateway live, top 3 agents instrumented, red-team baseline",
                "Week 2 — integration: SSO, SIEM streaming, custom policies",
                "Week 3 — go-live: production traffic with SLA, on-call rotation",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-mint-300/30 bg-mint-300/10 font-mono text-[11px] text-mint-300">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTABanner
        title="Talk to our enterprise team."
        description="Get a dedicated POC, sample policy packs, and a SOC 2 report under NDA in your first call."
        primary={{ label: "Book enterprise demo", href: "/waitlist" }}
        secondary={{ label: "View pricing", href: "/pricing" }}
      />
    </>
  );
}
