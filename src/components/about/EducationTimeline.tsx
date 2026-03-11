"use client";

import { motion } from "framer-motion";
import { type EducationItem } from "@/data/about";

type Props = {
  items: EducationItem[];
};

export function EducationTimeline({ items }: Props) {
  return (
    <div className="relative pl-7">
      {/* Vertical line */}
      <div
        aria-hidden
        className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-cyan-800/70 via-slate-700/40 to-transparent"
      />

      <ul className="flex flex-col gap-6">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: "easeOut" }}
          >
            {/* Dot */}
            <span
              aria-hidden
              className="absolute -left-7 top-[5px] flex h-3.5 w-3.5 items-center justify-center"
            >
              <span className="h-2 w-2 rounded-full border border-cyan-400/70 bg-slate-950" />
            </span>

            {/* Card */}
            <div className="rounded-lg border border-slate-800/60 bg-slate-900/40 px-4 py-3.5">
              {/* Period + degree */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.08em] text-cyan-500/80">
                  {item.period}
                </span>
                <span className="rounded border border-slate-700/50 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">
                  {item.degree}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2.5">
                <p className="font-mono text-sm font-semibold tracking-[0.04em] text-slate-100">
                  {item.department}
                </p>
                {item.gpa && (
                  <span className="rounded border border-cyan-900/60 bg-cyan-950/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-cyan-400/80">
                    GPA {item.gpa}
                  </span>
                )}
              </div>

              <p className="mt-0.5 font-mono text-[11px] tracking-[0.06em] text-slate-500">
                {item.school}
              </p>

              {item.description && (
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
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
