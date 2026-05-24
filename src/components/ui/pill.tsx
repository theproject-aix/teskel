import * as React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  dot?: boolean;
  dotColor?: "mint" | "amber" | "rose" | "blue";
}

export function Pill({ className, dot = true, dotColor = "mint", children, ...props }: PillProps) {
  const dotColors = {
    mint: "bg-mint-300 shadow-[0_0_8px_rgba(62,230,176,0.8)]",
    amber: "bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]",
    rose: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]",
    blue: "bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.8)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-mist-100 backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", dotColors[dotColor])} />
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotColors[dotColor])} />
        </span>
      )}
      {children}
    </div>
  );
}
