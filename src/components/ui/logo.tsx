import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white text-ink-950">
        <span className="text-base font-bold leading-none tracking-tight">T</span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white to-mint-200 opacity-40 mix-blend-overlay" />
      </div>
      <span className="text-[15px] font-semibold tracking-tight text-white">Teskel</span>
    </div>
  );
}
