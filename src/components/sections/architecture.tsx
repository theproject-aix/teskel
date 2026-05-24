"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const LAYERS = [
  {
    name: "Teskel Web Console",
    desc: "Dashboard · Agent Registry · Red-Team Studio · Policies",
    accent: "from-mint-400/15 to-mint-400/0",
    border: "border-mint-400/20",
  },
  {
    name: "Control Plane API",
    desc: "Auth · Org · RBAC · Agent Config · Billing · Audit",
    accent: "from-sky-400/15 to-sky-400/0",
    border: "border-sky-400/20",
  },
  {
    name: "AI Gateway Plane",
    desc: "Routing · PII Masking · Policy Enforcement · Logging",
    accent: "from-indigo-400/15 to-indigo-400/0",
    border: "border-indigo-400/20",
  },
  {
    name: "Security Intelligence Plane",
    desc: "Red-Team Engine · Risk Scoring · Patch Engine · Judge",
    accent: "from-violet-400/15 to-violet-400/0",
    border: "border-violet-400/20",
  },
  {
    name: "Runtime Plane",
    desc: "Sandbox · Tool Firewall · Secret Vault · Egress Control",
    accent: "from-rose-400/15 to-rose-400/0",
    border: "border-rose-400/20",
  },
  {
    name: "Data Plane",
    desc: "Postgres · Redis · Object Storage · Queue · Vector Store",
    accent: "from-amber-400/15 to-amber-400/0",
    border: "border-amber-400/20",
  },
];

export function Architecture() {
  return (
    <section id="docs" className="relative py-28 md:py-36">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Architecture"
          title={<>One control plane. <br className="hidden md:block" />Every plane secured.</>}
          description="Teskel is structured as six composable planes. Bring just the gateway, or wire up the full stack — same APIs, same audit log, same security score."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-3">
              {LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden rounded-xl border ${layer.border} bg-gradient-to-r ${layer.accent} p-4 transition-all duration-500 hover:scale-[1.01]`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-900/80 text-xs font-mono text-mist-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-semibold tracking-tight text-white">
                        {layer.name}
                      </div>
                      <div className="mt-0.5 text-xs text-mist-300">{layer.desc}</div>
                    </div>
                    <Layers className="h-4 w-4 flex-shrink-0 text-mist-500 transition-colors group-hover:text-mint-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { label: "20+ integrations", desc: "GitHub · Vercel · Cloudflare · Slack · Datadog · Splunk · Okta · Bedrock" },
                { label: "Open standards", desc: "OpenTelemetry · OPA · SLSA · Sigstore · NIST AI RMF · OWASP GenAI Top 10" },
                { label: "Deploy anywhere", desc: "Cloud, dedicated tenant, customer cloud (BYOC), or on-prem with air-gapped option." },
                { label: "BYO model", desc: "OpenAI, Anthropic, Gemini, Azure, Bedrock, Groq, Together, Ollama, or your own endpoint." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <div className="text-[14px] font-semibold tracking-tight text-white">{item.label}</div>
                  <p className="mt-1 text-sm leading-relaxed text-mist-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
