"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Play, FileDown, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/app/app-shell";

const PACKS = [
  { name: "Prompt Injection", count: 1240, on: true },
  { name: "Jailbreak", count: 980, on: true },
  { name: "RAG Poisoning", count: 612, on: true },
  { name: "Tool Abuse", count: 480, on: true },
  { name: "Encoding Bypass", count: 320, on: false },
  { name: "Business Logic", count: 240, on: false },
];

const FINDINGS = [
  { id: "RT-1041", severity: "critical", title: "system_prompt_leakage via base64 encoding", vector: "encoding_bypass.b64", status: "patch_ready" },
  { id: "RT-1039", severity: "high", title: "tool refund_payment callable without amount cap", vector: "tool_abuse.no_threshold", status: "patch_ready" },
  { id: "RT-1032", severity: "high", title: "PII leakage in agent response", vector: "rag_poisoning.pii", status: "manual_review" },
  { id: "RT-1027", severity: "medium", title: "Long-context prompt injection survives summarizer", vector: "prompt_injection.long_context", status: "applied" },
  { id: "RT-1014", severity: "low", title: "Verbose error message leaks model name", vector: "info_leak.model_name", status: "applied" },
];

const SEV_TONE: Record<string, string> = {
  critical: "border-rose-300/30 bg-rose-300/10 text-rose-200",
  high: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  medium: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  low: "border-white/10 bg-white/[0.04] text-mist-300",
};

const STATUS_TONE: Record<string, string> = {
  patch_ready: "text-mint-300",
  manual_review: "text-amber-300",
  applied: "text-mist-400",
};

export default function RedTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Red-Team Studio"
        title="Automated adversarial testing"
        description="15 OWASP-grade attack packs, 50,000+ vectors. Findings auto-patch where possible and rerun in the same sandbox."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[12px] text-mist-200 hover:bg-white/[0.04] hover:text-white">
              <FileDown className="h-3.5 w-3.5" /> Export report
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3 text-[12px] font-medium text-ink-950 hover:bg-mist-100">
              <Play className="h-3.5 w-3.5" /> Run scan
            </button>
          </>
        }
      />

      <div className="grid gap-6 p-4 md:grid-cols-[1fr_1.6fr] md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <ShieldCheck className="h-4 w-4 text-mint-300" /> New scan
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-mist-400">Target agent</div>
              <select className="mt-2 h-10 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 text-[13px] text-mist-100 focus:border-mint-300/60 focus:outline-none">
                <option>customer_support@prod</option>
                <option>kb_search@prod</option>
                <option>finance_assistant@prod</option>
              </select>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-mist-400">Attack packs</div>
              <div className="mt-2 space-y-1.5">
                {PACKS.map((p) => (
                  <label key={p.name} className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[12px]">
                    <span className="text-mist-200">{p.name}</span>
                    <span className="ml-auto font-mono text-[10px] text-mist-500">{p.count.toLocaleString()}</span>
                    <span
                      role="switch"
                      aria-checked={p.on}
                      className={`relative inline-flex h-4 w-7 items-center rounded-full transition-colors ${p.on ? "bg-mint-400" : "bg-white/10"}`}
                    >
                      <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-transform ${p.on ? "translate-x-3" : "translate-x-0.5"}`} />
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-mist-400">Sandbox</div>
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["gVisor", "Firecracker", "WASI"].map((s, i) => (
                  <button key={s} className={`rounded-lg border px-3 py-2 text-[12px] font-medium transition-colors ${i === 0 ? "border-mint-300/30 bg-mint-300/10 text-mint-200" : "border-white/[0.08] bg-white/[0.02] text-mist-300 hover:bg-white/[0.04]"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button className="mt-2 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white text-[13px] font-medium text-ink-950 hover:bg-mist-100">
              <Play className="h-4 w-4" /> Run 4 packs · 3,312 vectors
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
              <AlertTriangle className="h-4 w-4 text-amber-300" /> Findings · last scan
            </div>
            <span className="text-[11px] text-mist-400">RT-202605221248 · 5,000/5,000 vectors</span>
          </div>
          <table className="w-full text-left text-[12px]">
            <thead>
              <tr className="border-b border-white/[0.06] text-[10px] uppercase tracking-wider text-mist-400">
                <th className="px-5 py-2 font-medium">ID</th>
                <th className="px-5 py-2 font-medium">Severity</th>
                <th className="px-5 py-2 font-medium">Finding</th>
                <th className="px-5 py-2 font-medium">Vector</th>
                <th className="px-5 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {FINDINGS.map((f) => (
                <tr key={f.id} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                  <td className="px-5 py-3 font-mono text-mist-300">{f.id}</td>
                  <td className="px-5 py-3">
                    <span className={`rounded-md border px-1.5 py-0.5 text-[10px] uppercase ${SEV_TONE[f.severity]}`}>{f.severity}</span>
                  </td>
                  <td className="px-5 py-3 text-mist-100">{f.title}</td>
                  <td className="px-5 py-3 font-mono text-mist-400">{f.vector}</td>
                  <td className={`px-5 py-3 font-medium ${STATUS_TONE[f.status]}`}>{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </>
  );
}
