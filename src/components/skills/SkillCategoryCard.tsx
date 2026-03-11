"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type SkillCategory, type TechLevel } from "@/data/skills";

const TECH_ORDER: Record<TechLevel, number> = {
  expert: 0, proficient: 1, intermediate: 2, beginner: 3,
};

const LANG_ORDER: Record<string, number> = {
  Native: 0, C2: 1, C1: 2, B2: 3, B1: 4, A2: 5, A1: 6,
};

type Props = {
  category: SkillCategory;
  index: number;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  onCollapse: (id: string) => void;
};

const TECH_LEVEL_STYLE: Record<TechLevel, string> = {
  expert:       "border-cyan-700/60 bg-cyan-950/40 text-cyan-400",
  proficient:   "border-blue-700/50 bg-blue-950/30 text-blue-400",
  intermediate: "border-slate-600/50 bg-slate-800/40 text-slate-400",
  beginner:     "border-slate-700/40 bg-slate-900/30 text-slate-600",
};

const LANG_LEVEL_STYLE: Record<string, string> = {
  Native: "border-emerald-700/60 bg-emerald-950/40 text-emerald-400",
  C2:     "border-cyan-700/60 bg-cyan-950/40 text-cyan-400",
  C1:     "border-blue-700/50 bg-blue-950/30 text-blue-400",
  B2:     "border-indigo-700/50 bg-indigo-950/30 text-indigo-400",
  B1:     "border-slate-600/50 bg-slate-800/40 text-slate-400",
  A2:     "border-slate-700/40 bg-slate-900/30 text-slate-500",
  A1:     "border-slate-700/40 bg-slate-900/30 text-slate-600",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-2"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </motion.svg>
  );
}

export function SkillCategoryCard({ category, index, isExpanded, onExpand, onCollapse }: Props) {
  const sortedItems = [...category.items].sort((a, b) => {
    const rankA =
      a.kind === "tech" ? TECH_ORDER[a.level] :
      a.kind === "lang" ? LANG_ORDER[a.level] ?? 99 : 99;
    const rankB =
      b.kind === "tech" ? TECH_ORDER[b.level] :
      b.kind === "lang" ? LANG_ORDER[b.level] ?? 99 : 99;
    return rankA - rankB;
  });
  return (
    <motion.article
      className={`overflow-hidden rounded-xl border bg-slate-900/50 backdrop-blur transition-colors duration-200 ${
        isExpanded
          ? "cursor-default border-slate-600/80"
          : "cursor-pointer border-slate-700/60 hover:border-slate-600/80"
      }`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      onClick={() => { if (!isExpanded) onExpand(category.id); }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <span
          className={`font-mono text-sm font-semibold tracking-[0.04em] transition-colors duration-200 ${
            isExpanded ? "text-cyan-300" : "text-slate-200"
          }`}
        >
          {category.label}
        </span>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.14em] text-slate-700">
            {String(category.items.length).padStart(2, "0")} items
          </span>
          <button
            type="button"
            aria-label={isExpanded ? "Kapat" : "Genişlet"}
            onClick={(e) => {
              e.stopPropagation();
              if (isExpanded) onCollapse(category.id);
              else onExpand(category.id);
            }}
            className={`cursor-pointer transition-colors duration-200 ${
              isExpanded ? "text-cyan-400 hover:text-cyan-300" : "text-slate-600 hover:text-slate-400"
            }`}
          >
            <ChevronIcon open={isExpanded} />
          </button>
        </div>
      </div>

      {/* ── Expanded content ── */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-2.5 border-t border-slate-800/60 px-5 pb-5 pt-4">
              {sortedItems.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-slate-300">{item.name}</span>

                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    {/* Level badge */}
                    {item.kind === "tech" && (
                      <span
                        className={`rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${
                          TECH_LEVEL_STYLE[item.level]
                        }`}
                      >
                        {item.level}
                      </span>
                    )}
                    {item.kind === "lang" && (
                      <span
                        className={`rounded border px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] ${
                          LANG_LEVEL_STYLE[item.level] ?? LANG_LEVEL_STYLE["B1"]
                        }`}
                      >
                        {item.level}
                      </span>
                    )}

                    {/* Note (lang & interest) */}
                    {(item.kind === "lang" || item.kind === "interest" || item.kind === "method") &&
                      "note" in item && item.note && (
                        <span className="font-mono text-[10px] text-slate-600">{item.note}</span>
                      )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
