"use client";

import { motion } from "framer-motion";
import { getRouteDelay, type ComputedModule } from "@/lib/modules";

type Props = {
  module: ComputedModule;
  index: number;
  isActive: boolean;
  onToggle: (id: string) => void;
};

export function ModuleButton({ module, index, isActive, onToggle }: Props) {
  const routeDelay = getRouteDelay(index);
  const moduleDelay = routeDelay + 0.25;

  return (
    <motion.button
      type="button"
      onClick={() => onToggle(module.id)}
      className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg border bg-slate-950/80 px-6 py-3 font-mono text-sm tracking-[0.16em] transition compact:rounded-md compact:px-2.5 compact:py-1.5 compact:text-[11px] compact:tracking-[0.1em] ${
        isActive ? "text-cyan-300" : "text-slate-200 hover:text-cyan-300"
      }`}
      style={{ left: module.x, top: module.y }}
      initial={{ opacity: 0, borderColor: "rgba(71,85,105,0)" }}
      animate={{
        opacity: 1,
        borderColor: isActive ? "rgba(34,211,238,0.75)" : "rgba(71,85,105,0.85)",
        boxShadow: isActive
          ? "0 0 18px rgba(34,211,238,0.25), inset 0 0 12px rgba(34,211,238,0.06)"
          : "none",
      }}
      transition={{
        opacity: { duration: 0.4, delay: moduleDelay },
        borderColor: { duration: 0.35 },
        boxShadow: { duration: 0.35 },
      }}
    >
      <motion.span
        className="absolute inset-0 rounded-[10px] border border-cyan-300/50"
        initial={false}
        animate={{ opacity: isActive ? 0.4 : [0, 0.75, 0.15] }}
        transition={
          isActive
            ? { duration: 0.3 }
            : { duration: 1.2, delay: moduleDelay + 0.2, times: [0, 0.35, 1] }
        }
      />
      <span className="relative z-10 flex flex-col items-center gap-0.5">
        <span>{module.label}</span>
        <span className="font-sans text-[10px] normal-case tracking-normal text-slate-500 compact:hidden">
          {module.detail}
        </span>
      </span>
    </motion.button>
  );
}
