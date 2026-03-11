"use client";

import { motion } from "framer-motion";
import { type TimelineItem } from "@/data/about";

type Props = {
  items: TimelineItem[];
};

export function Timeline({ items }: Props) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        aria-hidden
        className="absolute left-[72px] top-0 h-full w-px bg-gradient-to-b from-cyan-900/80 via-slate-700/50 to-transparent"
      />

      <ul className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="relative flex gap-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.3 + index * 0.12, ease: "easeOut" }}
          >
            {/* Year */}
            <span className="w-[72px] shrink-0 pt-0.5 text-right font-mono text-[11px] tracking-[0.1em] text-cyan-500/80">
              {item.year}
            </span>

            {/* Dot on line */}
            <span
              aria-hidden
              className="absolute left-[68px] top-1.5 h-2 w-2 rounded-full border border-cyan-400/60 bg-slate-950"
            />

            {/* Content */}
            <div className="flex-1 pb-2 pl-6">
              <p className="font-mono text-sm font-semibold tracking-[0.06em] text-slate-100">
                {item.title}
              </p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-slate-500">
                {item.place}
              </p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
