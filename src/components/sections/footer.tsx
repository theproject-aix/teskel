"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

const FOOTER_LINKS: Record<string, Array<{ label: string; href: string }>> = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Gateway", href: "/features" },
    { label: "Red-Team", href: "/features" },
    { label: "Guardrails", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Solutions: [
    { label: "Finance", href: "/customers" },
    { label: "Healthcare", href: "/customers" },
    { label: "Government", href: "/enterprise" },
    { label: "Customer Support", href: "/customers" },
    { label: "Developer Agents", href: "/docs" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs" },
    { label: "Security", href: "/security" },
    { label: "Compliance", href: "/compliance" },
    { label: "Status", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "Customers", href: "/customers" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Pricing", href: "/pricing" },
    { label: "Waitlist", href: "/waitlist" },
    { label: "Sign in", href: "/login" },
    { label: "Contact", href: "/waitlist" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-hairline">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern-sm opacity-30 mask-fade-y" />

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-300">
              The AI security control plane for enterprise teams. Build, red-team, govern, and deploy
              AI safely at global scale.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {["GitHub", "X", "LinkedIn", "Discord"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] text-mist-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  aria-label={s}
                >
                  {s.charAt(0)}
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, items], i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-mist-400">{heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-mist-200 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-hairline pt-8 md:flex-row">
          <p className="text-xs text-mist-400">
            © {new Date().getFullYear()} Teskel, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-mist-400">
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="/security" className="hover:text-white">Security</Link>
            <Link href="/compliance" className="hover:text-white">Compliance</Link>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="container mx-auto max-w-7xl px-4 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="select-none text-center font-sans text-[clamp(4rem,18vw,16rem)] font-bold leading-none tracking-[-0.05em]"
          aria-hidden
        >
          <span className="bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-transparent bg-clip-text text-transparent">
            TESKEL
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
