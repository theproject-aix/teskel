"use client";

import { motion } from "framer-motion";
import { BookLock, Sparkles, Save, GitBranch } from "lucide-react";
import { PageHero } from "@/components/app/app-shell";

const RULES = [
  { id: 1, tag: "block", title: "Outbound model · contains PII", rule: "external_model_call WHERE response CONTAINS pii_class:any" },
  { id: 2, tag: "mask", title: "Respond · salary mentioned", rule: "agent.respond WHERE response MATCHES /salary|gaji|kompensasi/" },
  { id: 3, tag: "approve", title: "refund_payment · amount > 1.000.000", rule: "tool.refund_payment WHERE amount > 1_000_000" },
  { id: 4, tag: "allow", title: "support_bot · default tool allowlist", rule: "agent:support_bot TOOLS allow=[search, faq, file_ticket]" },
];

const TAG_TONE: Record<string, string> = {
  block: "border-rose-300/30 bg-rose-300/10 text-rose-200",
  mask: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  approve: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  allow: "border-mint-300/30 bg-mint-300/10 text-mint-200",
};

const POLICY_YAML = `apiVersion: teskel.ai/v1
kind: PolicyBundle
metadata:
  name: bfsi-baseline
  workspace: finsecure
rules:
  - id: outbound-pii-block
    when:
      target: external_model
      condition: response.contains(pii_class.any)
    action: block

  - id: salary-mask
    when:
      target: agent.respond
      condition: response.matches("/salary|gaji|kompensasi/")
    action: mask

  - id: refund-approval
    when:
      target: tool.refund_payment
      condition: amount > 1_000_000
    action: approve
    via: slack:#finance-approvals
`;

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guardrails"
        title="Policy Studio"
        description="Author guardrails in natural language or YAML. Versioned, testable, scoped per agent or workspace."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[12px] text-mist-200 hover:bg-white/[0.04] hover:text-white">
              <GitBranch className="h-3.5 w-3.5" /> v2.3.0
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3 text-[12px] font-medium text-ink-950 hover:bg-mist-100">
              <Save className="h-3.5 w-3.5" /> Save & deploy
            </button>
          </>
        }
      />

      <div className="grid gap-6 p-4 md:grid-cols-[1fr_1.1fr] md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sparkles className="h-4 w-4 text-mint-300" /> Natural language rules
          </div>
          <p className="mt-1 text-[12px] text-mist-400">Write in plain English or Bahasa. Teskel compiles to YAML.</p>

          <div className="mt-4 space-y-2">
            {RULES.map((r) => (
              <div key={r.id} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-white">
                  <span className={`rounded-md border px-1.5 py-0.5 text-[10px] uppercase ${TAG_TONE[r.tag]}`}>{r.tag}</span>
                  {r.title}
                </div>
                <div className="mt-2 rounded-md border border-white/[0.05] bg-ink-950/60 px-3 py-2 font-mono text-[11px] text-mist-300">
                  {r.rule}
                </div>
              </div>
            ))}
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/[0.1] px-3 py-3 text-[12px] text-mist-400 transition-colors hover:border-white/[0.2] hover:text-white">
              + Add new rule
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <BookLock className="h-4 w-4 text-mint-300" /> Compiled policy · YAML
            </div>
            <span className="font-mono text-[10px] text-mist-500">policies/bfsi-baseline.yaml</span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[11px] leading-relaxed text-mist-200">
{POLICY_YAML}
          </pre>
          <div className="border-t border-white/[0.06] bg-ink-950/60 px-5 py-3 text-[11px] text-mist-400">
            <span className="text-mint-300">●</span> Synced · last deploy 12 min ago by @anya · signed: ed25519:7f3c…b104
          </div>
        </motion.div>
      </div>
    </>
  );
}
