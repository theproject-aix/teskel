"use client";

import { motion } from "framer-motion";
import { Bot, Search, Filter, MoreHorizontal, ShieldCheck, CircleDot } from "lucide-react";
import { PageHero } from "@/components/app/app-shell";

const AGENTS = [
  { name: "customer_support", env: "prod", model: "gpt-4o", traffic: "182k", score: 98, latency: "172ms", status: "healthy" },
  { name: "kb_search", env: "prod", model: "claude-3.5-sonnet", traffic: "94k", score: 95, latency: "210ms", status: "healthy" },
  { name: "finance_assistant", env: "prod", model: "gpt-4o-mini", traffic: "47k", score: 91, latency: "168ms", status: "warn" },
  { name: "refund_workflow", env: "prod", model: "claude-3-opus", traffic: "12k", score: 99, latency: "240ms", status: "healthy" },
  { name: "ops_copilot", env: "staging", model: "gpt-4.1", traffic: "8.2k", score: 88, latency: "190ms", status: "warn" },
  { name: "compliance_assistant", env: "staging", model: "claude-3.5-sonnet", traffic: "2.1k", score: 97, latency: "204ms", status: "healthy" },
  { name: "recruiter_bot", env: "dev", model: "gpt-4o-mini", traffic: "640", score: 82, latency: "150ms", status: "issue" },
  { name: "internal_qna", env: "dev", model: "llama-3.1-70b", traffic: "320", score: 94, latency: "120ms", status: "healthy" },
];

const ENV_TONE: Record<string, string> = {
  prod: "border-mint-300/30 bg-mint-300/10 text-mint-200",
  staging: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  dev: "border-sky-300/30 bg-sky-300/10 text-sky-200",
};

const STATUS_TONE: Record<string, string> = {
  healthy: "text-mint-300",
  warn: "text-amber-300",
  issue: "text-rose-300",
};

export default function AgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Registry"
        title="Agents"
        description="Every agent registered in this workspace, grouped by environment. Click to inspect or deploy a new version."
        actions={
          <>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 text-[12px] text-mist-200 hover:bg-white/[0.04] hover:text-white">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-3 text-[12px] font-medium text-ink-950 hover:bg-mist-100">
              <Bot className="h-3.5 w-3.5" /> New agent
            </button>
          </>
        }
      />

      <div className="p-4 md:p-8">
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2">
          <Search className="ml-2 h-4 w-4 text-mist-400" />
          <input
            placeholder="Search agents, models, owners…"
            className="flex-1 bg-transparent text-[13px] text-white placeholder:text-mist-500 focus:outline-none"
          />
          <div className="flex gap-1">
            {["All", "Prod", "Staging", "Dev"].map((f, i) => (
              <button
                key={f}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  i === 0 ? "bg-white/[0.08] text-white" : "text-mist-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.06] text-[10px] uppercase tracking-wider text-mist-400">
                <th className="px-5 py-3 font-medium">Agent</th>
                <th className="px-5 py-3 font-medium">Env</th>
                <th className="px-5 py-3 font-medium">Model</th>
                <th className="px-5 py-3 font-medium">24h traffic</th>
                <th className="px-5 py-3 font-medium">p95</th>
                <th className="px-5 py-3 font-medium">Score</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {AGENTS.map((a, i) => (
                <motion.tr
                  key={a.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="grid h-7 w-7 place-items-center rounded-md border border-mint-300/20 bg-mint-300/5 text-mint-300">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-mono text-white">{a.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] uppercase ${ENV_TONE[a.env]}`}>{a.env}</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-mist-200">{a.model}</td>
                  <td className="px-5 py-3 tabular-nums text-mist-200">{a.traffic}</td>
                  <td className="px-5 py-3 tabular-nums text-mist-300">{a.latency}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 text-mist-100">
                      <ShieldCheck className="h-3 w-3 text-mint-300" /> {a.score}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1.5 ${STATUS_TONE[a.status]}`}>
                      <CircleDot className="h-3 w-3" />
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right text-mist-400">
                    <button aria-label="More" className="rounded p-1 hover:bg-white/5 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </>
  );
}
