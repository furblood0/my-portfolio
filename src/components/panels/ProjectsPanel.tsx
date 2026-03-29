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
      <div className="flex gap-0.5 border-b border-slate-800/60">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`-mb-px cursor-pointer border-b-2 px-3 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors duration-200 ${
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

          {/* Rest of projects */}
          {rest.length > 0 && (
            <div className="flex flex-col gap-3">
              {featured && rest.length > 0 && (
                <span className="font-mono text-[9px] tracking-[0.22em] text-slate-600 uppercase px-0.5">
                  Other Projects
                </span>
              )}
              {rest.map((project, index) => (
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
