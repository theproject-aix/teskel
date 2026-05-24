import type { Metadata } from "next";
import { Building2, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Customers",
  description: "Case studies from banks, healthcare networks, and AI-native startups shipping production AI on Teskel.",
};

const CASES = [
  {
    company: "FinSecure",
    industry: "Digital banking",
    region: "EU + APAC",
    headline: "From 8 weeks to 5 days to ship a hardened agent.",
    quote:
      "Teskel cut our agent-to-production time from 8 weeks to 5 days. The red-team gate in CI is non-negotiable now \u2014 every PR that touches an agent goes through it.",
    name: "Anya Kovalenko",
    role: "VP Engineering",
    stats: [
      { label: "Time-to-market", value: "8w → 5d" },
      { label: "Findings before launch", value: "47" },
      { label: "Auto-patched", value: "39 (83%)" },
    ],
    tone: "from-mint-300/10",
  },
  {
    company: "NorthBank",
    industry: "Retail banking",
    region: "US",
    headline: "14 prompt-injection paths caught in week one.",
    quote:
      "We caught 14 prompt-injection paths in our customer-support agent in the first week. Teskel\u2019s auto-patch closed 11 of them before our team woke up. The other 3 became guardrails.",
    name: "Daniel Park",
    role: "CISO",
    stats: [
      { label: "Vectors blocked", value: "2.4M / mo" },
      { label: "Production leaks", value: "0" },
      { label: "Audit time saved", value: "70%" },
    ],
    tone: "from-sky-300/10",
  },
  {
    company: "Helix Health",
    industry: "Healthcare",
    region: "US, EU",
    headline: "SOC 2 evidence exports in under a minute.",
    quote:
      "The compliance center alone replaces three internal tools. SOC 2 evidence now exports in under a minute, and we can map every gateway decision back to a NIST AI RMF control.",
    name: "Priya Subramanian",
    role: "Head of Compliance",
    stats: [
      { label: "SOC 2 export", value: "< 1 min" },
      { label: "Controls mapped", value: "100%" },
      { label: "PHI redactions", value: "100% on egress" },
    ],
    tone: "from-violet-300/10",
  },
];

const LOGOS = [
  "FinSecure", "NorthBank", "Helix Health", "Atlas Insurance", "Mercury", "Ramp",
  "Stripe", "Notion", "Linear", "Datadog", "Snyk", "Anthropic",
];

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customers"
        title="The teams that bet AI agents on Teskel."
        description="From regulated banks to AI-native startups — Teskel is the policy layer between curiosity and consequence."
      />

      <section className="container mx-auto max-w-6xl px-4 pb-12">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {LOGOS.map((l) => (
            <div
              key={l}
              className="grid place-items-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-4 font-display text-sm font-semibold tracking-tight text-mist-300 transition-colors hover:border-white/[0.14] hover:text-white"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-6">
          {CASES.map((c) => (
            <article
              key={c.company}
              className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br ${c.tone} via-white/[0.02] to-transparent p-8 md:p-10`}
            >
              <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mist-300">
                    <Building2 className="h-3 w-3" /> {c.company}
                  </div>
                  <div className="mt-3 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
                    <span className="text-gradient-hero">{c.headline}</span>
                  </div>
                  <div className="mt-2 text-[12px] text-mist-400">
                    {c.industry} · {c.region}
                  </div>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/[0.08]"
                  >
                    Read the full story <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="space-y-5">
                  <blockquote className="text-pretty text-[15px] leading-relaxed text-mist-200 md:text-base">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-[12px] text-mist-300">
                    <span className="text-white">{c.name}</span> · {c.role}, {c.company}
                  </figcaption>
                  <div className="grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-xl font-semibold tabular-nums text-white">{s.value}</div>
                        <div className="mt-0.5 text-[11px] uppercase tracking-wider text-mist-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Want to be next?"
        description="Tell us about your AI footprint — we&apos;ll show you what Teskel would block, mask, or patch in your real traffic."
        primary={{ label: "Talk to sales", href: "/waitlist" }}
        secondary={{ label: "View pricing", href: "/pricing" }}
      />
    </>
  );
}
