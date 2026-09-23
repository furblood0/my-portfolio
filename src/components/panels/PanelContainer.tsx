"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  side: "left" | "right";
  title: string;
  panelWidth: number;
  onClose: () => void;
  children: React.ReactNode;
};

const SWIPE_THRESHOLD = 80;

export function PanelContainer({ side, title, panelWidth, onClose, children }: Props) {
  const isLeft = side === "left";
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (isLeft && deltaX < -SWIPE_THRESHOLD) onClose();
    if (!isLeft && deltaX > SWIPE_THRESHOLD) onClose();
    touchStartX.current = null;
  };

  return (
    <motion.aside
      className={`fixed top-0 z-30 flex h-screen flex-col bg-slate-950/[0.97] backdrop-blur-md ${
        isLeft
          ? "left-0 border-r border-slate-700/50"
          : "right-0 border-l border-slate-700/50"
      }`}
      style={{ width: panelWidth }}
      initial={{ x: isLeft ? -panelWidth : panelWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isLeft ? -panelWidth : panelWidth, opacity: 0 }}
      transition={{ type: "spring", stiffness: 110, damping: 22, mass: 0.8 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Faint grid overlay */}
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* Header */}
      <div className="relative flex shrink-0 items-center justify-between border-b border-slate-800/60 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400/90">
            {`${title} //`}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className="flex h-6 w-6 items-center justify-center rounded border border-slate-700/60 font-mono text-base leading-none text-slate-500 transition-colors hover:border-cyan-600/60 hover:text-cyan-400"
        >
          ×
        </button>
      </div>

      {/* Scrollable content */}
      <div className="relative flex-1 overflow-y-auto px-6 py-6">
        {children}
      </div>
    </motion.aside>
  );
}
