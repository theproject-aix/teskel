"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnterpriseCTA() {
  return (
    <section id="enterprise" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800/80 to-ink-900 p-10 md:p-16"
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(62,230,176,0.18), transparent), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,102,241,0.12), transparent)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 grid-pattern-sm opacity-40 mask-fade-y" />

          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/30 bg-mint-400/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-mint-200 backdrop-blur-md">
              <Sparkles className="h-3 w-3" />
              For Enterprise Teams
            </div>

            <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.02em] text-gradient-hero md:text-5xl">
              Build AI fast. Govern it safely. <br />
              Deploy with confidence.
            </h2>

            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-mist-300 md:text-lg">
              Dedicated tenant, BYOC or air-gapped deployment, SSO/SAML, SCIM provisioning,
              SIEM integration, NIST AI RMF + SOC 2 mapping, and a named security
              architect on-call.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button size="lg" spotlight className="group">
                Book Enterprise Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="secondary">
                Download SOC 2 report
              </Button>
            </div>

            <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 border-t border-white/[0.06] pt-8 md:grid-cols-4">
              {[
                { value: "5,000+", label: "agents secured" },
                { value: "2.4M", label: "attacks blocked / month" },
                { value: "99.99%", label: "gateway uptime" },
                { value: "< 80ms", label: "p95 added latency" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-2xl font-semibold text-white">{s.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-mist-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
