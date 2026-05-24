import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";
import { PageHeader } from "@/components/marketing/page-header";
import { CTABanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Start free. Scale without surprises. Every Teskel plan includes the gateway, audit log, and red-team engine.",
};

const FAQ = [
  {
    q: "Do I pay for blocked requests?",
    a: "No. Requests blocked by policy, DLP, or the red-team engine never reach a model — and never count toward your gateway quota or token cost.",
  },
  {
    q: "Can I bring my own model API keys?",
    a: "Yes. Pro and above support BYO keys for OpenAI, Anthropic, Bedrock, Azure, Gemini, Groq, Together, and any OpenAI-compatible endpoint (Ollama, vLLM, LM Studio).",
  },
  {
    q: "What counts as a red-team vector?",
    a: "One adversarial input executed against your agent inside our sandbox. We provide 15 packs out of the box (50,000+ vectors) and you can add your own.",
  },
  {
    q: "Is there a free tier for production?",
    a: "Free is meant for development and side projects: 1 workspace, 3 agents, 1,000 gateway requests/month, 100 red-team vectors/month. No card required.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Custom per workspace based on agent count, gateway volume, red-team intensity, and deployment model (cloud, dedicated tenant, BYOC, air-gapped).",
  },
  {
    q: "Can I deploy on-prem or air-gapped?",
    a: "Yes — Enterprise plan supports fully air-gapped deployments inside your VPC, your cloud, or your data center with no outbound internet required.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Start free. Scale without surprises."
        description="Every plan includes the gateway, audit log, and red-team engine. Pay for the scale and the controls you actually need."
      />

      <Pricing showHeader={false} />

      <section className="container mx-auto max-w-3xl px-4 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
            FAQ
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            <span className="text-gradient-hero">Common questions.</span>
          </h2>
        </div>
        <div className="mt-10 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                {item.q}
                <span className="grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-mist-300 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure which tier fits?"
        description="Tell us about your agent footprint and we'll recommend the smallest plan that meets your security goals."
        primary={{ label: "Talk to sales", href: "/waitlist" }}
        secondary={{ label: "Read docs", href: "/docs" }}
      />
    </>
  );
}
