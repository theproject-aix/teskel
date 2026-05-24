"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Bot, Network, ShieldCheck, BookLock, Settings,
  Search, Bell, ChevronRight, ChevronDown, Plus, LogOut, Activity,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, hint: "⌘ 1" },
  { href: "/agents", label: "Agents", icon: Bot, hint: "⌘ 2", badge: "12" },
  { href: "/gateway", label: "Gateway", icon: Network, hint: "⌘ 3" },
  { href: "/red-team", label: "Red-Team", icon: ShieldCheck, hint: "⌘ 4", badge: "3" },
  { href: "/policies", label: "Policies", icon: BookLock, hint: "⌘ 5" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [cmdkOpen, setCmdkOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen((v) => !v);
      }
      if (e.key === "Escape") setCmdkOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const current = NAV.find((n) => pathname?.startsWith(n.href));
  const segments = (pathname ?? "/").split("/").filter(Boolean);

  return (
    <div className="relative min-h-screen bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-60 -translate-x-full border-r border-white/[0.06] bg-ink-900/85 backdrop-blur-xl transition-transform duration-300 md:translate-x-0",
          open && "translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/dashboard"><Logo /></Link>
            <button
              aria-label="Workspace"
              className="hidden items-center gap-1 rounded-md px-1 py-1 text-mist-400 hover:bg-white/5 hover:text-white md:inline-flex"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="px-3">
            <button
              onClick={() => setCmdkOpen(true)}
              className="flex w-full items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-[12px] text-mist-400 transition-colors hover:bg-white/[0.04] hover:text-mist-200"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search…</span>
              <kbd className="ml-auto rounded border border-white/10 bg-ink-950 px-1.5 py-0.5 font-mono text-[10px] text-mist-500">⌘K</kbd>
            </button>
          </div>

          <nav className="mt-4 flex-1 space-y-0.5 px-2">
            {NAV.map((n) => {
              const active = pathname === n.href || pathname?.startsWith(`${n.href}/`);
              const Icon = n.icon;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-mist-300 hover:bg-white/[0.04] hover:text-white",
                  )}
                >
                  <Icon className={cn("h-4 w-4", active ? "text-mint-300" : "text-mist-400 group-hover:text-mist-200")} />
                  <span>{n.label}</span>
                  {n.badge && (
                    <span className="ml-auto rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-mist-300">
                      {n.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/[0.06] p-3">
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-mist-300 hover:bg-white/[0.04] hover:text-white"
            >
              <Settings className="h-4 w-4 text-mist-400" /> Settings
            </Link>
            <div className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-mint-300/20 font-mono text-[11px] font-semibold text-mint-200">A</div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[12px] font-medium text-white">Anya K.</div>
                <div className="truncate text-[10px] text-mist-500">FinSecure · Admin</div>
              </div>
              <button className="text-mist-400 hover:text-white" aria-label="Log out">
                <LogOut className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className="sticky top-0 z-30 ml-0 md:ml-60">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] bg-ink-950/80 px-4 py-3 backdrop-blur-xl md:px-6">
          <div className="flex items-center gap-2 text-[12px] text-mist-400">
            <button
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle nav"
            >
              <ChevronRight className={cn("h-4 w-4 transition-transform", open && "rotate-90")} />
            </button>
            <span className="hidden md:inline">{segments[0] ?? "dashboard"}</span>
            {segments.length > 1 && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-mist-200">{segments[1]}</span>
              </>
            )}
            {!segments.length && <span className="text-mist-200">{current?.label ?? "Overview"}</span>}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCmdkOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 text-[12px] text-mist-400 transition-colors hover:bg-white/[0.04] hover:text-mist-200 md:inline-flex"
            >
              <Search className="h-3.5 w-3.5" /> Search anywhere
              <kbd className="rounded border border-white/10 bg-ink-950 px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-mist-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
            </button>
            <button className="hidden h-9 items-center gap-1.5 rounded-lg bg-white px-3 text-[12px] font-medium text-ink-950 transition-colors hover:bg-mist-100 md:inline-flex">
              <Plus className="h-3.5 w-3.5" />
              New agent
            </button>
          </div>
        </div>
      </header>

      <main className="relative ml-0 md:ml-60">
        {children}
      </main>

      {/* Command-K modal */}
      <AnimatePresence>
        {cmdkOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
              onClick={() => setCmdkOpen(false)}
              aria-label="Close"
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-4 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <Search className="h-4 w-4 text-mist-400" />
                <input
                  autoFocus
                  placeholder="Search agents, policies, attack packs…"
                  className="flex-1 bg-transparent text-[14px] text-white placeholder:text-mist-500 focus:outline-none"
                />
                <kbd className="rounded border border-white/10 bg-ink-950 px-1.5 py-0.5 font-mono text-[10px] text-mist-400">ESC</kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-mist-500">Navigate</div>
                {NAV.map((n) => {
                  const Icon = n.icon;
                  return (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setCmdkOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] text-mist-200 hover:bg-white/[0.05] hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5 text-mist-400" />
                      {n.label}
                      <span className="ml-auto rounded border border-white/10 bg-ink-950 px-1.5 py-0.5 font-mono text-[10px] text-mist-400">
                        {n.hint}
                      </span>
                    </Link>
                  );
                })}
                <div className="mt-2 border-t border-white/[0.06] px-2 pt-2 text-[10px] uppercase tracking-wider text-mist-500">Actions</div>
                {["Create agent", "Run red-team", "Add policy", "Invite teammate"].map((a) => (
                  <button
                    key={a}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] text-mist-200 hover:bg-white/[0.05] hover:text-white"
                  >
                    <Activity className="h-3.5 w-3.5 text-mist-400" />
                    {a}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageHero({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className="border-b border-white/[0.06] px-4 py-8 md:px-8 md:py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          {eyebrow && (
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-mint-300">{eyebrow}</div>
          )}
          <h1 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{title}</h1>
          {description && <p className="mt-1.5 max-w-2xl text-sm text-mist-300">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </div>
  );
}
