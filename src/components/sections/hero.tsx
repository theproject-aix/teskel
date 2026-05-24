"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";

const WORDS = ["Deploy Intelligence.", "With Zero Risk."];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 md:pt-44 lg:pt-52">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern mask-fade-y opacity-70" />
        <div className="absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow-blue opacity-60 blur-3xl" />

        {/* Aurora */}
        <div className="absolute left-1/2 top-0 -z-10 h-[820px] w-[820px] -translate-x-1/2">
          <div className="aurora absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, rgba(62,230,176,0.45), rgba(99,102,241,0.35), rgba(62,230,176,0.45))",
            }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-x-0 top-0 h-screen bg-gradient-to-b from-transparent via-transparent to-ink-950" />
      </div>

      <div className="container relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Pill dotColor="mint">Teskel Engine v2.0 is live</Pill>
        </motion.div>

        <h1 className="mt-8 max-w-5xl text-balance font-sans text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em]">
          {WORDS.map((line, lineIdx) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + lineIdx * 0.12,
                }}
                className="inline-block text-gradient-hero"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-mist-300 md:text-lg"
        >
          The unified infrastructure to build autonomous agents, stress-test against
          adversarial attacks, and scale globally on edge networks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button size="lg" spotlight className="group">
            Enter Workspace
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <Button size="lg" variant="secondary">
            <Sparkles className="h-4 w-4" />
            Book Enterprise Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[12.5px] text-mist-400"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-mint-300" />
            SOC 2 Type II
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-mist-500" />
          <span>GDPR-ready</span>
          <span className="h-0.5 w-0.5 rounded-full bg-mist-500" />
          <span>OWASP GenAI Top 10</span>
          <span className="h-0.5 w-0.5 rounded-full bg-mist-500" />
          <span>NIST AI RMF</span>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="relative mt-20 w-full max-w-5xl"
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-b from-mint-400/20 via-indigo-500/10 to-transparent opacity-60 blur-3xl" />
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-mint-300/70" />
        </div>
        <div className="flex items-center gap-2 rounded-md border border-white/5 bg-ink-800 px-3 py-1.5 text-[11px] font-mono text-mist-300">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-300 shadow-[0_0_6px_rgba(62,230,176,0.8)]" />
          app.teskel.ai/dashboard
        </div>
        <div className="h-5 w-12" />
      </div>

      {/* Body */}
      <div className="grid grid-cols-12 gap-px bg-white/5">
        {/* Sidebar */}
        <div className="col-span-2 hidden flex-col gap-1 bg-ink-900 p-3 md:flex">
          {["Overview", "Agents", "Gateway", "Red-Team", "Policies", "Incidents"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                i === 3
                  ? "bg-white/[0.06] text-white"
                  : "text-mist-400"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="col-span-12 flex flex-col gap-3 bg-ink-900 p-4 md:col-span-10">
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Security Score", value: "98", suffix: "/100", trend: "+4" },
              { label: "Active Agents", value: "147", suffix: "", trend: "+12" },
              { label: "Blocked Attacks", value: "2,341", suffix: "", trend: "+18%" },
              { label: "PII Masked", value: "98.7", suffix: "%", trend: "+0.2%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.08 }}
                className="rounded-lg border border-white/[0.06] bg-ink-800/60 p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-mist-400">{stat.label}</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-xl font-semibold tabular-nums text-white">{stat.value}</span>
                  <span className="text-xs text-mist-400">{stat.suffix}</span>
                </div>
                <div className="mt-0.5 text-[10px] font-medium text-mint-300">{stat.trend}</div>
              </motion.div>
            ))}
          </div>

          {/* Red-team scan */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <div className="md:col-span-3 rounded-lg border border-white/[0.06] bg-ink-800/60 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-mist-200">Red-Team Live Scan</div>
                  <div className="text-[10px] text-mist-400">customer-support-agent · 4,832 / 5,000 vectors</div>
                </div>
                <span className="rounded-full bg-mint-400/10 px-2 py-0.5 text-[10px] font-medium text-mint-300">RUNNING</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "96%" }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 1.6 }}
                  className="h-full rounded-full bg-gradient-to-r from-mint-400 to-indigo-400"
                />
              </div>
              <div className="mt-4 space-y-1.5 font-mono text-[10px]">
                {[
                  { ok: true, msg: "Prompt injection: 1,000/1,000 passed" },
                  { ok: true, msg: "Jailbreak vectors: 800/800 passed" },
                  { ok: false, msg: "Tool abuse: 1 critical finding — auto-patched" },
                  { ok: true, msg: "Data exfiltration: 600/600 passed" },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.7 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className={line.ok ? "text-mint-300" : "text-amber-300"}>
                      {line.ok ? "✓" : "!"}
                    </span>
                    <span className="text-mist-300">{line.msg}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 rounded-lg border border-white/[0.06] bg-ink-800/60 p-4">
              <div className="text-[11px] font-medium text-mist-200">Gateway Traffic</div>
              <div className="text-[10px] text-mist-400">Last 24h · all regions</div>
              <div className="mt-4 flex h-20 items-end gap-1">
                {[20, 35, 28, 48, 42, 55, 60, 50, 72, 65, 80, 75, 90, 85, 70, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 1.6 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t bg-gradient-to-t from-mint-400/30 via-mint-300 to-mint-200"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px]">
                <span className="text-mist-400">2.4M req</span>
                <span className="text-mint-300">+18.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
