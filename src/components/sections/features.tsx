"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Database,
  Network,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

function FeatureCard({ icon: Icon, title, description, className, children, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-ink-800/60 to-ink-900/60 p-6 transition-colors duration-500 hover:border-white/15",
        className,
      )}
    >
      {/* Hover shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-mint-400/[0.08] via-transparent to-indigo-500/[0.08]" />
      </div>

      {/* Visual */}
      {children && (
        <div className="relative mb-6 flex flex-1 items-center justify-center">{children}</div>
      )}

      {/* Icon + text */}
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-mint-300">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-[17px] font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mist-300">{description}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Platform"
          title={<>Everything your AI agents need <br className="hidden md:block" />to ship safely</>}
          description="Six tightly-integrated modules that work as one control plane — from request entering the gateway, to red-team evidence, to production audit logs."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {/* Gateway - large */}
          <FeatureCard
            icon={Network}
            title="AI Gateway"
            description="One secure pipe for every model request. Multi-provider routing, semantic cache, cost optimizer, and edge-aware latency."
            className="md:col-span-4"
            delay={0}
          >
            <GatewayVisual />
          </FeatureCard>

          {/* Red-Team - small */}
          <FeatureCard
            icon={ShieldAlert}
            title="Automated Red-Team"
            description="Attack your agents before attackers do. 15 OWASP-grade attack packs, auto-patch and retest."
            className="md:col-span-2"
            delay={0.05}
          >
            <RedTeamVisual />
          </FeatureCard>

          {/* Guardrail - small */}
          <FeatureCard
            icon={ShieldCheck}
            title="Guardrail Studio"
            description="Turn company AI policy into enforceable runtime rules. Natural language, code, or visual builder."
            className="md:col-span-2"
            delay={0.1}
          >
            <GuardrailVisual />
          </FeatureCard>

          {/* Data Shield - medium */}
          <FeatureCard
            icon={Database}
            title="Data Shield (DLP)"
            description="Mask, redact, tokenize, or block sensitive data before it ever reaches an external model — at line rate."
            className="md:col-span-2"
            delay={0.15}
          >
            <DataShieldVisual />
          </FeatureCard>

          {/* Tool Firewall - medium */}
          <FeatureCard
            icon={Workflow}
            title="Tool Firewall"
            description="Stop unsafe tool calls before they cause real-world damage. Allowlists, risk scores, human approval flows."
            className="md:col-span-2"
            delay={0.2}
          >
            <ToolFirewallVisual />
          </FeatureCard>

          {/* Observability - wide */}
          <FeatureCard
            icon={Activity}
            title="AI Observability + Compliance"
            description="Traces, metrics, logs, and audit-ready reports mapped to NIST AI RMF, OWASP GenAI Top 10, and SOC 2."
            className="md:col-span-6"
            delay={0.25}
          >
            <ObservabilityVisual />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function GatewayVisual() {
  return (
    <div className="grid w-full grid-cols-3 items-center gap-3 px-2 py-6 font-mono text-[11px]">
      <div className="space-y-2 text-right text-mist-300">
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">/v1/gateway/chat</div>
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">/agents/invoke</div>
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">/embeddings</div>
      </div>

      <div className="relative flex flex-col items-center gap-2">
        <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-mint-300/50 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-mint-300/30 bg-mint-400/10"
        >
          <div className="absolute inset-0 animate-pulse-soft rounded-full bg-mint-400/20 blur-xl" />
          <span className="relative font-semibold text-mint-200">T</span>
        </motion.div>
        <span className="text-[10px] text-mist-400">Teskel Edge</span>
      </div>

      <div className="space-y-2 text-mist-300">
        <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-300" /> OpenAI
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-300" /> Anthropic
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-300" /> Bedrock
        </div>
      </div>
    </div>
  );
}

function RedTeamVisual() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-4">
      <svg viewBox="0 0 200 130" className="h-32 w-full" fill="none">
        <defs>
          <linearGradient id="rt-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3EE6B0" />
            <stop offset="100%" stopColor="#13B582" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="100"
          cy="70"
          r="44"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          fill="none"
        />
        <motion.circle
          cx="100"
          cy="70"
          r="44"
          stroke="url(#rt-grad)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="276"
          initial={{ strokeDashoffset: 276 }}
          whileInView={{ strokeDashoffset: 5.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          strokeLinecap="round"
          transform="rotate(-90 100 70)"
        />
        <text x="100" y="68" textAnchor="middle" className="fill-white text-[24px] font-bold">
          98
        </text>
        <text x="100" y="84" textAnchor="middle" className="fill-mist-400 text-[8px] font-mono uppercase tracking-wider">
          /100
        </text>
      </svg>
      <div className="mt-1 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-mint-300">
        <CheckCircle2 className="h-3 w-3" /> Production Ready
      </div>
    </div>
  );
}

function GuardrailVisual() {
  return (
    <div className="w-full space-y-2 py-3 font-mono text-[11px]">
      {[
        { type: "block", text: "external_model contains PII", color: "rose" },
        { type: "mask", text: "agent.respond if salary mentioned", color: "amber" },
        { type: "allow", text: "support_bot * tools=[search,faq]", color: "mint" },
      ].map((rule, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
          className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5"
        >
          <span
            className={cn(
              "rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase",
              rule.color === "rose" && "bg-rose-400/15 text-rose-300",
              rule.color === "amber" && "bg-amber-300/15 text-amber-200",
              rule.color === "mint" && "bg-mint-400/15 text-mint-300",
            )}
          >
            {rule.type}
          </span>
          <span className="truncate text-mist-300">{rule.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

function DataShieldVisual() {
  return (
    <div className="w-full space-y-2 py-3 font-mono text-[11px] text-mist-300">
      <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
        <div className="text-[9px] uppercase tracking-wider text-mist-400">Input</div>
        <div className="mt-0.5 text-mist-200">
          Cek rekening <span className="bg-rose-400/15 text-rose-200">1234567890</span> milik <span className="bg-rose-400/15 text-rose-200">Budi</span>
        </div>
      </div>
      <div className="flex items-center justify-center text-mist-500">↓ Teskel DLP</div>
      <div className="rounded-md border border-mint-400/20 bg-mint-400/5 p-2.5">
        <div className="text-[9px] uppercase tracking-wider text-mint-300">To model</div>
        <div className="mt-0.5 text-mist-100">
          Cek rekening <span className="text-mint-300">[BANK_ACCOUNT_REDACTED]</span> milik <span className="text-mint-300">[PERSON_REDACTED]</span>
        </div>
      </div>
    </div>
  );
}

function ToolFirewallVisual() {
  return (
    <div className="w-full space-y-2 py-3 font-mono text-[11px]">
      <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5 text-mist-200">
        <div className="text-[9px] uppercase tracking-wider text-mist-400">tool_call</div>
        <div className="mt-0.5">refund_payment(<span className="text-amber-200">amount=2_500_000</span>)</div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center gap-2 rounded-md border border-amber-300/30 bg-amber-300/5 p-2.5 text-amber-200"
      >
        <ShieldAlert className="h-3 w-3" />
        <span>Requires manager approval · over Rp1.000.000</span>
      </motion.div>
    </div>
  );
}

const OBS_BARS: Array<{ allowed: number; blocked: number }> = [
  { allowed: 52, blocked: 11 }, { allowed: 60, blocked: 9 }, { allowed: 68, blocked: 12 },
  { allowed: 72, blocked: 8 }, { allowed: 64, blocked: 14 }, { allowed: 58, blocked: 6 },
  { allowed: 48, blocked: 10 }, { allowed: 56, blocked: 7 }, { allowed: 66, blocked: 13 },
  { allowed: 74, blocked: 9 }, { allowed: 82, blocked: 11 }, { allowed: 78, blocked: 6 },
  { allowed: 70, blocked: 10 }, { allowed: 62, blocked: 8 }, { allowed: 54, blocked: 12 },
  { allowed: 46, blocked: 7 }, { allowed: 52, blocked: 9 }, { allowed: 60, blocked: 11 },
  { allowed: 68, blocked: 13 }, { allowed: 76, blocked: 10 }, { allowed: 84, blocked: 8 },
  { allowed: 80, blocked: 12 }, { allowed: 72, blocked: 9 }, { allowed: 64, blocked: 6 },
  { allowed: 58, blocked: 14 }, { allowed: 66, blocked: 10 }, { allowed: 74, blocked: 8 },
  { allowed: 82, blocked: 7 },
];

function ObservabilityVisual() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 py-4 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-medium text-mist-200">Requests · 24h</div>
          <div className="flex items-center gap-3 text-[10px] text-mist-400">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-mint-300" /> allowed</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-400" /> blocked</span>
          </div>
        </div>
        <div className="mt-3 flex h-24 items-end gap-1.5">
          {OBS_BARS.map((d, i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end gap-px">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${d.blocked}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-t bg-rose-400/70"
              />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${d.allowed}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-t bg-gradient-to-t from-mint-400/40 to-mint-300"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:col-span-1">
        {[
          { label: "Latency p95", value: "184ms", delta: "-12ms" },
          { label: "Token cost", value: "$1,284", delta: "-22%" },
          { label: "Findings", value: "3", delta: "0 critical" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="text-[10px] uppercase tracking-wider text-mist-400">{stat.label}</div>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="text-base font-semibold tabular-nums text-white">{stat.value}</span>
              <span className="inline-flex items-center gap-0.5 text-[10px] text-mint-300"><ArrowUpRight className="h-2.5 w-2.5" />{stat.delta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
