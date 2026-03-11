"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isSystemOn: boolean;
  rippleTick: number;
};

export function BootRipple({ isSystemOn, rippleTick }: Props) {
  return (
    <AnimatePresence>
      {isSystemOn && (
        <motion.span
          key={`ripple-${rippleTick}`}
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80"
          initial={{ scale: 1, opacity: 0.85 }}
          animate={{ scale: 2.2, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      )}
    </AnimatePresence>
  );
}
