import type { Metadata } from "next";
import { WaitlistForm } from "./waitlist-form";
import { PageHeader } from "@/components/marketing/page-header";
import { Building2, ShieldCheck, Users, BookCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description: "Teskel Enterprise is in private beta. Tell us about your AI footprint and we'll respond within 48 hours.",
};

const PROOF = [
  { icon: Building2, label: "Used by regulated banks, healthcare networks, and AI-native startups" },
  { icon: ShieldCheck, label: "SOC 2 Type II, ISO 27001, ISO 42001 certified" },
  { icon: Users, label: "Dedicated security architect on-call from week 0" },
  { icon: BookCheck, label: "DPA, BAA, security questionnaires returned within 48 hours" },
];

export default function WaitlistPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private Beta · Enterprise"
        title="Join the Teskel waitlist."
        description="Tell us about your AI footprint and we'll respond within 48 hours with a tailored pilot proposal."
      />

      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-4">
            {PROOF.map((p) => (
              <div key={p.label} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mint-300/20 bg-mint-300/5 text-mint-300">
                  <p.icon className="h-4 w-4" />
                </div>
                <p className="pt-1 text-[13px] leading-relaxed text-mist-200">{p.label}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-mint-300/20 bg-gradient-to-br from-mint-300/[0.06] via-white/[0.02] to-transparent p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-mint-300">No surprise pricing</div>
              <p className="mt-2 text-[13px] text-mist-200">
                Pilot programs include the gateway, red-team engine, policy builder, and a 30-day evidence pack at a fixed fee.
              </p>
            </div>
          </aside>

          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
