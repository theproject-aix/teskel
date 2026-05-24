"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    desc: "Run your first agent through a hardened gateway.",
    features: [
      "3 agents",
      "1 workspace",
      "1,000 gateway requests / month",
      "100 red-team vectors / month",
      "Basic PII masking",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/ month",
    desc: "For developers building production AI features.",
    features: [
      "10 agents",
      "50,000 gateway requests / month",
      "5,000 red-team vectors / month",
      "Policy builder",
      "PII masking + DLP",
      "Email support",
    ],
    cta: "Start Pro Trial",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$999",
    period: "/ month",
    desc: "For teams that need policy + tool firewall + RAG shield.",
    features: [
      "50 agents",
      "500K gateway requests / month",
      "Advanced red-team",
      "Tool firewall",
      "RAG Shield",
      "Slack & GitHub integration",
      "Team RBAC",
    ],
    cta: "Start Team Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For regulated industries deploying AI at scale.",
    features: [
      "Unlimited agents",
      "SSO / SAML / SCIM",
      "Dedicated tenant or BYOC",
      "On-prem / air-gapped option",
      "Custom policy packs",
      "SIEM integration",
      "Compliance reports + SLA",
      "Dedicated support",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Start free. <br className="hidden md:block" />Scale without surprises.</>}
          description="Every plan includes the gateway, audit log, and the red-team engine. Pay for the scale and the controls you actually need."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-500",
                tier.highlighted
                  ? "border-mint-300/30 bg-gradient-to-b from-mint-400/[0.06] to-ink-900 shadow-[0_30px_60px_rgba(62,230,176,0.08)]"
                  : "border-white/[0.07] bg-gradient-to-b from-ink-800/40 to-ink-900/40 hover:border-white/15",
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="rounded-full border border-mint-300/30 bg-mint-400/15 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-mint-200 backdrop-blur-md">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-[15px] font-medium text-white">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-sans text-4xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-mist-400">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist-300">{tier.desc}</p>
              </div>

              <ul className="my-6 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-mist-200">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mint-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "primary" : "secondary"}
                spotlight={tier.highlighted}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
