import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, BookOpen, Wrench, ShieldCheck, Plug, Webhook, Server, ScrollText, ArrowUpRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Guides, API references, and recipes for building safer AI agents with Teskel.",
};

const CATEGORIES = [
  {
    icon: Rocket,
    title: "Get started",
    blurb: "Bring up your first agent behind the Teskel gateway in 5 minutes.",
    items: ["Quickstart (Node.js)", "Quickstart (Python)", "Architecture concepts", "CLI cheat-sheet"],
  },
  {
    icon: BookOpen,
    title: "Core concepts",
    blurb: "Agents, gateway, guardrails, policies, vectors, red-team runs.",
    items: ["Workspaces & RBAC", "Routing & fallback", "Semantic cache", "Cost budgets"],
  },
  {
    icon: ShieldCheck,
    title: "Red-Team",
    blurb: "Configure attack packs, evidence retention, and CI gates.",
    items: ["Run your first scan", "Custom attack packs", "Auto-patch workflow", "CI / CD gate setup"],
  },
  {
    icon: Wrench,
    title: "Policies & DLP",
    blurb: "Author guardrails, masking rules, and tool firewall allowlists.",
    items: ["Policy DSL", "DLP detectors", "Tool firewall", "Approval flows"],
  },
  {
    icon: Plug,
    title: "Integrations",
    blurb: "Wire Teskel into your existing tooling and pipelines.",
    items: ["Vercel & Cloudflare", "Datadog & Splunk", "Slack & GitHub", "Okta & Azure AD"],
  },
  {
    icon: Webhook,
    title: "API reference",
    blurb: "REST + WebSocket APIs, SDKs, and webhooks.",
    items: ["/v1/gateway/chat", "/v1/redteam/run", "/v1/policies", "/v1/audit/events"],
  },
  {
    icon: Server,
    title: "Self-hosted & BYOC",
    blurb: "Deploy Teskel in your VPC or on-prem with no internet egress.",
    items: ["Helm chart", "Terraform modules", "Air-gapped install", "Backup & DR"],
  },
  {
    icon: ScrollText,
    title: "Compliance",
    blurb: "Evidence packs, audit exports, and certification mappings.",
    items: ["SOC 2 export", "ISO 42001 controls", "NIST AI RMF map", "EU AI Act"],
  },
];

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Build, secure, and ship AI agents — with the docs to back it up."
        description="From a 5-minute quickstart to air-gapped deployments and ISO 42001 audit exports — the full Teskel manual."
      />

      <section className="container mx-auto max-w-6xl px-4 pb-8">
        <Link
          href="#"
          className="group flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-mint-300/20 bg-gradient-to-br from-mint-300/[0.08] via-white/[0.02] to-transparent p-6 transition-colors hover:border-mint-300/40 md:flex-row md:items-center md:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint-300/30 bg-mint-300/10 text-mint-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-mint-300">New · 5 min read</div>
            <div className="mt-1 font-display text-xl font-semibold text-white">Ship your first hardened agent in 5 minutes</div>
            <div className="mt-1 text-sm text-mist-300">Install the CLI, point your model traffic at Teskel, run a red-team scan, and gate your CI — all in one walkthrough.</div>
          </div>
          <div className="ml-auto text-mist-300 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </Link>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mint-300/20 bg-mint-300/5 text-mint-300">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-sm font-semibold text-white">{c.title}</div>
              <div className="mt-1 text-[12px] text-mist-400">{c.blurb}</div>
              <ul className="mt-3 space-y-1.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <Link
                      href="#"
                      className="flex items-center justify-between rounded-lg px-2 py-1 text-[13px] text-mist-200 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      <span>{it}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need a deep-dive?"
        description="Our solutions engineers can walk you through architecture, compliance and rollout — book a 30-minute session."
        primary={{ label: "Book a session", href: "/waitlist" }}
        secondary={{ label: "View pricing", href: "/pricing" }}
      />
    </>
  );
}
