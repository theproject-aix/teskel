"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [state, setState] = React.useState<FormState>("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong");
      }
      setState("success");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-mint-300/20 bg-gradient-to-br from-mint-300/[0.08] via-white/[0.02] to-transparent p-10 text-center"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-mint-300/30 bg-mint-300/10 text-mint-300">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">You&apos;re on the list.</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-mist-300">
              A solutions engineer will reach out within 48 hours with next steps, pilot scope, and pricing.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" required placeholder="Anya" />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" required placeholder="Kovalenko" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="anya@finsecure.com"
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required placeholder="FinSecure" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select id="role" name="role" required defaultValue="">
                  <option value="" disabled>Select role</option>
                  <option>Founder / CEO</option>
                  <option>CISO / Security</option>
                  <option>CTO / VP Eng</option>
                  <option>Compliance</option>
                  <option>Product / Eng</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select id="industry" name="industry" required defaultValue="">
                  <option value="" disabled>Select industry</option>
                  <option>Finance / Banking</option>
                  <option>Healthcare</option>
                  <option>Government</option>
                  <option>SaaS / Tech</option>
                  <option>Retail / E-commerce</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="agents">Agents in production</Label>
                <Select id="agents" name="agents" defaultValue="">
                  <option value="" disabled>Select size</option>
                  <option>None yet — exploring</option>
                  <option>1–3</option>
                  <option>4–10</option>
                  <option>11–50</option>
                  <option>50+</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes">What are you trying to ship?</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Customer support agent · 14k chats/day · concerned about prompt injection and PII leakage to GPT-4o."
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 rounded-xl border border-rose-300/30 bg-rose-300/5 px-4 py-3 text-[13px] text-rose-200">
                {error}
              </div>
            )}

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-[11px] text-mist-400">
                By submitting you agree to our{" "}
                <a href="#" className="text-mist-200 underline-offset-2 hover:text-white hover:underline">privacy policy</a>.
              </p>
              <Button type="submit" size="lg" spotlight disabled={state === "submitting"}>
                {state === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting
                  </>
                ) : (
                  <>
                    Request access
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
