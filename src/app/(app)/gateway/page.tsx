"use client";

import { motion } from "framer-motion";
import { Network, Globe, Filter, Pause } from "lucide-react";
import { PageHero } from "@/components/app/app-shell";

const METRICS = [
  { label: "Requests / min", value: "1,842", trend: "+12%" },
  { label: "p95 latency", value: "184ms", trend: "-12ms" },
  { label: "Cache hit rate", value: "38.4%", trend: "+2.1" },
  { label: "Blocked", value: "0.31%", trend: "-0.04" },
];

const ROUTES = [
  { name: "openai", traffic: 62, status: "healthy" },
  { name: "anthropic", traffic: 26, status: "healthy" },
  { name: "bedrock", traffic: 9, status: "healthy" },
  { name: "ollama", traffic: 3, status: "degraded" },
];

const LOGS = [
  { time: "12:48:01", agent: "customer_support@prod", model: "gpt-4o", action: "allow", ms: 162, tokens: 612 },
  { time: "12:47:58", agent: "kb_search@prod", model: "claude-3.5-sonnet", action: "cache_hit", ms: 18, tokens: 0 },
  { time: "12:47:54", agent: "finance_assistant@prod", model: "gpt-4o-mini", action: "mask_pii", ms: 198, tokens: 312 },
  { time: "12:47:50", agent: "refund_workflow@prod", model: "claude-3-opus", action: "approve_required", ms: 220, tokens: 504 },
  { time: "12:47:42", agent: "ops_copilot@staging", model: "gpt-4.1", action: "block_injection", ms: 14, tokens: 0 },
  { time: "12:47:38", agent: "customer_support@prod", model: "gpt-4o", action: "allow", ms: 174, tokens: 488 },
  { time: "12:47:31", agent: "kb_search@prod", model: "claude-3.5-sonnet", action: "allow", ms: 232, tokens: 720 },
  { time: "12:47:24", agent: "compliance_assistant@staging", model: "claude-3.5-sonnet", action: "allow", ms: 188, tokens: 244 },
];

const ACTION_TONE: Record<string, string> = {
  allow: "border-mint-300/30 bg-mint-300/10 text-mint-200",
  cache_hit: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  mask_pii: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  approve_required: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  block_injection: "border-rose-300/30 bg-rose-300/10 text-rose-200",
};

export default function GatewayPage() {
  return (
    <>
      <PageHero
        eyebrow="Gateway"
        title="Live AI Gateway"
        description="Edge-routed, policy-aware, semantic-cached. Every model call passes through here."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[12px] text-mist-200 hover:bg-white/[0.04] hover:text-white">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3 text-[12px] font-medium text-ink-950 hover:bg-mist-100">
              <Pause className="h-3.5 w-3.5" /> Pause stream
            </button>
          </>
        }
      />

      <div className="space-y-6 p-4 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <div className="text-[10px] uppercase tracking-wider text-mist-400">{m.label}</div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="font-display text-2xl font-semibold tabular-nums text-white">{m.value}</span>
                <span className="text-[11px] text-mint-300">{m.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Globe className="h-4 w-4 text-mint-300" /> Provider routing
            </div>
            <div className="mt-4 space-y-3">
              {ROUTES.map((r, i) => (
                <div key={r.name}>
                  <div className="mb-1 flex items-center justify-between text-[12px]">
                    <span className="font-mono text-mist-200">{r.name}</span>
                    <span className="tabular-nums text-mist-400">{r.traffic}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.04]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${r.traffic}%` }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${r.status === "healthy" ? "bg-gradient-to-r from-mint-400/40 to-mint-300" : "bg-amber-400/70"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Network className="h-4 w-4 text-mint-300" />
                Live requests
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-300/30 bg-mint-300/10 px-2 py-0.5 text-[10px] font-medium text-mint-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-300 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-300" />
                </span>
                Streaming
              </span>
            </div>
            <div className="max-h-[420px] overflow-y-auto font-mono text-[11px]">
              <table className="w-full">
                <tbody>
                  {LOGS.map((l) => (
                    <tr key={l.time} className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]">
                      <td className="whitespace-nowrap px-4 py-2.5 text-mist-500">{l.time}</td>
                      <td className="px-4 py-2.5 text-mist-200">{l.agent}</td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-mist-300">{l.model}</td>
                      <td className="px-4 py-2.5">
                        <span className={`rounded-md border px-1.5 py-0.5 text-[10px] ${ACTION_TONE[l.action]}`}>
                          {l.action}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-right tabular-nums text-mist-300">{l.ms}ms</td>
                      <td className="whitespace-nowrap px-4 py-2.5 text-right tabular-nums text-mist-500">{l.tokens}t</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
