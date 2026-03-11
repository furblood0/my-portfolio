"use client";

import { motion } from "framer-motion";
import { type ComputedModule } from "@/lib/modules";

type Props = {
  module: ComputedModule;
  index: number;
  isSystemOn: boolean;
};

export function ModuleButton({ module, index, isSystemOn }: Props) {
  const routeDelay = 0.28 + index * 0.62;
  const moduleDelay = routeDelay + 2.85;

  return (
    <motion.button
      key={module.id}
      type="button"
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-slate-950/80 px-6 py-3 font-mono text-sm tracking-[0.16em] text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-300"
      style={{
        left: module.x,
        top: module.y,
        pointerEvents: isSystemOn ? "auto" : "none",
      }}
      initial={false}
      animate={{
        opacity: isSystemOn ? 1 : 0,
        borderColor: isSystemOn ? "rgba(71,85,105,0.85)" : "rgba(71,85,105,0)",
      }}
      transition={
        isSystemOn
          ? {
              opacity: { duration: 0.8, delay: moduleDelay },
              borderColor: { duration: 0.6, delay: moduleDelay + 0.1 },
            }
          : { opacity: { duration: 0.2 }, borderColor: { duration: 0.15 } }
      }
    >
      <motion.span
        className="absolute inset-0 rounded-[10px] border border-cyan-300/50"
        initial={false}
        animate={{ opacity: isSystemOn ? [0, 0.75, 0.15] : 0 }}
        transition={
          isSystemOn
            ? { duration: 1.2, delay: moduleDelay + 0.2, times: [0, 0.35, 1] }
            : { duration: 0.2 }
        }
      />
      <span className="relative z-10">{module.label}</span>
    </motion.button>
  );
}
