import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink-950 px-6 text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="pointer-events-none absolute inset-0 radial-glow opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <Link href="/" className="mb-8">
          <Logo />
        </Link>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mint-300">
          Error · 404
        </div>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          <span className="text-gradient-hero">Page not found.</span>
        </h1>
        <p className="mt-4 max-w-md text-balance text-base text-mist-300">
          The page you&apos;re looking for has been moved, renamed, or never existed. Let&apos;s get you back to the control plane.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-mist-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-mist-100 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </main>
  );
}
