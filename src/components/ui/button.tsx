"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-300/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-ink-950 hover:bg-mint-100 hover:shadow-[0_8px_30px_rgba(62,230,176,0.25)]",
        secondary:
          "border border-white/10 bg-white/[0.02] text-mist-100 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
        ghost: "text-mist-200 hover:bg-white/[0.05] hover:text-white",
        accent:
          "bg-mint-400 text-ink-950 hover:bg-mint-300 hover:shadow-[0_8px_30px_rgba(62,230,176,0.4)]",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    spotlight?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, spotlight = false, children, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const background = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, rgba(62,230,176,0.18), transparent 65%)`;

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }}
        className={cn(buttonVariants({ variant, size }), "relative overflow-hidden", className)}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {spotlight && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background }}
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </motion.button>
    );
  },
);
Button.displayName = "Button";
