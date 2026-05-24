"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] radial-glow" />
      <div className="container relative mx-auto max-w-5xl px-4 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Pill>{eyebrow}</Pill>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          <span className="text-gradient-hero">{title}</span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base text-mist-300 md:text-lg"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
