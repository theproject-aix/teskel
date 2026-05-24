"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const TESTIMONIALS = [
  {
    quote:
      "Teskel cut our agent-to-production time from 8 weeks to 5 days. Red-team gate in CI is non-negotiable now.",
    name: "Anya Kovalenko",
    role: "VP Engineering · FinSecure",
    initial: "A",
    accent: "from-mint-400/30 to-mint-400/0",
    stat: "8w → 5d",
    statLabel: "TTM agents",
  },
  {
    quote:
      "We caught 14 prompt-injection paths in our customer agent in week one. Auto-patch closed 11 of them before our team woke up.",
    name: "Daniel Park",
    role: "CISO · NorthBank",
    initial: "D",
    accent: "from-indigo-400/30 to-indigo-400/0",
    stat: "0",
    statLabel: "leaks in prod",
  },
  {
    quote:
      "The compliance center alone replaces three internal tools. SOC 2 evidence now exports in under a minute.",
    name: "Priya Subramanian",
    role: "Head of Compliance · Helix Health",
    initial: "P",
    accent: "from-violet-400/30 to-violet-400/0",
    stat: "1 min",
    statLabel: "SOC 2 export",
  },
];

export function Customers() {
  return (
    <section id="customers" className="relative py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Customers"
          title={<>Loved by teams shipping <br className="hidden md:block" />production-grade AI.</>}
          description="From regulated banks to high-growth AI startups — Teskel is the policy layer between curiosity and consequence."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-ink-800/60 to-ink-900/60 p-6 transition-colors hover:border-white/15"
            >
              <div
                className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${t.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <Quote className="h-5 w-5 text-mist-400 opacity-60" />
              <blockquote className="text-[15px] leading-relaxed text-mist-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.06] pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-white/15 to-white/5 text-sm font-semibold text-white">
                    {t.initial}
                  </div>
                  <figcaption>
                    <div className="text-[13px] font-medium text-white">{t.name}</div>
                    <div className="text-[11px] text-mist-400">{t.role}</div>
                  </figcaption>
                </div>
                <div className="text-right">
                  <div className="font-mono text-base font-semibold text-mint-300">{t.stat}</div>
                  <div className="text-[10px] uppercase tracking-wider text-mist-500">{t.statLabel}</div>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
