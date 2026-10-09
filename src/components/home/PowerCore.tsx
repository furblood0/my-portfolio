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
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <motion.button
        type="button"
        onClick={onOpenAbout}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="relative flex h-44 w-44 cursor-pointer flex-col items-center justify-center rounded-full border border-cyan-400/80 bg-slate-950/90 text-center compact:h-24 compact:w-24"
        style={{ boxShadow: "0 0 34px rgba(34,211,238,0.35)" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-8px] rounded-full border border-cyan-300/45 opacity-70 compact:inset-[-5px]"
        />
        <strong className="text-[1.65rem] font-semibold leading-none tracking-tight text-cyan-300 compact:text-lg">
          Furkan
        </strong>
        <span className="mt-2 text-center font-mono text-[10px] uppercase leading-snug tracking-[0.18em] text-slate-300 compact:mt-1 compact:text-[8px] compact:tracking-[0.14em]">
          Software
          <br />
          Developer
        </span>
      </motion.button>

      <AnimatePresence>
        {isCoreHovered && (
          <motion.div
            className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded-sm border border-slate-700/60 bg-slate-900/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-slate-300 backdrop-blur-sm"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
