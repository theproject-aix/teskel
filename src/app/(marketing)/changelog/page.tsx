import type { Metadata } from "next";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Everything we ship at Teskel — engine updates, new attack packs, integrations, and compliance milestones.",
};

const RELEASES = [
  {
    version: "v2.4.0",
    date: "May 22, 2026",
    tag: "Engine",
    title: "Red-Team Engine v2 with autonomous patch loop",
    body: "The red-team engine now proposes and applies patches to a dev clone, then reruns the same vector pack — all from a single CLI command. Findings drop to 0 critical in the same pipeline.",
    bullets: [
      "Autonomous patch suggestions for system prompts and tool descriptions",
      "Per-vector evidence with rerun-friendly fixtures",
      "New attack packs: encoding bypass, RAG poisoning, tool chain abuse",
    ],
  },
  {
    version: "v2.3.0",
    date: "May 5, 2026",
    tag: "Gateway",
    title: "Semantic cache with PII-aware keys",
    body: "Cache hit rate up to 38% for production workloads, with DLP-aware key construction so masked variants never collide.",
    bullets: [
      "Configurable similarity threshold per workspace",
      "Per-tenant cache namespaces & TTLs",
      "Cost dashboards now break down hit vs miss cost",
    ],
  },
  {
    version: "v2.2.0",
    date: "April 18, 2026",
    tag: "Compliance",
    title: "ISO 42001 control mapping shipped",
    body: "Every Teskel policy, log, and incident type is now mapped to ISO/IEC 42001 controls. Export from the compliance center.",
    bullets: [
      "1:1 mapping for all 38 Annex A controls",
      "Quarterly evidence pack auto-generated",
      "Custom mapping editor for org-specific controls",
    ],
  },
  {
    version: "v2.1.2",
    date: "April 2, 2026",
    tag: "Platform",
    title: "Tool Firewall + Slack approval flows",
    body: "Risky tool calls (refunds, deletes, sends-with-money) can now require human approval via Slack, Teams, or email. Decisions are signed and audit-logged.",
    bullets: [
      "Per-tool amount thresholds",
      "SLA-based auto-deny on timeout",
      "Reviewer rotation & on-call schedule integration",
    ],
  },
  {
    version: "v2.0.0",
    date: "March 11, 2026",
    tag: "Major",
    title: "Teskel Engine v2 is generally available",
    body: "Unified Web Console + Control Plane + Gateway + Red-Team + Runtime + Data Plane. BYOC and air-gapped deployments out of the box.",
    bullets: [
      "Web Console rewritten in App Router",
      "Edge gateway in 14 regions",
      "Self-hosted Helm chart + Terraform module",
    ],
  },
];

const TAG_TONE: Record<string, string> = {
  Engine: "border-mint-300/30 bg-mint-300/10 text-mint-200",
  Gateway: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  Compliance: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  Platform: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  Major: "border-rose-300/30 bg-rose-300/10 text-rose-200",
};

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Changelog"
        title="What's shipping at Teskel."
        description="New engine capabilities, integrations, and compliance work. Big releases on the first of the month — small fixes ship whenever they&apos;re ready."
      />

      <section className="container mx-auto max-w-3xl px-4 py-8">
        <div className="relative">
          <div className="absolute left-3 top-1 h-full w-px bg-gradient-to-b from-white/15 via-white/5 to-transparent" aria-hidden />
          <div className="space-y-12">
            {RELEASES.map((r) => (
              <article key={r.version} className="relative pl-10">
                <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border border-mint-300/30 bg-ink-950 text-[10px] font-medium text-mint-300">
                  •
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-mono text-sm text-white">{r.version}</div>
                  <div className="text-[11px] uppercase tracking-wider text-mist-400">{r.date}</div>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${TAG_TONE[r.tag] ?? "border-white/10 bg-white/[0.04] text-mist-200"}`}>
                    {r.tag}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist-300">{r.body}</p>
                <ul className="mt-4 grid gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[13px] text-mist-200">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want updates by email?"
        description="Once a month, the engineering team writes up what shipped, why, and what's next."
        primary={{ label: "Subscribe", href: "/waitlist" }}
        secondary={{ label: "View docs", href: "/docs" }}
      />
    </>
  );
}
