"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Cloudflare",
  "Vercel",
  "Datadog",
  "Snyk",
  "Stripe",
  "Linear",
  "Notion",
  "Ramp",
  "Anthropic",
  "Mercury",
];

export function LogoCloud() {
  return (
    <section className="relative border-y border-hairline py-14 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-mist-400"
        >
          Trusted by security & AI teams at
        </motion.p>

        <div className="mask-fade-x mt-8 overflow-hidden">
          <div className="flex animate-marquee gap-16 whitespace-nowrap will-change-transform">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="flex-shrink-0 text-2xl font-semibold tracking-tight text-mist-400/80 grayscale transition hover:text-white hover:grayscale-0 md:text-3xl"
                style={{ fontFamily: i % 2 === 0 ? "'Inter', sans-serif" : "'JetBrains Mono', monospace" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
