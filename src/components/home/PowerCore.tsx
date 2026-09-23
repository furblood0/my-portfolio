"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isCoreHovered: boolean;
  onOpenAbout: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

export function PowerCore({
  isCoreHovered,
  onOpenAbout,
  onHoverStart,
  onHoverEnd,
}: Props) {
  return (
    <>
      <motion.button
        type="button"
        onClick={onOpenAbout}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-full border border-cyan-400/80 bg-slate-950/90 text-center"
        style={{ boxShadow: "0 0 34px rgba(34,211,238,0.35)" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-8px] rounded-full border border-cyan-300/45 opacity-70"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200/75">
          Power Core
        </span>
        <strong className="mt-2 text-3xl font-semibold text-cyan-400">
          Furkan
        </strong>
      </motion.button>

      <AnimatePresence>
        {isCoreHovered && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[calc(50%-126px)] -translate-x-1/2 rounded-sm border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-slate-300 backdrop-blur-sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
