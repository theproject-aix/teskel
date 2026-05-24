import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-mint-300/15 blur-[120px]" />

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 inline-flex">
            <Logo />
          </Link>
          {children}
        </div>
      </div>

      <aside className="relative hidden flex-1 border-l border-white/[0.06] bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 lg:flex lg:items-center lg:justify-center lg:px-12">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-mint-300/10 blur-3xl" />
        <div className="relative max-w-md">
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-300/20 bg-mint-300/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-mint-300">
            Trusted by security teams
          </div>
          <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl">
            &ldquo;Teskel cut our agent-to-production time from 8 weeks to 5 days. The red-team gate in CI is non-negotiable now.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-mint-300/20 font-medium text-mint-200">A</div>
            <div>
              <div className="text-sm text-white">Anya Kovalenko</div>
              <div className="text-[12px] text-mist-400">VP Engineering · FinSecure</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 text-center">
            {[
              { value: "5,000+", label: "agents secured" },
              { value: "2.4M", label: "attacks blocked / mo" },
              { value: "99.99%", label: "gateway uptime" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="font-display text-lg font-semibold text-white">{s.value}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-mist-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}
