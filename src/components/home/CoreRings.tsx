"use client";

import { motion } from "framer-motion";

export function CoreRings() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/40 [animation:spin_14s_linear_infinite]" />
      <div className="absolute inset-3 rounded-full border border-dashed border-slate-500/50 [animation:spin_8s_linear_infinite_reverse]" />
    </motion.div>
  );
}
