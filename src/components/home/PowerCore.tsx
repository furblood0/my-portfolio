"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isSystemOn: boolean;
  isCoreHovered: boolean;
  onToggle: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export function PowerCore({
  isSystemOn,
  isCoreHovered,
  onToggle,
  onHoverStart,
  onHoverEnd,
}: Props) {
  return (
    <>
      <motion.button
        type="button"
        onClick={onToggle}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-full text-center"
        initial={false}
        animate={{
          scale: isSystemOn ? 1 : [1, isCoreHovered ? 1.04 : 1.02, 1],
          borderColor: isSystemOn ? "rgba(34,211,238,0.85)" : "rgba(100,116,139,0.5)",
          backgroundColor: isSystemOn ? "rgba(2,6,23,0.88)" : "rgba(15,23,42,0.65)",
          boxShadow: isSystemOn
            ? "0 0 34px rgba(34,211,238,0.35)"
            : isCoreHovered
              ? "0 0 24px rgba(34,211,238,0.2)"
              : "0 0 12px rgba(100,116,139,0.15)",
          color: isSystemOn ? "#22d3ee" : "#94a3b8",
        }}
        transition={{
          scale: isSystemOn
            ? { type: "spring", stiffness: 120, damping: 12 }
            : { duration: isCoreHovered ? 1.4 : 3.1, ease: "easeInOut", repeat: Infinity },
          borderColor: { duration: 0.35 },
          backgroundColor: { duration: 0.35 },
          boxShadow: { duration: 0.35 },
          color: { duration: 0.35 },
        }}
        style={{ borderWidth: "1px", borderStyle: "solid" }}
      >
        <motion.span
          className="pointer-events-none absolute inset-[-8px] rounded-full border border-cyan-300/45"
          initial={false}
          animate={{
            opacity: isCoreHovered || isSystemOn ? 0.7 : 0.3,
            scale: isCoreHovered && !isSystemOn ? 1.05 : 1,
          }}
          transition={{ duration: 0.25 }}
        />
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.3em] ${
            isSystemOn ? "text-cyan-200/75" : "text-slate-500"
          }`}
        >
          Power Core
        </span>
        <strong
          className={`mt-2 text-3xl font-semibold ${
            isSystemOn ? "text-cyan-400" : "text-slate-400/80"
          }`}
        >
          Furkan
        </strong>
      </motion.button>

      <AnimatePresence>
        {!isSystemOn && isCoreHovered && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[calc(50%-126px)] -translate-x-1/2 rounded-sm border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-slate-300 backdrop-blur-sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          >
            Initialize System
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
