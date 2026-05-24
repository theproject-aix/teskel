"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setHidden(false);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [role=button], input, textarea, select, [data-cursor=hover]");
      setHovering(Boolean(interactive));
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerleave", leave);
    window.addEventListener("pointerenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerenter", enter);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference md:block"
        style={{
          x,
          y,
          opacity: hidden ? 0 : 1,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-mint-300/70 mix-blend-difference md:block"
        style={{
          x: ringX,
          y: ringY,
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hidden ? 0 : hovering ? 1 : 0.55,
          transition: "width .25s, height .25s, opacity .2s",
        }}
      />
    </>
  );
}
