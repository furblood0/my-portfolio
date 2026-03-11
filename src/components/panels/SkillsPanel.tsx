"use client";

import { useState } from "react";
import { SKILL_GROUPS } from "@/data/skills";
import { SkillCategoryCard } from "@/components/skills/SkillCategoryCard";

export function SkillsPanel() {
  const allIds = SKILL_GROUPS.flatMap((g) => g.categories.map((c) => c.id));
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(allIds));

  const handleExpand = (id: string) =>
    setExpandedIds((prev) => new Set(prev).add(id));

  const handleCollapse = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  return (
    <div className="flex flex-col gap-8">
      {SKILL_GROUPS.map((group) => (
        <section key={group.id}>
          {/* ── Meta-group header (not clickable) ── */}
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-500/70">
              {group.label}
            </span>
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-cyan-900/50 to-transparent" />
          </div>

          {/* ── Accordion categories ── */}
          <div className="flex flex-col gap-3">
            {group.categories.map((category, index) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
                isExpanded={expandedIds.has(category.id)}
                onExpand={handleExpand}
                onCollapse={handleCollapse}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
