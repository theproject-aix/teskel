"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const [pending, setPending] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setTimeout(() => setPending(false), 1100);
  }

  const isSignup = mode === "signup";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-mint-300">
        {isSignup ? "Create your workspace" : "Welcome back"}
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        <span className="text-gradient-hero">{isSignup ? "Start building safer AI." : "Sign in to Teskel."}</span>
      </h1>
      <p className="mt-3 text-sm text-mist-300">
        {isSignup
          ? "Free forever for hobbyists. No card required. Upgrade when you ship to production."
          : "Use your workspace credentials, or continue with SSO."}
      </p>

      <div className="mt-8 grid gap-2">
        {[
          { label: "Continue with Google", icon: "G" },
          { label: "Continue with GitHub", icon: "GH" },
          { label: "Continue with SSO / SAML", icon: "SSO" },
        ].map((p) => (
          <button
            key={p.label}
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-[13px] font-medium text-mist-100 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
          >
            <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-ink-950 font-mono text-[10px] text-mint-300">
              {p.icon}
            </span>
            {p.label}
          </button>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-wider text-mist-500">
        <div className="h-px flex-1 bg-white/10" />
        or with email
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form className="grid gap-4" onSubmit={onSubmit}>
        {isSignup && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" name="firstName" required placeholder="Anya" />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" name="lastName" required placeholder="Kovalenko" />
            </div>
          </div>
        )}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {!isSignup && (
              <Link href="#" className="text-[11px] text-mist-300 transition-colors hover:text-white">
                Forgot?
              </Link>
            )}
          </div>
          <Input id="password" name="password" type="password" required minLength={8} placeholder="••••••••" />
        </div>

        <Button type="submit" size="lg" spotlight disabled={pending} className="mt-2 w-full">
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {isSignup ? "Creating workspace" : "Signing in"}
            </>
          ) : (
            <>
              {isSignup ? "Create workspace" : "Sign in"}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-[13px] text-mist-300">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-white transition-colors hover:text-mint-200">Sign in</Link>
          </>
        ) : (
          <>
            New to Teskel?{" "}
            <Link href="/signup" className="text-white transition-colors hover:text-mint-200">Create a workspace</Link>
          </>
        )}
      </p>
    </motion.div>
  );
}
