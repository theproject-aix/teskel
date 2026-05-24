"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Documentation", href: "#docs" },
  { label: "Enterprise", href: "#enterprise" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3"
          : "py-5",
      )}
    >
      {/* Background blur strip on scroll */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-transparent backdrop-blur-md" />
      </div>

      <div className="container relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Pill nav (center) */}
        <div className="hidden md:block">
          <motion.div
            animate={{
              backgroundColor: scrolled ? "rgba(15,17,24,0.85)" : "rgba(15,17,24,0.55)",
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-0.5 rounded-full border border-white/[0.07] px-1 py-1 backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-4 py-1.5 text-[13px] font-medium text-mist-200 transition-colors hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 -z-10 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.06]" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* CTAs (right) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#login"
            className="text-[13px] font-medium text-mist-200 transition-colors hover:text-white"
          >
            Log In
          </Link>
          <Button size="sm" spotlight>
            Start Building
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] p-2 text-mist-100 transition-colors hover:bg-white/[0.08] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="container mx-auto max-w-6xl px-4 pt-3 md:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-ink-900/95 p-3 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-mist-100 hover:bg-white/[0.05] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
                  <Link
                    href="#login"
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-mist-100 hover:bg-white/[0.05] hover:text-white"
                  >
                    Log In
                  </Link>
                  <Button>Start Building</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
