"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner({
  title,
  description,
  primary = { label: "Start free", href: "/signup" },
  secondary = { label: "Talk to sales", href: "/enterprise" },
}: {
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-mint-300/[0.06] via-white/[0.02] to-transparent px-6 py-16 text-center md:px-16 md:py-20"
      >
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-mint-300/20 blur-3xl" />
        <h2 className="relative font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          <span className="text-gradient-hero">{title}</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-balance text-mist-300 md:text-lg">{description}</p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={primary.href}>
            <Button size="lg" spotlight>
              {primary.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href={secondary.href}>
            <Button size="lg" variant="ghost">{secondary.label}</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
