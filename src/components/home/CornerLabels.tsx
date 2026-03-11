"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isSystemOn: boolean;
};

export function CornerLabels({ isSystemOn }: Props) {
  return (
    <AnimatePresence>
      {isSystemOn && (
        <>
          <motion.div
            className="absolute left-8 top-6 font-mono text-xs tracking-[0.22em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            THE KINETIC BLUEPRINT
          </motion.div>
          <motion.div
            className="absolute bottom-7 right-8 font-mono text-[10px] tracking-[0.22em] text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.15, duration: 0.4 }}
          >
            SYSTEM STATUS // NOMINAL
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
