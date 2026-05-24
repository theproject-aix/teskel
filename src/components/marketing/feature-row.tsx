"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type FeatureRowProps = {
  icon?: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  reverse?: boolean;
  visual: React.ReactNode;
};

export function FeatureRow({
  icon,
  eyebrow,
  title,
  description,
  bullets,
  reverse,
  visual,
}: FeatureRowProps) {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div
        className={cn(
          "grid items-center gap-12 lg:gap-16",
          reverse ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(reverse && "lg:order-2")}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
            {icon}
            {eyebrow}
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            <span className="text-gradient-hero">{title}</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-mist-300 md:text-[17px]">{description}</p>
          {bullets && (
            <ul className="mt-6 grid gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-mist-200">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint-300" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8",
            reverse && "lg:order-1",
          )}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-mint-300/[0.04] via-transparent to-transparent" />
          <div className="relative">{visual}</div>
        </motion.div>
      </div>
    </section>
  );
}
