"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Bot, ArrowUpRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/app/app-shell";

const STATS = [
  { label: "Security score", value: "98", suffix: "/100", delta: "+4", icon: ShieldCheck },
  { label: "Active agents", value: "147", suffix: "", delta: "+12", icon: Bot },
  { label: "Blocked attacks", value: "2,341", suffix: "", delta: "+18%", icon: AlertTriangle },
  { label: "PII masked", value: "98.7", suffix: "%", delta: "+0.2%", icon: Activity },
];

const ALERTS = [
  { tone: "rose", title: "Prompt injection on agent_customer_support@prod", detail: "system_prompt_leakage · auto-patch ready", time: "2m ago" },
  { tone: "amber", title: "Tool firewall · refund > Rp1.000.000 awaiting approval", detail: "agent_finance_bot · @daniel notified", time: "11m ago" },
  { tone: "sky", title: "Daily red-team scan complete · 5,000/5,000 vectors passed", detail: "agent_kb_search@staging", time: "1h ago" },
];

const ACTIVITY = [
  { actor: "anya@finsecure", verb: "deployed", target: "agent_customer_support v23", time: "12:48" },
  { actor: "daniel@finsecure", verb: "approved policy", target: "policy/dlp-bfsi-v3.yaml", time: "12:31" },
  { actor: "system", verb: "auto-patched", target: "tool_refund_payment max_amount", time: "12:12" },
  { actor: "priya@finsecure", verb: "exported", target: "SOC 2 evidence pack — Q2 2026", time: "11:40" },
];

const GATEWAY = [
  { hour: "00", value: 38 }, { hour: "02", value: 26 }, { hour: "04", value: 18 },
  { hour: "06", value: 22 }, { hour: "08", value: 52 }, { hour: "10", value: 74 },
  { hour: "12", value: 88 }, { hour: "14", value: 92 }, { hour: "16", value: 96 },
  { hour: "18", value: 82 }, { hour: "20", value: 64 }, { hour: "22", value: 48 },
];

const TONE: Record<string, string> = {
  rose: "border-rose-300/30 bg-rose-300/5 text-rose-200",
  amber: "border-amber-300/30 bg-amber-300/5 text-amber-200",
  sky: "border-sky-300/30 bg-sky-300/5 text-sky-200",
};

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Overview"
        title="Hi Anya, here's what's happening across your agents."
        description="Live security posture across 4 environments. Last sync 12 seconds ago."
      />

      <div className="space-y-6 p-4 md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mint-300/10 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <div className="text-[10px] uppercase tracking-wider text-mist-400">{s.label}</div>
                <s.icon className="h-4 w-4 text-mint-300" />
              </div>
              <div className="relative mt-2 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold tabular-nums text-white">{s.value}</span>
                <span className="text-sm text-mist-400">{s.suffix}</span>
              </div>
              <div className="relative mt-1 inline-flex items-center gap-1 text-[11px] text-mint-300">
                <ArrowUpRight className="h-3 w-3" /> {s.delta}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">Gateway traffic · last 24h</h3>
                <p className="text-[11px] text-mist-400">2.4M requests · 99.99% uptime · p95 184ms</p>
              </div>
              <button className="text-[11px] text-mist-400 hover:text-white">View all →</button>
            </div>
            <div className="mt-4 flex h-32 items-end gap-2">
              {GATEWAY.map((g, i) => (
                <div key={g.hour} className="flex flex-1 flex-col items-center gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${g.value}%` }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full rounded-t bg-gradient-to-t from-mint-400/30 to-mint-300"
                  />
                  <div className="text-[9px] text-mist-500">{g.hour}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-white">Live alerts</h3>
              <span className="rounded-md border border-mint-300/20 bg-mint-300/5 px-1.5 py-0.5 text-[10px] font-medium text-mint-300">
                3 open
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {ALERTS.map((a) => (
                <div key={a.title} className={`rounded-xl border p-3 ${TONE[a.tone]}`}>
                  <div className="flex items-start justify-between gap-3 text-[12px] font-medium text-white">
                    <span>{a.title}</span>
                    <span className="shrink-0 text-[10px] text-mist-400">{a.time}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-mist-300">{a.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <div className="flex items-baseline justify-between border-b border-white/[0.06] px-5 py-4">
            <h3 className="text-sm font-semibold text-white">Recent activity</h3>
            <button className="text-[11px] text-mist-400 hover:text-white">Audit log →</button>
          </div>
          <ul className="divide-y divide-white/[0.06]">
            {ACTIVITY.map((a) => (
              <li key={a.target} className="flex items-center gap-4 px-5 py-3 text-[12px]">
                <CheckCircle2 className="h-3.5 w-3.5 text-mint-300" />
                <span className="font-mono text-mist-300">{a.actor}</span>
                <span className="text-mist-400">{a.verb}</span>
                <span className="font-mono text-white">{a.target}</span>
                <span className="ml-auto text-[10px] text-mist-500">{a.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
