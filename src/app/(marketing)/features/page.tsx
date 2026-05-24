import type { Metadata } from "next";
import { ShieldCheck, Network, BookLock, Database, Wrench, Activity, Globe, Cpu } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { FeatureRow } from "@/components/marketing/feature-row";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Six tightly-integrated modules — AI Gateway, Red-Team, Guardrails, Data Shield, Tool Firewall, Observability — that ship every AI agent safely to production.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform · Features"
        title="One control plane. Six purpose-built modules."
        description="From the first request that enters the gateway to the audit log streamed to your SIEM — Teskel ships every AI agent safely, in one platform."
      />

      <FeatureRow
        icon={<Network className="h-3 w-3" />}
        eyebrow="AI Gateway"
        title="A single, hardened pipe for every model call."
        description="Route traffic across OpenAI, Anthropic, Bedrock, Azure and self-hosted endpoints with semantic caching, fallback, cost optimization and edge-aware latency — all without rewriting your app."
        bullets={[
          "Multi-provider routing & policy-aware failover",
          "Semantic cache with PII-aware keys",
          "Token & cost budgeting per agent / per workspace",
          "Edge-deployed in 14 regions · <80ms p95 added latency",
        ]}
        visual={
          <div className="grid grid-cols-3 items-center gap-3 font-mono text-[11px]">
            <div className="space-y-2">
              {["/v1/gateway/chat", "/agents/invoke", "/embeddings"].map((p) => (
                <div key={p} className="rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-mist-200">
                  {p}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-mint-300/30 bg-mint-300/10 text-mint-300">T</div>
              <span className="text-[10px] uppercase tracking-wider text-mist-400">Teskel Edge</span>
            </div>
            <div className="space-y-2 text-right">
              {["OpenAI", "Anthropic", "Bedrock", "Ollama"].map((p) => (
                <div key={p} className="inline-flex w-full items-center justify-end gap-2 rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-mist-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <FeatureRow
        icon={<ShieldCheck className="h-3 w-3" />}
        eyebrow="Automated Red-Team"
        title="Attack your agent before adversaries do."
        description="15 OWASP-grade attack packs run 50,000+ adversarial vectors against your agent on every release. Findings auto-generate patches, apply to a dev clone, and re-test."
        bullets={[
          "Prompt injection, jailbreak, tool abuse, RAG poisoning, encoding bypass, business logic abuse",
          "Autonomous patch & retest loop",
          "CI gate: block deploys with critical findings or score < 90",
          "Evidence trail mapped to NIST AI RMF + OWASP GenAI Top 10",
        ]}
        reverse
        visual={
          <div className="space-y-3 font-mono text-[11px] text-mist-200">
            <div>$ teskel test --red-team --attack-pack enterprise</div>
            <div className="text-mist-400">→ 5,000 vectors · 15 packs · sandbox: gvisor</div>
            <div className="rounded-md border border-rose-300/30 bg-rose-300/5 p-2 text-rose-200">
              ✗ CRITICAL · system_prompt_leakage
            </div>
            <div className="rounded-md border border-mint-300/30 bg-mint-300/5 p-2 text-mint-200">
              ✓ Auto-patch applied · retest passed
            </div>
            <div className="flex items-baseline gap-2 pt-1">
              <span className="font-display text-3xl font-semibold text-mint-300">98</span>
              <span className="text-[10px] uppercase text-mist-400">final security score</span>
            </div>
          </div>
        }
      />

      <FeatureRow
        icon={<BookLock className="h-3 w-3" />}
        eyebrow="Guardrail Studio"
        title="Write policy in plain language. Enforce it everywhere."
        description="Turn company AI policy into runtime rules — block, mask, require approval, route to human. Versioned, testable, exported as code."
        bullets={[
          "Visual builder + natural-language compiler + YAML",
          "Per-agent, per-tool, per-tenant scoping",
          "Shadow mode + canary rollout + diff review",
          "Importable templates: HIPAA, PCI-DSS, GDPR, BFSI",
        ]}
        visual={
          <div className="space-y-2 font-mono text-[11px]">
            {[
              { tag: "block", tone: "bg-rose-300/10 text-rose-200", rule: "external_model contains PII" },
              { tag: "mask", tone: "bg-amber-300/10 text-amber-200", rule: "agent.respond if salary mentioned" },
              { tag: "allow", tone: "bg-mint-300/10 text-mint-200", rule: "support_bot * tools=[search,faq]" },
              { tag: "approve", tone: "bg-sky-300/10 text-sky-200", rule: "refund_payment if amount > 1_000_000" },
            ].map((r) => (
              <div key={r.rule} className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
                <span className={`rounded-md px-1.5 py-0.5 text-[10px] uppercase ${r.tone}`}>
                  {r.tag}
                </span>
                <span className="text-mist-200">{r.rule}</span>
              </div>
            ))}
          </div>
        }
      />

      <FeatureRow
        icon={<Database className="h-3 w-3" />}
        eyebrow="Data Shield (DLP)"
        title="Sensitive data never touches an external model."
        description="Inline DLP at line rate — detect, mask, tokenize or block bank accounts, PII, secrets, source code, and customer data before any model sees them."
        reverse
        bullets={[
          "100+ detectors out of the box, custom regex + ML",
          "Format-preserving tokenization with reversible vault",
          "On-prem worker mode for air-gapped deploys",
          "Audit log of every redaction — exportable to SIEM",
        ]}
        visual={
          <div className="space-y-3 font-mono text-[11px]">
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="text-[9px] uppercase tracking-wider text-mist-400">input</div>
              <div className="mt-0.5 text-mist-200">Cek rekening 1234567890 milik Budi · NIK 320101...</div>
            </div>
            <div className="text-center text-[10px] uppercase tracking-wider text-mint-300">↓ Teskel DLP</div>
            <div className="rounded-md border border-mint-300/30 bg-mint-300/5 p-2.5">
              <div className="text-[9px] uppercase tracking-wider text-mint-300">to model</div>
              <div className="mt-0.5 text-mist-100">
                Cek rekening <span className="text-mint-300">[BANK]</span> milik <span className="text-mint-300">[PERSON]</span>
              </div>
            </div>
          </div>
        }
      />

      <FeatureRow
        icon={<Wrench className="h-3 w-3" />}
        eyebrow="Tool Firewall"
        title="Stop unsafe tool calls before they cause damage."
        description="Allowlist tools per agent, score every call, and require human approval for risky actions. Built-in sandbox kills runaway loops."
        bullets={[
          "Per-tool RBAC + amount thresholds",
          "Sandboxed execution (gVisor / Firecracker / WASI)",
          "Slack / Teams / GitHub approval flows",
          "Kill-switch & circuit breaker for runaway agents",
        ]}
        visual={
          <div className="space-y-3 font-mono text-[11px]">
            <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="text-[9px] uppercase tracking-wider text-mist-400">tool_call</div>
              <div className="mt-0.5 text-mist-200">refund_payment(<span className="text-amber-200">amount=2_500_000</span>)</div>
            </div>
            <div className="rounded-md border border-amber-300/30 bg-amber-300/5 p-2.5 text-amber-200">
              Requires manager approval · over Rp1.000.000
            </div>
            <div className="rounded-md border border-mint-300/30 bg-mint-300/5 p-2.5 text-mint-200">
              Approved by @daniel · 12s · audit logged
            </div>
          </div>
        }
      />

      <FeatureRow
        icon={<Activity className="h-3 w-3" />}
        eyebrow="Observability & Compliance"
        title="Audit-ready reports mapped to NIST AI RMF, OWASP, SOC 2."
        description="Every trace, metric, and log is captured with PII-safe redaction. Export compliance evidence in one click; pipe events to your SIEM in real-time."
        reverse
        bullets={[
          "OpenTelemetry-native traces & metrics",
          "Live dashboards: latency, cost, blocked rate, top vectors",
          "Reports: NIST AI RMF, SOC 2, ISO 42001, EU AI Act",
          "Webhook + Splunk + Datadog + S3 sinks",
        ]}
        visual={
          <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
            {[
              { label: "Latency p95", value: "184ms", delta: "-12ms" },
              { label: "Token cost", value: "$1,284", delta: "-22%" },
              { label: "Blocked rate", value: "0.31%", delta: "-0.08" },
              { label: "Findings", value: "3", delta: "0 critical" },
            ].map((s) => (
              <div key={s.label} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="text-[10px] uppercase tracking-wider text-mist-400">{s.label}</div>
                <div className="mt-0.5 flex items-baseline justify-between">
                  <span className="font-display text-base font-semibold tabular-nums text-white">{s.value}</span>
                  <span className="text-[10px] text-mint-300">{s.delta}</span>
                </div>
              </div>
            ))}
          </div>
        }
      />

      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Globe, label: "14 edge regions", note: "Frankfurt, Singapore, Jakarta, Sydney + more" },
            { icon: Cpu, label: "BYO model", note: "OpenAI, Anthropic, Gemini, Bedrock, Ollama, custom" },
            { icon: ShieldCheck, label: "SOC 2 Type II", note: "GDPR, HIPAA-ready, ISO 27001, ISO 42001" },
            { icon: Network, label: "20+ integrations", note: "Vercel, Datadog, Splunk, Slack, GitHub, Okta" },
          ].map((b) => (
            <div key={b.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
              <b.icon className="h-5 w-5 text-mint-300" />
              <div className="mt-3 text-sm font-medium text-white">{b.label}</div>
              <div className="mt-1 text-[12px] text-mist-400">{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to ship safer AI?"
        description="Start free or talk to our security engineers about your enterprise rollout."
      />
    </>
  );
}
