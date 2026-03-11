"use client";

import { motion } from "framer-motion";
import { type ComputedModule } from "@/lib/modules";

type Props = {
  module: ComputedModule;
  index: number;
  isSystemOn: boolean;
  isActive: boolean;
  onToggle: (id: string) => void;
};

export function ModuleButton({ module, index, isSystemOn, isActive, onToggle }: Props) {
  const routeDelay = 0.28 + index * 0.62;
  const moduleDelay = routeDelay + 2.85;

  return (
    <motion.button
      type="button"
      onClick={() => isSystemOn && onToggle(module.id)}
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-slate-950/80 px-6 py-3 font-mono text-sm tracking-[0.16em] transition ${
        isSystemOn ? "cursor-pointer" : "cursor-default pointer-events-none"
      } ${isActive ? "text-cyan-300" : "text-slate-200 hover:text-cyan-300"}`}
      style={{ left: module.x, top: module.y }}
      initial={false}
      animate={{
        opacity: isSystemOn ? 1 : 0,
        borderColor: isActive
          ? "rgba(34,211,238,0.75)"
          : isSystemOn
            ? "rgba(71,85,105,0.85)"
            : "rgba(71,85,105,0)",
        boxShadow: isActive
          ? "0 0 18px rgba(34,211,238,0.25), inset 0 0 12px rgba(34,211,238,0.06)"
          : "none",
      }}
      transition={
        isSystemOn
          ? {
              opacity: { duration: 0.8, delay: moduleDelay },
              borderColor: { duration: 0.35 },
              boxShadow: { duration: 0.35 },
            }
          : {
              opacity: { duration: 0.2 },
              borderColor: { duration: 0.15 },
              boxShadow: { duration: 0.15 },
            }
      }
    >
      <motion.span
        className="absolute inset-0 rounded-[10px] border border-cyan-300/50"
        initial={false}
        animate={{ opacity: isSystemOn ? (isActive ? 0.4 : [0, 0.75, 0.15]) : 0 }}
        transition={
          isSystemOn && !isActive
            ? { duration: 1.2, delay: moduleDelay + 0.2, times: [0, 0.35, 1] }
            : { duration: 0.3 }
        }
      />
      <span className="relative z-10">{module.label}</span>
    </motion.button>
  );
}
