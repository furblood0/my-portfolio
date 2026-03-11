"use client";

import { motion } from "framer-motion";
import { type SkillCategory } from "@/data/skills";

type Props = {
  category: SkillCategory;
  index: number;
};

export function SkillPanel({ category, index }: Props) {
  return (
    <motion.div
      className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-6 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
    >
      {/* Category header with circuit-line accent */}
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-400/80">
          {category.category}
        </span>
        <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-cyan-900/60 to-transparent" />
      </div>

      <ul className="flex flex-col gap-4">
        {category.items.map((skill, i) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-sm text-slate-300">{skill.name}</span>
              <span className="font-mono text-[11px] text-slate-600">{skill.level}%</span>
            </div>
            <div className="h-px w-full bg-slate-800">
              <motion.div
                className="h-px bg-gradient-to-r from-cyan-500 to-cyan-300/60"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12 + i * 0.07 + 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
