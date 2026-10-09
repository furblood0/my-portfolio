"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { PROJECTS, type ProjectCategory } from "@/data/projects";

type FilterCategory = ProjectCategory | "all";

const CATEGORY_LABELS: Record<FilterCategory, string> = {
  all: "ALL",
  web: "WEB",
  backend: "BACKEND",
  mobile: "MOBILE",
  tool: "TOOL",
  game: "GAME",
  desktop: "DESKTOP",
};

export function ProjectsPanel() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const availableCategories: FilterCategory[] = [
    "all",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) ?? null;
  const rest = filtered.filter((p) => !p.featured);
  const selected = rest.filter((p) => !p.archive);
  const earlier = rest.filter((p) => p.archive);

  const handleExpand = (id: string) =>
    setExpandedIds((prev) => new Set(prev).add(id));
  const handleCollapse = (id: string) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  return (
    <div className="flex flex-col gap-5">
      {/* Category filter tabs */}
      <div className="-mx-1 flex gap-0.5 overflow-x-auto border-b border-slate-800/60">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`-mb-px shrink-0 cursor-pointer border-b-2 px-2.5 py-2 font-mono text-[10px] tracking-[0.14em] transition-colors duration-200 sm:px-3 sm:tracking-[0.18em] ${
              activeCategory === cat
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          {/* Featured project */}
          {featured && <FeaturedProjectCard project={featured} />}

          {selected.length > 0 && (
            <div className="flex flex-col gap-3">
              {featured && (
                <span className="px-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">
                  More work
                </span>
              )}
              {selected.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isExpanded={expandedIds.has(project.id)}
                  onExpand={handleExpand}
                  onCollapse={handleCollapse}
                />
              ))}
            </div>
          )}

          {earlier.length > 0 && (
            <div className="flex flex-col gap-3">
              <span className="px-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">
                Earlier
              </span>
              {earlier.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isExpanded={expandedIds.has(project.id)}
                  onExpand={handleExpand}
                  onCollapse={handleCollapse}
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="py-8 text-center font-mono text-xs tracking-[0.12em] text-slate-600">
              NO PROJECTS IN THIS CATEGORY
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
